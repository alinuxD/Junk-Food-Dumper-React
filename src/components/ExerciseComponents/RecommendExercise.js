/*eslint-disable*/
import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import {round} from "mathjs";





function RecommendExercise(props){

    // weight = <div>this.props.weight</div>
    const exercise = { "exerciseList" : [
            { "name":"Cycling, mountain bike, bmx" , "calories": "1.750729719" },
            {"name":"Stationary cycling, moderate", "calories":"1.441339355"},
            {"name":"Circuit training, minimal rest", "calories":"1.647825266"},
            {"name":"Weight lifting, light workout", "calories":"0.617426722"},
            {"name":"Stair machine", "calories":"1.85295717"},
            {"name":"Ski machine", "calories":"1.441339355"},
            {"name":"Stretching, hatha yoga", "calories":"0.82323563"},
            {"name":"Running, general", "calories":"1.647825266"},
            {"name":"Badminton", "calories":"0.92749409"},
            {"name":"Boxing, in ring", "calories":"2.471060896"}]};

    var randomList=[]
    while (randomList.length<3){
        var num= parseInt(Math.floor(Math.random()*10))
        if (randomList.indexOf(num)==-1){
            randomList.push(num)
        }

    }


    return (
        <>

            <Row>
                <h2 className="title">Recommended Exercise</h2>
                <Col className="ml-auto  text-center" md="6">

                    <h4>
                        <table>
                            <tbody>
                            <tr>
                                <th>Exercise Name</th>
                                <th>Calories Burnt / H</th>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[0]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>{round(exercise.exerciseList[randomList[0]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            <tr >
                                <td>{exercise.exerciseList[randomList[1]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>{round(exercise.exerciseList[randomList[1]].calories*parseInt(props.value),2)}</td>
                            </tr >
                            <tr>
                                <td>{exercise.exerciseList[randomList[2]].name}&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>{round(exercise.exerciseList[randomList[2]].calories*parseInt(props.value),2)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </h4>
                </Col>
            </Row>
            <Row style={{marginTop:"63px"}}>
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
            </Row>

        </>
    )

}

export default RecommendExercise;
