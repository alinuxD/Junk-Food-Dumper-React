
import HomeNavbar from "../components/Navbars/HomeNavbar";
import {Alert, Button, CardBody, Col, Container, Row} from "reactstrap";
import DefaultFooter from "../components/Footers/DefaultFooter";
import React, {useState, useEffect, useReducer,  Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import SearchPage from "../assets/css/SearchPage.css";
import SearchResultPageHeader from "../components/Headers/SearchResultPageHeader";
import defaultImage from "../assets/img/default.jpg"
import FoodSearchHeader from "../components/Headers/FoodSearchHeader";
import {Link} from "react-router-dom";
import {Route} from "react-router";
import FoodDetailsPage from "./FoodDetailsPage";

function defaultPic(pd) {
    if ("recipe_image" in pd)
    {return pd.recipe_image}
    else {return defaultImage;}
}



function DietPlanPage() {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [queryFather, setQueryFather] = useState("")
    const [query, setQuery] = useState("")




    const getData = async() => {
        const resp = await axios.get(`http://api.junkfooddumper.tk/recipes/search`, {
            params: {
                query: queryFather,
            }
        })


        // error control
        if(resp.data==""){
            alert('Please enter valid ingredients.')
            setQueryFather(query)
            return
        }
        setQuery(queryFather)



        const data = resp.data.recipes.recipe;

        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <div key={pd.recipe_id}>


            <CardBody style={{textAlign:'left',marginBottom:'10%',marginTop:'5%',align:'center',marginLeft:'420px',paddingBottom:'-2px',paddingTop:'-2px',width:'70%',minWidth:'500px'}}>
                <Col md="2" style={{float:'left',position: 'absolute'}}>
                    <img src={defaultPic(pd)} style={{float:'left',height:'150px',width:'160px',marginBottom:'50px',marginRight:'0px'}}/>
                </Col>
                <Col md="10" style={{float:'right',textAlign:'left'}}>
                    <p style={{fontSize: '1.2em',color:'black',fontWeight:'700',position: 'absolute'}}>
                        {pd.recipe_name}
                    </p>
                    <p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'400px',position: 'absolute',marginTop:'50px'}}>
                        {pd.recipe_description}
                    </p>

                    <Button style={{align:'left',fontSize: '1.2em',marginLeft:'0px',
                        position: 'absolute',marginTop:'100px',webkitTransitionDuration:'0.4s',transitionDuration:'0.4s'}}
                            id="click"
                            block
                            className="newButton2"
                            size="lg"
                    >
                        <Link to={'/food-details-page/'+pd.recipe_id} style={{textDecoration:'none',color:'white'}}>
                            Know more
                        </Link>

                    </Button>

                </Col>

            </CardBody>


        </div>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage ))
    }


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * 10)
    };

    useEffect(() => {
        getData()
    }, [offset,queryFather])



    useEffect(() => {
        document.body.classList.add("about-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("about-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);


    return (
        <>
            <HomeNavbar />

            <div className="wrapper">
                <FoodSearchHeader setQueryFather ={setQueryFather}/>
                <div className="DietPlanPage" >

                    <div className="demo_line_01" style={{fontSize: '1.3em',color:'#3C7A33',fontWeight:'700',position:'relative'}}>Recommended Recipes</div>
                    <h2 style={{fontSize: '2em',color:'black',fontWeight:'700',marginTop:'70px',marginLeft:'480px',marginBottom:'10px',position:'relative'}}>
                        Your Ingredients: {query}
                    </h2>


                    <CardBody style={{textAlign:'center'}}>
                        <div className="SearchPage">
                            {data}
                            <div style={{marginLeft:'600px',marginTop:'250px'}}>
                                <ReactPaginate
                                               previousLabel={"prev"}
                                               nextLabel={"next"}
                                               breakLabel={"..."}
                                               breakClassName={"break-me"}
                                               pageCount={pageCount}
                                               marginPagesDisplayed={2}
                                               pageRangeDisplayed={5}
                                               onPageChange={handlePageClick}
                                               containerClassName={"pagination"}
                                               subContainerClassName={"pages pagination"}
                                               activeClassName={"active"}/>
                            </div>
                        </div>
                    </CardBody>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default DietPlanPage;
