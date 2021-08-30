import React, {useState} from "react";

// reactstrap components
import {
    Button,
    Input,

    InputGroup,
    Container,
    Col, CardBody,  Card
} from "reactstrap";

// core components

import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import BMIPageHeader from "../components/Headers/BMIPageHeader";
import RecommendExercise from "../components/ExerciseComponents/RecommendExercise";

import ReactSpeedometer from "react-d3-speedometer";
import RecommendIntake from "../components/ExerciseComponents/RecommendIntake";



function calcu(weight,height) {
    var s1 = weight;
    var s2 = height;
    var s3 = Number(s1)/((Number(s2)/100)*(Number(s2)/100));
    if (s3 >= 10 && s3 <= 40) {
        return s3.toFixed(1);
    } else {
        return "error";
    }
}

function select(age,gender) {
    const a1 = age;
    var a2 = [0,0,0,0,0];
    if(gender === 'Male') {
        if(Number(a1) === 10) {
            a2 = [12,14.2,19.3,22.1,24.1];
            return a2;
        }else if(Number(a1) === 11) {
            a2 = [12,14.5,20.1,23.2,25.2];
            return a2;
        }else if(Number(a1) === 12) {
            a2 = [12,14.9,21,24.2,26.2];
            return a2;
        }else if(Number(a1) === 13) {
            a2 = [12,15.4,21.8,25.1,27.1];
            return a2;
        }else if(Number(a1) === 14) {
            a2 = [12,15.9,22.6,26,28];
            return a2;
        }else if(Number(a1) === 15) {
            a2 = [12,16.5,23.4,26.8,28.8];
            return a2;
        }else {
            return alert("please input age between 10 - 15")
        }
    } else if(gender === 'Female') {
        if(Number(a1) === 10) {
            a2 = [12,14,20,23,25];
            return a2;
        }else if(Number(a1) === 11) {
            a2 = [12,14.4,20.8,24.1,26.1];
            return a2;
        }else if(Number(a1) === 12) {
            a2 = [12,14.8,21.7,25.2,27.2];
            return a2;
        }else if(Number(a1) === 13) {
            a2 = [12,15.3,22.5,26.2,28.2];
            return a2;
        }else if(Number(a1) === 14) {
            a2 = [12,15.9,23.3,27.2,29.2];
            return a2;
        }else if(Number(a1) === 15) {
            a2 = [12,16.3,24,28.1,30.1];
            return a2;
        }else {
            return alert("please input age between 10 - 15")
        }
    }


}


function BmiPage() {
    //state
    const [bmi, setBmi] = React.useState("12");
    const [speedBmi, setSpeedBmi] = React.useState("12");
    const [age, setAge] = useState(9)
    const [height, setHeight] = useState(null)
    const [weight,setWeight] = useState(null)
    // exerciseWeight is the value that will send to RecommendExercise component
    const [exerciseWeight, setExerciseWeight]= useState(50)
    const [exerciseDivDisplay, setExerciseDivDisplay]=useState('none')
    const [bmiDivDisplay, setBmiDivDisplay]=useState('none')
    const [guide, setGuide] = React.useState([12,15,24,27,29]);
    const [gender, setGender] = React.useState('Male');


    const [firstFocus, setFirstFocus] = React.useState(false);
    // const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("home-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("home-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    //submit Button function
    const submitValue = () => {
        let calValue = calcu(weight,height)
        if (age >=10 && age<=15   ){

            if (calValue != "error"){
                setSpeedBmi(calValue)
                setExerciseWeight(weight)
                setGuide(select(age,gender))
                setExerciseDivDisplay("block")
            }else{
                setExerciseDivDisplay("none")
                setBmiDivDisplay("none")
                alert("Height and  weight are out of range!")
            }
            setBmi(calValue)

        }else {
            alert("please input age between 10 - 15")
            setExerciseDivDisplay('none')
        }

    }

    return (
        <>
            <HomeNavbar />
            <div className="wrapper">
                <BMIPageHeader />
                <div className="section section-about-us">
                    <Container>

                        <h2 style={{color: 'black',fontSize: '35px',textAlign: 'left'}} className="title">What is BMI? Why is it important?</h2>
                        <h5 className="description" style={{color: 'black',fontSize: '20px',textAlign: 'left', fontWeight:'normal'}}>
                            BMI is a calculation of your size that takes into account
                            your height and weight. It's a good way to gauge whether
                            your weight is in healthy proportion to your height.
                            In fact, knowing your BMI can help you – and your GP –
                            determine any health risks you may face if it's outside of
                            the healthy range. BMI helps in averting major health issues.
                        </h5>

                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">

                            <Col className="ml-auto mr-auto" md="20">
                                <Card className="card-login card-plain">

                                    <h2 className="title">Calculate your child’s BMI below</h2>
                                    <Col md="6" style={{float:'left'}}>

                                        <InputGroup >
                                            <h4 style={{marginTop:'40px',marginRight: '-40px'}}>Gender:</h4>
                                            <Input style={{marginTop:'50px',marginRight: '0px',marginLeft: '0px'}}
                                                   label="Male" type='Radio' checked={gender === 'Male'} value="Male"
                                                   onChange={() => setGender('Male') }/>
                                            <font style={{fontSize: '1.5em',marginRight: '50px',marginLeft:'-20px',marginTop:'40px', fontWeight:'600'}}>Boy</font>

                                            <Input style={{marginTop:'50px',marginRight: '0px',marginLeft: '-50px'}}
                                                   label="Female" type='Radio' checked={gender === 'Female'} value="Female"
                                                   onChange={() => setGender('Female')}/>
                                            <font style={{fontSize: '1.5em',marginRight: '100px',marginLeft:'-20px',marginTop:'40px', fontWeight:'600'}}>Girl</font>

                                        </InputGroup>


                                        <InputGroup style={{marginBottom: '20px',marginTop:'10px'}}>
                                            <h4 style={{marginRight: '15px',marginLeft: '40px'}}>
                                                Age:
                                            </h4>

                                            <Input className="with-border" style={{fontSize: '1.5em',marginRight: '250px',marginLeft: '27px'}}
                                                   placeholder="Age..."
                                                   type='number'
                                                   onFocus={() => setFirstFocus(true)}
                                                   onBlur={() => setFirstFocus(true)}
                                                   onChange = {e => setAge(e.target.value)}
                                            ></Input>

                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '20px'}}>
                                            <h4 style={{marginRight: '15px',marginLeft: '13px'}}>
                                                Height:
                                            </h4>

                                            <Input className="with-border" style={{fontSize: '1.5em',marginRight: '150px',marginLeft: '23px'}}
                                                   placeholder="Height..."
                                                   type='number'
                                                   id='h'
                                                   onFocus={() => setFirstFocus(true)}
                                                   onBlur={() => setFirstFocus(true)}
                                                   onChange = {e => setHeight(e.target.value)}
                                            ></Input>

                                            <h4 style={{marginRight: '150px',marginLeft:'-120px'}}>
                                                cm
                                            </h4>
                                        </InputGroup>
                                        <InputGroup style={{marginBottom: '60px'}}>
                                            <h4 style={{marginRight: '15px',marginLeft: '13px'}}>
                                                Weight:
                                            </h4>

                                            <Input className="with-border" style={{fontSize: '1.5em',marginRight: '150px',marginLeft: '17px'}}
                                                   placeholder="Weight..."
                                                   type='number'
                                                   id='w'
                                                   onFocus={() => setFirstFocus(true)}
                                                   onBlur={() => setFirstFocus(true)}
                                                   onChange = {e => setWeight(e.target.value)}
                                            ></Input>

                                            <h4 style={{marginRight: '150px',marginLeft:'-120px'}}>
                                                Kg
                                            </h4>
                                        </InputGroup>

                                    </Col>
                                    <Col md="6" style={{float:'right'}}>


                                        <h3 style={{marginTop:'80px',marginBottom:'-40px',marginLeft:'100px',display:bmiDivDisplay}} >
                                            <font style={{marginRight: '15px',marginTop:'50px', fontWeight:'600'}}>
                                                Your BMI:
                                            </font>
                                            <font style={{fontSize: '2.0em',color:'#98D52C'}} >{bmi}</font>
                                            <font style={{marginRight: '15px',marginTop:'0px', fontWeight:'600',marginLeft:'15px'}}>
                                                Kg/㎡
                                            </font>
                                        </h3>

                                        <CardBody style={{marginTop:'120px',fontSize: '3.0em',marginLeft: '-65px',marginRight:'150px'}}>
                                            <ReactSpeedometer
                                                value={speedBmi}
                                                minValue={12}
                                                maxValue={guide[4]}
                                                segments={4}
                                                customSegmentStops={guide}
                                                forceRender={true}
                                                customSegmentLabels={[
                                                    {
                                                        text: "Underweight",
                                                        position: "OUTSIDE",
                                                        color: "#F5CD19",
                                                    },
                                                    {
                                                        text: "Normal",
                                                        position: "OUTSIDE",
                                                        color: "#5BE12C",
                                                    },
                                                    {
                                                        text: "Overweight",
                                                        position: "OUTSIDE",
                                                        color: "#ECA522",
                                                    },
                                                    {
                                                        text: "Obese",
                                                        position: "OUTSIDE",
                                                        color: "#D44124",
                                                    }
                                                ]}
                                                segmentColors={["#F5CD19", "#5BE12C", "#ECA522","#D44124"]}
                                                needleTransition="easeElastic"
                                                needleTransitionDuration={3000}
                                                ringWidth={70}
                                                width={500}
                                                // height={500}
                                                labelFontSize={"16"}
                                                paddingHorizontal={100}
                                            />
                                        </CardBody>


                                    </Col>
                                    <Button
                                        id="click"
                                        block
                                        className="newButton"
                                        color="info"
                                        onClick={submitValue}
                                        size="lg"
                                    >
                                        Get Your BMI!
                                    </Button>
                                    <div style={{display:exerciseDivDisplay}}>
                                        <h2 className="title" style={{marginTop: '100px'}}>Recommended Calorie intake </h2>
                                        <Col md="6" style={{float:'left'}}>
                                            <CardBody className="anotherNewCard2" style={{marginTop: "36px"}}>
                                                <RecommendIntake gender={gender} age={age}/>

                                            </CardBody>
                                        </Col>
                                        <Col md="5" style={{float:'right',marginRight: '15px',marginLeft: '10px'}}>
                                            <CardBody className="anotherNewCard1" style={{marginTop: "-100px"}}>
                                                <div
                                                    className="image-container image-right"
                                                    style={{
                                                        backgroundImage:
                                                            "url(" + require("assets/img/Picture1.png").default + ")",
                                                    }}
                                                ></div>
                                            </CardBody>
                                        </Col>
                                    </div>
                                </Card>
                            </Col>
                        </div>


                        <div style={{display:exerciseDivDisplay}}>
                            <RecommendExercise value={exerciseWeight}/>
                        </div>
                    </Container>
                </div>

                <DefaultFooter />
            </div>
        </>
    );
}


export default BmiPage;

