
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

        const slice1 = data.slice(offset, offset + perPage)
        const postData1 = slice1.map(pd => <div key={pd.recipe_id}>

            <Col md="6" style={{float:'left',position: 'relative',marginTop:'0px',paddingBottom:'50px',paddingLeft:'150px'}}>

                    <Col md="5" style={{float:'left',position: 'absolute',align:'left'}}>
                        <img src={defaultPic(pd)} style={{float:'left',height:'150px',width:'150px',marginBottom:'0px'}}/>
                    </Col>
                    <Col md="9" style={{float:'right',textAlign:'left',paddingLeft:'0px',paddingBottom:'20px'}}>
                        <p style={{fontSize: '1.2em',color:'black',fontWeight:'700',position: 'absolute'}}>
                            {pd.recipe_name}
                        </p>
                        <p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'120px',position: 'absolute',marginTop:'30px',paddingBottom:'100px'}}>
                            {pd.recipe_description}
                        </p>
                        {/*<p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'400px',position: 'absolute',marginTop:'70px'}}>*/}
                        {/*    Calories:{pd.recipe_nutrition.calories}*/}
                        {/*</p>*/}

                        <Button style={{align:'left',fontSize: '1.2em',marginLeft:'0px',verticalAlign:'middle',
                            position: 'relative',marginTop:'100px',webkitTransitionDuration:'0.4s',transitionDuration:'0.4s'}}
                                id="click"
                                block
                                className="newButton2"
                                size="lg"
                        >
                            <Link to={'/food-details-page/'+pd.recipe_id} style={{textDecoration:'none',color:'white'}}>
                                <span>Know more</span>
                            </Link>

                        </Button>

                    </Col>


            </Col>



        </div>)

        // const slice2 = data.slice(offset + perPage/2, offset + perPage)
        // const postData2 = slice2.map(pd => <div key={pd.recipe_id}>
        //
        //
        //     <Col md="5" style={{float:'right',position: 'relative'}}>
        //         <CardBody style={{textAlign:'left',marginBottom:'50px',marginTop:'100px',align:'center',marginLeft:'620px'}}>
        //             <Col md="3" style={{float:'left',position: 'absolute'}}>
        //                 <img src={defaultPic(pd)} style={{float:'left',height:'150px',width:'150px',marginBottom:'50px',marginRight:'0px',paddingRight:'0px'}}/>
        //             </Col>
        //             <Col md="5" style={{float:'right',textAlign:'left',paddingLeft:'0px'}}>
        //                 <p style={{fontSize: '1.2em',color:'black',fontWeight:'700',position: 'absolute'}}>
        //                     {pd.recipe_name}
        //                 </p>
        //                 <p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'400px',position: 'absolute',marginTop:'50px'}}>
        //                     {pd.recipe_description}
        //                 </p>
        //                 <p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'400px',position: 'absolute',marginTop:'70px'}}>
        //                     Calories:{pd.recipe_nutrition.calories}
        //                 </p>
        //
        //                 <Button style={{align:'left',fontSize: '1.2em',marginLeft:'0px',verticalAlign:'middle',
        //                     position: 'absolute',marginTop:'100px',webkitTransitionDuration:'0.4s',transitionDuration:'0.4s'}}
        //                         id="click"
        //                         block
        //                         className="newButton2"
        //                         size="lg"
        //                 >
        //                     <Link to={'/food-details-page/'+pd.recipe_id} style={{textDecoration:'none',color:'white'}}>
        //                         <span>Know more</span>
        //                     </Link>
        //
        //                 </Button>
        //
        //             </Col>
        //
        //         </CardBody>
        //     </Col>
        //
        //
        //
        // </div>)

        // const postData3 = postData1.concat(postData2)
        setData(postData1)
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
                <div className="DietPlanPage" style={{with:'10%',minWidth:'1800px'}}>

                    <div className="demo_line_01" style={{fontSize: '1.3em',color:'#3C7A33',fontWeight:'700',position:'relative',textAlign:'center'}}>Recommended Recipes</div>
                    <h2 style={{fontSize: '2em',color:'black',fontWeight:'700',marginTop:'70px',marginLeft:'480px',marginBottom:'150px',position:'relative'}}>
                        Your Ingredients: {query}
                    </h2>




                        <div className="SearchPage">
                            {data}
                            <div style={{marginLeft:'700px',marginTop:'1100px',position:'absolute'}}>
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

                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default DietPlanPage;
