import React, {useState, useEffect, useRef} from "react";
import "assets/css/FlippingCard.css";

// reactstrap components
import {
    Container,
    Row,
    Col, Label, Input, FormGroup,
} from "reactstrap";

// core components


import {cos, round, string, variance} from "mathjs";
import axios from "axios";
import defaultImage from "assets/img/default.jpg";
import ReactToPrint from "react-to-print";


function PrintDailyRecipe(props) {

    const a4Page = {
        width: '210mm',
        height: '340mm',
        paddingTop: '18mm',
        display: 'flex',
        flexDirection: 'column'
    }
    var [totalData, setTotalData] = useState([])

    // var idDic = props
    var idDic = {
        1: [55986, 53697, 5062321],
        2: [1444326, 3629531, 53697, 5062321],
        3: []
        // ,3: [3629531, 53697, 5062321, 3629531, 53697, 5062321, 3629531, 53697, 5062321]
    }


    const getData = async () => {
        var tempData = []

        for (var key in idDic) {
            var dayData = []
            console.log('天数： '+key)
            console.log(idDic[key].length)
            if (idDic[key].length == 0)
            {
                console.log('No choice')
            }
            else
            {
                for (var i = 0; i < idDic[key].length; i++) {
                    var id = idDic[key][i]
                    var recipeData = {}
                    var recipeName = " "
                    var ingredients = {}
                    var directions = {}
                    console.log("开始getAPI,显示id")
                    console.log(id)
                    console.log("id显示结束")
                    let res = await axios.get(
                        `http://api.junkfooddumper.tk/recipes/get?id=${id}`,
                    ).catch(err => {
                        console.log(err)
                    })

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
                    recipeData["recipeName"] = recipeName
                    recipeData["ingredients"] = ingredients
                    recipeData["directions"] = directions
                    // return tempData
                    dayData.push(recipeData)
                    console.log(dayData)
                    //
                }
            }
            if (idDic[key].length > 0)
            {
                console.log('执行添加')
                var tempDayData = {}
                tempDayData['day'] = key
                tempDayData['chosenItems'] = dayData
                tempData.push(tempDayData)
                console.log(tempData)

            }
            else
            {
                console.log('不执行添加')
            }
        }
        console.log(tempData)
        setTotalData(tempData)
    }

    useEffect(() => {
        getData()
    }, [])

    var myDate = new Date().getDate()
    var myMonth = new Date().getMonth() + 1
    var myYear = new Date().getFullYear()

    return (
        <>
            <div className="wrapper" style={{display: 'none'}}>
                {/*<div className="wrapper">*/}
                <div className="section section-about-us">
                    <Container className="containerF" id='printArea'>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">


                            <div>
                                <div style={{marginTop: '-30px'}}>
                                    <Col md='6'>
                                        <p style={{fontWeight: 'bold', float: 'left'}}>
                                            Junk Food Dumper
                                        </p>
                                    </Col>
                                    <Col md='6'>
                                        <p align='right' style={{fontWeight: 'bold'}}>
                                            Export Date: {myDate}/{myMonth}/{myYear}
                                        </p>
                                    </Col>
                                </div>
                            </div>
                            <div style={{a4Page}}>
                                <div>
                                    <br></br><br></br><br></br><br></br><br></br><br></br>
                                    <br></br><br></br><br></br><br></br><br></br><br></br>
                                    <br></br><br></br><br></br><br></br><br></br><br></br>
                                </div>
                                <h2 align='center' className='title'>
                                    Healthy Recipes for You
                                </h2>
                                <div>
                                    <br></br><br></br><br></br><br></br><br></br>
                                </div>

                                <Row align='center' style={{pageBreakAfter: 'always'}}>
                                    {/*<p>*/}

                                    {/*</p>*/}
                                    {totalData.map(daily => (
                                        <li key={daily.day}
                                            style={{listStyleType: 'none', width: '30%', marginLeft: '15px'}}>
                                            <h2 style={{fontWeight: "bold"}}>
                                                Day {daily.day}:
                                            </h2>
                                            {daily.chosenItems.map(recipe => (
                                                <FormGroup check align='justify' style={{marginLeft: '90px'}}>
                                                    <Label check>
                                                        <Input type="checkbox"></Input>
                                                        <span className="form-check-sign"></span>
                                                        <li key={recipe.recipeName}>
                                                            {recipe.recipeName}
                                                        </li>
                                                    </Label>
                                                </FormGroup>
                                            ))}
                                        </li>
                                    ))}
                                </Row>


                                <div style={{marginLeft: '40px'}}>
                                    {totalData.map(daily => (
                                        <li key={daily.day} style={{
                                            listStyleType: 'none',
                                            pageBreakBefore: 'auto',
                                            pageBreakAfter: 'always'
                                        }}>
                                            <h2 style={{marginTop: "100px", marginLeft: '-30px', fontWeigh: 'bold'}}>
                                                <b>Day {daily.day}:</b>
                                            </h2>
                                            {daily.chosenItems.map(recipe => (
                                                <li key={recipe.recipeName} style={{pageBreakAfter: 'auto'}}>
                                                    <Row>
                                                        <p style={{fontWeight: 'bold', fontSize: 20}}>
                                                            {recipe.recipeName}
                                                            <br></br>
                                                        </p>
                                                    </Row>
                                                    <div>
                                                        <Col md='4' style={{width: '35%', float: "left"}}>
                                                            <p style={{fontWeight: 'bold'}}>
                                                                Ingredients:
                                                            </p>
                                                            {recipe.ingredients.map(item => (
                                                                <FormGroup check>
                                                                    <Label check>
                                                                        <Input type="checkbox"></Input>
                                                                        <span className="form-check-sign"></span>
                                                                        <li key={item.serving_id}>
                                                                            {item.ingredient_description}</li>
                                                                    </Label>
                                                                </FormGroup>
                                                            ))}
                                                        </Col>

                                                        <Col md='6' style={{width: '100%'}}>
                                                            <p style={{fontWeight: 'bold'}}>
                                                                Description:
                                                            </p>
                                                            <div>
                                                                {recipe.directions.map(item => (
                                                                    <li key={item.direction_number}
                                                                        style={{listStyleType: 'display'}}>
                                                                        {item.direction_description}</li>
                                                                ))}
                                                            </div>
                                                        </Col>
                                                        <Row style={{width: '100%'}}/>
                                                        <hr/>
                                                    </div>
                                                </li>
                                            ))}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <ReactToPrint
                content={() => document.getElementById('printArea')}
                trigger={() => <button className="buttonStyle">Export to PDF!</button>}
            />

        </>

    )
        ;
}

export default PrintDailyRecipe;

