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
    var idList = props.idList

    console.log(idList.length)
    var tempData = []
    //
    for (var a = 0; a < idList.length; a++) {
        var dayData = []
        console.log('天数： ' + idList[a].day)
        console.log(idList[a].chosenItems.length)
        if (idList[a].chosenItems.length == 0) {
            console.log('No choice')
        } else {
            for (var i = 0; i < idList[a].chosenItems.length; i++) {
                var recipe = idList[a].chosenItems[i]
                console.log(recipe)
                var recipeData = {}
                var recipeName = " "
                var ingredients = {}
                var directions = {}
                console.log("开始读取数据")


                if (typeof recipe.recipe_name === 'string') {
                    recipeName = recipe.recipe_name
                } else {
                    recipeName = 'No Data'
                }
                console.log(recipeName)


                if (recipe.ingredients.length > 0) {
                    ingredients = recipe.ingredients
                    // console.log(res.data.recipe.ingredients.ingredient)
                } else {
                    let emptyList = [{
                        serving_id: 'No Data',
                        ingredient_description: 'No Data'
                    }]
                    ingredients = emptyList
                }
                console.log(ingredients)

                if (recipe.directions.length > 0) {
                    let tempDirections = recipe.directions
                    console.log(tempDirections[0])
                    if (tempDirections[0] === 'direction_number') {
                        let list = [{
                            direction_number: tempDirections[0],
                            direction_description: tempDirections[1]
                        }]
                        directions = list
                    } else {
                        directions = recipe.directions
                    }
                } else {
                    let noDataList = [{
                        direction_number: 'No Data',
                        direction_description: 'No Data'
                    }]
                    directions = noDataList

                }
                console.log(directions)
                recipeData["recipeName"] = recipeName
                recipeData["ingredients"] = ingredients
                recipeData["directions"] = directions
                console.log(recipeData)
                dayData.push(recipeData)
                console.log(dayData)

            }
        }
        if (idList[a].chosenItems.length > 0) {
            console.log('执行添加')
            var tempDayData = {}
            tempDayData['day'] = idList[a].day
            tempDayData['chosenItems'] = dayData
            tempData.push(tempDayData)
            console.log(tempData)
        } else {
            console.log('不执行添加')
        }
    }

    console.log(tempData)
    var totalData = tempData


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

