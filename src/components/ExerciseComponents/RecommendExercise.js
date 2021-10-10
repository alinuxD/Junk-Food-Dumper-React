/*eslint-disable*/
import React from "react";
import {Container, Row, Col,InputGroup, Input,} from "reactstrap";
import {round} from "mathjs";

// icon 
import {FaRunning , FaListUl} from 'react-icons/fa'




function RecommendExercise(props){

    // weight = <div>this.props.weight</div>
    const exercise = { "exerciseList" : [
            { "name":"Walking 2.0 mph" , "calories": "0.411617815" },
            {"name":"Playing Catch", "calories":"0.515199272"},
            {"name":"Bird watching", "calories":"0.515199272"},
            {"name":"Playing with animals", "calories":"0.515199272"},
            {"name":"Playing volleyball", "calories":"0.617426722"},
            {"name":"Walking the dog", "calories":"0.617426722"},
            {"name":"Walking 3.0 mph", "calories":"0.679710997"},
            {"name":"Cycling < 10 mph", "calories":"0.82323563"},
            {"name":"Badminton", "calories":"0.92749409"},
            {"name":"Table tennis", "calories":"0.82323563"},
            {"name":"Tai chi", "calories":"0.82323563"},
            {"name":"Ballet", "calories":"0.92749409"},
            {"name":"Basketball", "calories":"0.92749409"},
            {"name":"Softball, Baseball", "calories":"1.02972154"},
            {"name":"Walking 4.0 mph", "calories":"1.02972154"},

        
        ]};

    var randomList=[]
    while (randomList.length<7){
        var num= parseInt(Math.floor(Math.random()*10))
        if (randomList.indexOf(num)==-1){
            randomList.push(num)
        }

    }


    return (
        <>
         
            <Row>    
                <Col style={{padding:'50px'}}>
                    <h2 align='center' className="title">Recommended Exercise</h2>
                    <h4>
                        <table>
                            <tbody>
                            <tr>
                                <th align='center'>Exercise Name</th>
                                <th align='center'>Calories Burnt / Hour</th>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[0]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[0]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[1]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[1]].calories*parseInt(props.value),2)}</td>
                            </tr >
                            <tr>
                                <td>{exercise.exerciseList[randomList[2]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[2]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[3]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[3]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[4]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[4]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr>
                                <td>{exercise.exerciseList[randomList[5]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[5]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[6]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td align='center'>{round(exercise.exerciseList[randomList[6]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </h4>
                </Col>
                <Col>
                <svg width="570" height="500">
                    <ellipse cx="350" cy="250" rx="300" ry="250" style={{fill:"lightgray", stroke:'white',strokeWidth:"1"}}/>
                    <text x='210' y='120' style={{fontSize:'45px', fontWeight:'bold', fill:'black'}}> Do you know </text>
                    <text x='130' y='170' style={{fontSize:'25px', fontWeight:'bold'}}>To lose 1 kilogram, you need to  
                        <tspan x='130' y='200'>
                        burn 7,700 calories. 
                        </tspan>
                        <tspan x='130' y='230'>
                        Our recommendation is to   
                        </tspan>
                        <tspan x='130' y='260'>
                        choose an exercise you like 
                        </tspan>
                        <tspan x='130' y='290'>
                        and keep exercise for your
                        </tspan>
                        <tspan x='130' y='320'>
                        healthy lifestyle.
                        </tspan>
                    </text>
                    <text x='130' y='360' style={{fontSize:'28px', fontWeight:'bold', fill:'red'}}>
                        Please contact your GP 
                        <tspan x='130' y='390'>
                        for suggestion and healthy 
                    </tspan>
                    <tspan x='130' y='420'>
                        advices before exercise.
                    </tspan>
                    </text>

                </svg>
                </Col>
            </Row>
            {/* <Row style={{marginTop:"63px"}}>
                <Col md="6">

                    <h3 className="title">
                        <br></br><br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Do you know
                    </h3>
                </Col>
                <Col md="6">
                    
                    <h3>

                    </h3>
                    <h5>
                        <br></br>
                        To lose 1 kilogram, you need to burn 7,700 calories.
                        Our recommendation is to choose an exercise you like and keep exercise and for your healthy life.
                    </h5>
                    <h3 style={{color:'red'}}>
                        <b>Please contact your GP for healthy advices before exercise</b>
                    </h3>
                </Col>
            </Row> */}

        </>
    )

}

export default RecommendExercise;
