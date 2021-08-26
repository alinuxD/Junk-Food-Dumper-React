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
                    <Col className="ml-auto mr-auto text-center" md="6">
                        <h3 className="title">Recommended Exercise</h3>
                        <h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Exercise Name</th>
                                        <th>Calories Burnt per hour</th>
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
                        </h5>
                    </Col>
                </Row>

        </>
    )

}

export default RecommendExercise;
