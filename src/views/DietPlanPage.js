import HomeNavbar from "../components/Navbars/HomeNavbar";
import {Col} from "reactstrap";
import DefaultFooter from "../components/Footers/DefaultFooter";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import defaultImage from "../assets/img/default.jpg"
import FoodSearchHeader from "../components/Headers/FoodSearchHeader";
import NewFooter from "../components/Footers/NewFooter";
import {Link, useLocation , useHistory } from "react-router-dom";
import { Button, Tooltip } from 'antd';

function defaultPic(pd) {
    if ("recipe_image" in pd)
    {return pd.recipe_image}
    else {return defaultImage;}
}

function show(getBMI,list,totalCal,deleteRecipe,setList,setTotalCal,setNameList,nameList) {
    if(getBMI === "get") {
        return <p style={{color:'black',fontWeight:'1000',fontSize: '1.5em',textAlign:'center'}}>Your Recommended Calorie intake
            <p style={{color:'green',fontWeight:'1000',fontSize: '1.2em',marginLeft:'60px'}}>
                {parseInt(window.sessionStorage.getItem("Cal").split(' - ')[0].split(',')[0]+window.sessionStorage.getItem("Cal").split(' - ')[0].split(',')[1])
                +' - '
                +parseInt(window.sessionStorage.getItem("Cal").split(' - ')[1].split(',')[0]+window.sessionStorage.getItem("Cal").split(' - ')[1].split(',')[1])}
                <span style={{color:'black',fontWeight:'500',fontSize: '0.5em',marginLeft:'10px'}}>Kcal Per Day</span>
            </p>
            <Tooltip title="Create Your Plan">
                <Button   size="large" >
                    <Link to="/summary-page" >Create Plan</Link>
                </Button>
            </Tooltip>
            <p style={{color:'black',fontWeight:'1000',fontSize: '1.1em',textAlign:'center',marginLeft:'220px',marginTop:'150px',marginBottom:'250px',paddingRight:'100px'}}>
                Kindly add your favourite recipes

                <p style={{color:'#285B5D',fontWeight:'800',fontSize: '1em',textAlign:'center',paddingLeft:'25px',marginLeft:'-60px',marginTop:'30px'}}>
                    {nameList.map((item,index)=>(
                        <p style={{fontWeight:'800',fontSize: '0.8em',textAlign:'center',paddingLeft:'50px'}}>{item.recipe_name}
                            <span  style={{position: 'absolute',fontSize: '0.8em',marginLeft:'20px'}}>
                            <button
                                id="click"
                                className="newButton5"
                                onClick={() => {
                                    deleteRecipe(item.recipe_id);
                                    // setList(list => list.filter((item) => item !== item.recipe_name));
                                    // if(totalCal >= 0) {
                                    //     setTotalCal(totalCal => (totalCal - parseInt(item.recipe_nutrition.calories)));
                                    // }else {
                                    //     setTotalCal(0)
                                    // }
                                }}
                            >
                                <img src={require("assets/img/delete.png").default} style={{float:'left',marginTop:'-12px',marginLeft:'-15px'}}/>
                            </button>
                        </span>
                        </p>
                    ))}
                </p>

            </p>
        </p>
    } else {
        return <p style={{color:'red',fontWeight:'1000',fontSize: '1.5em',textAlign:'center'}}>Warning!
            <p style={{color:'black',fontWeight:'500',fontSize: '1.2em',paddingLeft:'70px',paddingRight:'70px',textAlign:'center'}}>
                You have not calculated your BMI to create a healthy eating plan.</p>
            <p style={{marginRight:'220px'}}>
                <button style={{fontSize: '0.7em',marginTop:'10px',position: 'absolute',transitionDuration:'0.5s',align:'center'}}
                        id="click"
                        className="newButton3"
                >
                    <Link to={'/bmi-page'} style={{textDecoration:'none',color:'white'}}>
                        <span>Get your BMI here!</span>
                    </Link>

                </button>
            </p>
        </p>

    }
}


function DietPlanPage() {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [queryFather, setQueryFather] = useState("")
    const [query, setQuery] = useState("")
    let [totalCal, setTotalCal] = useState(0)
    const [list, setList] = useState([])
    const getBMI = window.sessionStorage.getItem("BMI");
    // const n = window.sessionStorage.getItem("recipes")
    // window.sessionStorage.setItem("recipes",JSON.stringify(list))
    // window.sessionStorage.setItem("goBack",queryFather)
    // const v = JSON.parse(window.sessionStorage.getItem("recipes"))
    const [nameList, setNameList] = useState([])

    // Parameter from the BMI search page
    const location = useLocation()
    const history = useHistory()


    useEffect(() =>{
        const recipes = JSON.parse(window.sessionStorage.getItem("recipes"))
        if (recipes !== null){
            let newList = []
            for (let i = 0;i<recipes.length; i++){
                let newItem = {
                    recipe_id:recipes.recipe_id,
                    recipe_name:recipes.recipe_name
                }
                newList.push(newItem)
            }
            setNameList(newList)
        }else {
            window.sessionStorage.setItem("recipes",'{"recipe_id":"","recipe_name":""}')
        }
    },[window.sessionStorage.getItem("recipes")])
    //强制刷新
    // const [refresh, setRefresh] = useState(false);
    //
    // useEffect(() => {
    //     refresh && setTimeout(() => setRefresh(false))
    // }, [refresh])
    //
    // const doRefresh = () => setRefresh(true)

    // const [updater,setUpdater] = useState(0);
    // function forceUpdate(){
    //     setUpdater(updater => updater +1);
    // }
    // useEffect(() => {
    //     findRecipe();
    //     addRecipe();
    //     deleteRecipe();
    // }, [list,setList])

    const findRecipe = useCallback((id) => {
        //得在里面加个flag，判断card 是否存在
        const card = nameList.filter((c) => c.recipe_id === id)[0];
        //todo
        const isInList = (card !== undefined)

        return {
            isInList,
            index: nameList.indexOf(card),
        };
    },[nameList]);

    const addRecipe = useCallback((item) => {
        const newList = nameList;
        //find recipe 找到里面是否存在这个
        const { isInList, index } = findRecipe(item.recipe_id);

        if (!isInList){
            newList.push(
                {
                    recipe_id: item.recipe_id,
                    recipe_name: item.recipe_name
                }
            )
            setNameList(newList);
            // setNameList(nameList => [...nameList,{
            //     recipe_id: item.recipe_id,
            //     recipe_name: item.recipe_name
            // }]);
            // setTotalCal(totalCal => totalCal + parseInt(item.recipe_nutrition.calories));
            window.sessionStorage.setItem("recipes",JSON.stringify(nameList));
            // window.sessionStorage.setItem("nameList",JSON.stringify(nameList))
            // doRefresh();
            // forceUpdate()
        }else {
            //里面已经存在这个食谱的话，不添加
        }
    },[nameList,setNameList])

    const deleteRecipe = useCallback((id)=>{
        const { isInList, index } = findRecipe(id);
        const newList = [...nameList];
        newList.splice(index,1);
        setNameList(newList)
        // setNameList(nameList => nameList.filter((item) => item.recipe_id !== id));
        window.sessionStorage.setItem("recipes",JSON.stringify(nameList));
        // window.sessionStorage.setItem("nameList",JSON.stringify(nameList))
        // doRefresh();
        // forceUpdate()
    },[findRecipe,nameList,setNameList]);


    //存
    // let setSession = window.sessionStorage.setItem("key", "123")
    // //取
    // sessionStorage[key]
    // sessionStorage.getItem("key")
    // let getSession = JSON.parse(sessionStorage.getItem("key"))
    // //删
    // sessionStorage.removeItem(key)
    // //全删
    // sessionStorage.clear()
    // window.sessionStorage.setItem("check", "cat");
    // var getSession = window.sessionStorage.getItem("check");

    // const handleChange = () => {
    //     window.sessionStorage.setItem("check","123")
    //     setChecked(window.sessionStorage.getItem("check"))
    // };

    // const out = () => {
    //     return checked;
    // };

    // const newQuery = () => {
    //     if(queryFather == null ){
    //         return window.sessionStorage.getItem("goBack")
    //     } else {
    //         return queryFather
    //     }
    // }

    const getData = async() => {

        // Search from BMI page
        if (location.state != undefined){
            setQueryFather(location.state.key)
            history.replace()
        } 

        const resp = await axios.get(`http://api.junkfooddumper.tk/recipes/search`, {
            params: {
                query: window.sessionStorage.getItem("goBack"),
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

        const slice1 = data.slice(parseInt(window.sessionStorage.getItem("page"))*10, parseInt(window.sessionStorage.getItem("page"))*10 + perPage)
        const postData1 = slice1.map(pd => <div key={pd.recipe_id}>

            <Col md="4" style={{float:'left',position: 'relative',marginTop:'0px',paddingBottom:'50px',paddingLeft:'0px',marginLeft:'80px',marginRight:'40px'}}>

                <Col md="5" style={{float:'left',position: 'absolute',align:'left'}}>
                    <img src={defaultPic(pd)} style={{float:'left',height:'150px',width:'150px',marginBottom:'0px'}}/>
                </Col>
                <Col md="9" style={{float:'right',textAlign:'left',paddingLeft:'30px',paddingBottom:'20px'}}>
                    <p style={{fontSize: '1.2em',color:'black',fontWeight:'700',position: 'absolute'}}>
                        <p style={{fontSize: '1.1em',color:'black',fontWeight:'700',paddingLeft:'0px',marginLeft:'0px'}}>{pd.recipe_name}</p>
                        {/*<Checkbox*/}
                        {/*    style={{marginBottom:'20px',marginLeft:'20px', transitionDuration:"1s"}}*/}
                        {/*    icon={<img src={require("assets/img/check.png").default} style={{ width:'30px',height:'30px' }} alt="" />}*/}
                        {/*    borderColor="#D7C629"*/}
                        {/*    borderRadius={30}*/}
                        {/*    size={30}*/}
                        {/*    label={<p style={{fontSize: '1.2em',color:'black',fontWeight:'700',paddingLeft:'0px',marginLeft:'-5px'}}>{pd.recipe_name}</p>}*/}
                        {/*    right={true}*/}
                        {/*    onChange={() => {setList(list => [...list,Checkbox.state.checked+""])}}*/}
                        {/*    checked={false}*/}
                        {/*/>*/}


                    </p>

                    <p style={{fontSize: '1.0em',color:'black',fontWeight:'500',paddingRight:'0px',position: 'absolute',marginTop:'30px',paddingBottom:'50px'}}>
                        {pd.recipe_description}
                    </p>
                    {/*<p style={{fontSize: '1.1em',color:'black',fontWeight:'500',paddingRight:'400px',position: 'absolute',marginTop:'70px'}}>*/}
                    {/*    Calories:{pd.recipe_nutrition.calories}*/}
                    {/*</p>*/}


                    <span style={{float:'left'}}>
                            <button style={{align:'left',fontSize: '1.2em',marginLeft:'0px',verticalAlign:'middle',
                                position: 'relative',marginTop:'100px',transitionDuration:'0.5s'}}
                                    id="click"
                                    className="newButton2"
                            >
                            <Link to={'/food-details-page/'+pd.recipe_id} style={{textDecoration:'none',color:'white'}}>
                                <span>Know more</span>
                            </Link>

                        </button>
                        </span>

                    <span  style={{position: 'absolute',marginTop:'114px',float:'right',marginLeft:'20px',marginBottom:'200px'}}>
                            <button
                                id="click"
                                className="newButton4"
                                onClick={() => {
                                    addRecipe(pd);
                                    // const { isInList, index } = findRecipe(pd.recipe_id);
                                    // if (!isInList) {
                                    //     setList(list => [...list,pd])
                                    // }
                                    // window.sessionStorage.setItem("recipes",JSON.stringify(list));

                                }}
                            >
                                <span style={{fontSize:'1.5em'}}>+</span>
                            </button>
                        </span>
                </Col>
            </Col>

        </div>)

        setData(postData1)
        setPageCount(Math.ceil(data.length / perPage ))
    }


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        window.sessionStorage.setItem("page",selectedPage);
        setOffset(selectedPage * 10)
    };

    useEffect(() => {
        getData()
    }, [offset,queryFather])



    useEffect(() => {
        document.body.classList.add("about-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        document.body.setAttribute("style","overflow-x:auto;")
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

            <div className="wrapper" style={{minWidth:'1800px'}}>
                <FoodSearchHeader setQueryFather ={setQueryFather}/>
                <div className="DietPlanPage" style={{with:'10%',minWidth:'1800px'}}>

                    <div className="demo_line_01" style={{fontSize: '1.3em',color:'#3C7A33',fontWeight:'700',position:'relative',textAlign:'center',marginTop:'40px'}}>Recommended Recipes</div>
                    <Col md="8" style={{float:'left'}}>
                        <h2 style={{fontSize: '2em',color:'black',fontWeight:'700',marginTop:'70px',marginLeft:'180px',marginBottom:'150px',position:'relative'}}>
                            <img src={require("assets/img/Ingredients.png").default} style={{float:'left',height:'80px',width:'80px',marginTop:'-40px',marginRight:'10px'}}/>Your Ingredients: {query}
                        </h2>
                    </Col>
                    <Col md="5" style={{float:'right',paddingRight:'50px',marginLeft:'1100px',marginRight:'100px',position: 'absolute'}}>
                        {show(getBMI,list,totalCal,deleteRecipe,setList,setTotalCal,setNameList,nameList)}
                    </Col>
                    {/*<p style={{fontSize: '0.2em',position:'absolute'}}>*/}
                    {/*    {n}*/}
                    {/*</p>*/}

                    <div className="SearchPage">
                        {data}
                        <div style={{marginLeft:'600px',marginTop:'1400px',position:'absolute'}}>

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

                <NewFooter />
            </div>
        </>
    );
}

export default DietPlanPage;
