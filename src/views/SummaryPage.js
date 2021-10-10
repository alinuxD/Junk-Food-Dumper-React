import HomeNavbar from "../components/Navbars/HomeNavbar";
import React, {useState, useCallback} from "react";
import 'antd/dist/antd.css';

import {Modal} from 'antd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {DndProvider} from "react-dnd";
import axios from "axios";
import defaultImage from "../assets/img/default.jpg"
import { Button, Tooltip } from 'antd';
import {Link} from "react-router-dom";
import { ExclamationCircleOutlined,PlusOutlined } from '@ant-design/icons';


import SummaryPageHeader from "../components/Headers/SummaryPageHeader";
import Bucket from "../components/Summary/Bucket";
import CardItem from "../components/Summary/CardItem";
import PrintDailyRecipe from "../components/ExportPdf/PrintDailyRecipe";

function confirm() {
    Modal.confirm({
        title: 'Maximum recipes are 16',
        icon: <ExclamationCircleOutlined />,
        okText: 'OK',
        cancelText: 'Cancel',
    });
}

function round(number, precision) {
    return Math.round(+number + 'e' + precision) / Math.pow(10, precision);
}

function concatId(){
    let tempList =JSON.parse(sessionStorage.getItem('recipes'))
    if (tempList==null){
        tempList=[]
    }
    let newList = []
    for (let i=0; i < tempList.length;i++){
        newList.push(tempList[i].recipe_id)
    }

    return newList
}

function SummaryPage() {
    const card = {

        marginTop:'50px',
        marginLeft:'50px',
        marginRight:'50px',
        marginBottom:'25px',
        display: 'flex',
        maxWidth:'1400px',
        flexDirection:'row',
        flexWrap:'wrap'
    }

    const bucket = {
        overflow: 'hidden',
        clear: 'both',
        marginLeft:'50px',
        width:'1300px'
    }

    const idDic = concatId()
    const [chosenList,setChosenList] = useState([])


    const getData = async ()=>{
        let dayData = []
        for (let i = 0; i < idDic.length; i++) {
            let id = idDic[i]
            let recipeData = []
            let recipeName = " "
            let recipeImage = " "
            let recipeNutrition = {}
            let numberOfServing = 1

            let ingredients = []
            let directions = []
            // console.log("开始getAPI,显示id")
            // console.log(id)
            // console.log("id显示结束")
            let res = await axios.get(
                `http://api.junkfooddumper.tk/recipes/get?id=${id}`,
            ).catch(err => {
                console.log(err)
            })

            try {
                recipeImage = res.data.recipe.recipe_images.recipe_image
            }
            catch (err){
                recipeImage = defaultImage
            }

            //份数
            try {
                numberOfServing = parseInt(res.data.recipe.number_of_servings)
            } catch (err) {
                numberOfServing = 1
            }

            //营养
            try {
                recipeNutrition = {
                    fiber: parseFloat(res.data.recipe.serving_sizes.serving.fiber),
                    calcium:parseFloat(res.data.recipe.serving_sizes.serving.calcium),
                    calories:parseFloat(res.data.recipe.serving_sizes.serving.calories),
                    carbohydrate:parseFloat(res.data.recipe.serving_sizes.serving.carbohydrate),
                    protein:parseFloat(res.data.recipe.serving_sizes.serving.protein),
                    fat:parseFloat(res.data.recipe.serving_sizes.serving.fat),
                }
            } catch (err) {
                recipeNutrition = {
                    fiber:0,
                    calcium:0,
                    calories:0,
                    carbohydrate:0
                }
            }

            //名字
            try {
                recipeName = res.data.recipe.recipe_name
            } catch (err) {
                recipeName = 'No Data'
            }


            try {
                ingredients = res.data.recipe.ingredients.ingredient
                // console.log(res.data.recipe.ingredients.ingredient)
            } catch (err) {
                let emptyList = [{
                    serving_id: 'No Data',
                    ingredient_description: 'No Data'
                }]
                ingredients = emptyList
            }

            try {
                let tempDirections = res.data.recipe.directions.direction
                if (Object.keys(tempDirections)[0] === 'direction_number') {
                    let list = [{
                        direction_number: tempDirections.direction_number,
                        direction_description: tempDirections.direction_description
                    }]
                    directions = list
                } else {
                    directions = res.data.recipe.directions.direction
                }
            } catch (err) {
                let noDataList = [{
                    direction_number: 'No Data',
                    direction_description: 'No Data'
                }]
                directions = noDataList

            }
            recipeData['recipe_id'] = id
            recipeData["recipe_name"] = recipeName
            recipeData["recipe_image"] = recipeImage
            recipeData["recipe_nutrition"] = recipeNutrition


            recipeData["ingredients"] = ingredients
            recipeData["directions"] = directions
            // return tempData
            dayData.push(recipeData)
            // console.log(dayData)

            }
        setChosenList(dayData)
    }


    React.useEffect(() => {
        getData()
    }, [])



    const [day1nut,setDay1Nut] = useState([0,0,0,0])
    const [day2nut,setDay2Nut] = useState([0,0,0,0])
    const [day3nut,setDay3Nut] = useState([0,0,0,0])

    const calculateTotal = (chosenItems,index)=>{
        let newdayList = [0,0,0,0]
        for (let i = 0; i < chosenItems.length; i++) {
            newdayList[0] = round(newdayList[0] + chosenItems[i].recipe_nutrition.calories,2);
            newdayList[1] = round(newdayList[1] + chosenItems[i].recipe_nutrition.protein,2);
            newdayList[2] = round(newdayList[2] + chosenItems[i].recipe_nutrition.fat,2);
            newdayList[3] = round(newdayList[3] + chosenItems[i].recipe_nutrition.carbohydrate,2);
        }
        if (index===0){
            setDay1Nut(newdayList)
        }else if (index===1){
            setDay2Nut(newdayList)
        }else if (index===2){
            setDay3Nut(newdayList)
        }
    }



    React.useEffect(() => {
        document.body.classList.add("summary-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("summary-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    const [dustbins, setDustbins] = useState([
        {day: 1, chosenItems: []},
        {day: 2, chosenItems: []},
        {day: 3, chosenItems: []}
    ])


    const handleDrop =  useCallback((index, item) => {
        const newDustbins = dustbins;
        const newItem={...item,"id":Date.now()}

        if (newDustbins[index].chosenItems.length<16){
            console.log(newDustbins[index].chosenItems.length)
            newDustbins[index].chosenItems.push(newItem)

            calculateTotal(newDustbins[index].chosenItems,index)

            setDustbins(newDustbins);
        }else {
            confirm()
        }

    })

    const findCard = useCallback((id,day) => {
        const card = dustbins[day-1].chosenItems.filter((c) => c.id === id)[0];

        return {
            card,
            index: dustbins[(day-1)].chosenItems.indexOf(card),
        };
    },[dustbins]);

    const moveCard = useCallback((id, atIndex,day) => {
        const { card, index } = findCard(id,day);
        const newDustbins = dustbins;
        newDustbins[(day-1)].chosenItems.splice(index,1);
        newDustbins[(day-1)].chosenItems.splice(atIndex,0,card);
        setDustbins(newDustbins)
    },[findCard,dustbins,setDustbins]);

    const deleteCard = useCallback((id,day)=>{
        const { card, index } = findCard(id,day);
        const newDustbins = [...dustbins];
        newDustbins[(day-1)].chosenItems.splice(index,1);
        setDustbins(newDustbins)

        calculateTotal(newDustbins[(day-1)].chosenItems,(day-1))


    },[findCard,dustbins,setDustbins]);

    const getNutByIndex = useCallback((index)=>{
            if (index===0){
                return day1nut;
           }else if (index===1){
                return day2nut
            }else if (index===2){
                return day3nut
            }

    })

    return (
        <>
            <HomeNavbar/>
            <SummaryPageHeader/>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h3 style={{marginLeft: '50px',marginTop:'50px'}}>Your Chosen Recipes:</h3>
                <p style={{color:'black',fontWeight:'1000',fontSize: '1.5em',textAlign:'right',marginTop:'50px',marginRight:'50px'}}>Your Recommended Calorie intake

                    <p style={{color:'green',fontWeight:'1000',fontSize: '1.2em',marginLeft:'20px'}}>
                        {parseInt(window.sessionStorage.getItem("Cal").split(' - ')[0].split(',')[0]+window.sessionStorage.getItem("Cal").split(' - ')[0].split(',')[1])
                        +' - '
                        +parseInt(window.sessionStorage.getItem("Cal").split(' - ')[1].split(',')[0]+window.sessionStorage.getItem("Cal").split(' - ')[1].split(',')[1])}
                        <span style={{color:'black',fontWeight:'500',fontSize: '0.5em',marginLeft:'10px'}}>Cal Per Day</span>
                    </p>
                </p>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div style={card}>
                    {chosenList.map((item, index) => {
                        return (
                            <>
                            <CardItem
                                key={index}
                                content={item.recipe_name}
                                recipe_image={item.recipe_image}
                                recipe_name={item.recipe_name}
                                recipe_id={item.recipe_id}
                                recipe_nutrition={item.recipe_nutrition}
                                ingredients={item.ingredients}
                                directions={item.directions}
                            />
                            </>
                        )
                    })}
                    <div style={{textAlign:'center'}}>
                    <Tooltip title="Add More Recipe">
                        <Button shape="circle"  size="large" >
                            <Link to="/diet-plan-page" >+</Link>
                        </Button>
                    </Tooltip>
                    </div>
                </div>

                <div style={bucket}>
                    {dustbins.map((item, index) => (
                        <Bucket  day={item.day} chosenItems={item.chosenItems}
                                 onDrop={(item) => handleDrop(index, item)} key={index}
                                 findCard = {findCard}
                                 moveCard = {moveCard}
                                 deleteCard = {deleteCard}
                                 calculateTotal={calculateTotal}
                                 nutList={

                                     getNutByIndex(index)
                                 }

                        />
                     ))}
                </div>

            </DndProvider>
            <div style={{textAlign:'center',marginTop:'50px',height:'100px'}}>
                <PrintDailyRecipe idList={dustbins} style={{marginBottom:'100px'}}/>
            </div>

        </>

    );
}

export default SummaryPage


