import HomeNavbar from "../components/Navbars/HomeNavbar";
import React, {useState, useCallback} from "react";
import 'antd/dist/antd.css';
import CardItem from "../components/Summary/CardItem";
import {Modal} from 'antd'


import { HTML5Backend } from 'react-dnd-html5-backend'

import BMIPageHeader from "../components/Headers/BMIPageHeader";
import {DndProvider} from "react-dnd";
import Bucket from "../components/Summary/Bucket";
import axios from "axios";
import DayContainer from "../components/Summary/DayContainer";
import defaultImage from "../assets/img/default.jpg"

import { Button, Tooltip } from 'antd';
import { ExclamationCircleOutlined,PlusOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {NavLink} from "reactstrap";
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

function SummaryPage() {
    const card = {

        marginTop:'50px',
        marginLeft:'50px',
        marginRight:'50px',
        marginBottom:'25px',
        display: 'flex'
    }

    const bucket = {
        overflow: 'hidden',
        clear: 'both',
        marginLeft:'50px',
        width:'1300px'
    }

    const idDic = [3629531, 53697, 5062321]
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
            console.log("开始getAPI,显示id")
            console.log(id)
            console.log("id显示结束")
            let res = await axios.get(
                `http://api.junkfooddumper.tk/recipes/get?id=${id}`,
            ).catch(err => {
                console.log(err)
            })

            //图片
            if (typeof res.data.recipe.recipe_images.recipe_image === 'string') {
                recipeImage = res.data.recipe.recipe_images.recipe_image
            } else {
                recipeImage = defaultImage
            }

            //名字
            if (typeof res.data.recipe.number_of_servings === 'string') {
                numberOfServing = parseInt(res.data.recipe.number_of_servings)
            } else {
                numberOfServing = 1
            }

            //营养
            if (typeof res.data.recipe.serving_sizes.serving === 'object') {
                recipeNutrition = {
                    fiber: parseFloat(res.data.recipe.serving_sizes.serving.fiber),
                    calcium:parseFloat(res.data.recipe.serving_sizes.serving.calcium),
                    calories:parseFloat(res.data.recipe.serving_sizes.serving.calories),
                    carbohydrate:parseFloat(res.data.recipe.serving_sizes.serving.carbohydrate),
                    protein:parseFloat(res.data.recipe.serving_sizes.serving.protein),
                    fat:parseFloat(res.data.recipe.serving_sizes.serving.fat),
                }
            } else {
                recipeNutrition = {
                    fiber:0,
                    calcium:0,
                    calories:0,
                    carbohydrate:0
                }
            }

            //名字
            if (typeof res.data.recipe.recipe_name === 'string') {
                recipeName = res.data.recipe.recipe_name
            } else {
                recipeName = 'No Data'
            }


            if (typeof res.data.recipe.ingredients.ingredient === 'object') {
                ingredients = res.data.recipe.ingredients.ingredient
                // console.log(res.data.recipe.ingredients.ingredient)
            } else {
                let emptyList = [{
                    serving_id: 'No Data',
                    ingredient_description: 'No Data'
                }]
                ingredients = emptyList
            }

            if (typeof res.data.recipe.directions.direction === 'object') {
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
            } else {
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
            console.log(dayData)

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

    const deleteTotal = (chosenItems,index)=>{
        if (index===0){
            let newdayList = [...day1nut]
            if (Array.isArray(chosenItems) && chosenItems.length === 0){
                newdayList=[0,0,0,0]
            }
            for (let i = 0; i < chosenItems.length; i++) {
                newdayList[0] = round(newdayList[0] - chosenItems[i].recipe_nutrition.calories,2);
                newdayList[1] = round(newdayList[1] - chosenItems[i].recipe_nutrition.protein,2);
                newdayList[2] = round(newdayList[2] - chosenItems[i].recipe_nutrition.fat,2);
                newdayList[3] = round(newdayList[3] - chosenItems[i].recipe_nutrition.carbohydrate,2);
            }
            setDay1Nut(newdayList)
        }else if (index===1){
            let newdayList = [...day2nut]
            if (Array.isArray(chosenItems) && chosenItems.length === 0){
                newdayList=[0,0,0,0]
            }
            for (let i = 0; i < chosenItems.length; i++) {
                newdayList[0] = round(newdayList[0] - chosenItems[i].recipe_nutrition.calories,2);
                newdayList[1] = round(newdayList[1] - chosenItems[i].recipe_nutrition.protein,2);
                newdayList[2] = round(newdayList[2] - chosenItems[i].recipe_nutrition.fat,2);
                newdayList[3] = round(newdayList[3] - chosenItems[i].recipe_nutrition.carbohydrate,2);
            }
            setDay2Nut(newdayList)
        }else if (index===2){
            let newdayList = [...day3nut]
            if (Array.isArray(chosenItems) && chosenItems.length === 0){
                newdayList=[0,0,0,0]
            }
            for (let i = 0; i < chosenItems.length; i++) {
                newdayList[0] = round(newdayList[0] - chosenItems[i].recipe_nutrition.calories,2);
                newdayList[1] = round(newdayList[1] - chosenItems[i].recipe_nutrition.protein,2);
                newdayList[2] = round(newdayList[2] - chosenItems[i].recipe_nutrition.fat,2);
                newdayList[3] = round(newdayList[3] - chosenItems[i].recipe_nutrition.carbohydrate,2);
            }
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

    // const

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
            <BMIPageHeader/>

            <h3 style={{margin: '50px'}}>Your Chosen Recipes</h3>
            <DndProvider backend={HTML5Backend}>
                <div style={card}>
                    {chosenList.map((item, index) => {
                        return (
                            <>
                            {/*<p>{JSON.stringify(dustbins)}</p>*/}
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
                    <Tooltip title="Add More Recipe">
                        <Button shape="circle"  size="large" >
                            <Link to="/diet-plan-page" >+</Link>

                        </Button>
                    </Tooltip>
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
            <PrintDailyRecipe idList={dustbins}/>
        </>

    );
}

export default SummaryPage


