import React from "react";

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
import GaugeChart from 'react-gauge-chart';
import ReactSpeedometer from "react-d3-speedometer";



function calcu() {
    // if (document.getElementById("click") != null) {
    if(document.getElementById('w') == null || document.getElementById('h') == null ){
        return 15;
    }
    var s1 = document.getElementById('w').value;
    var s2 = document.getElementById('h').value;
    var s3 = Number(s1)/((Number(s2)/100)*(Number(s2)/100));
    if (s3 >= 15 && s3 <= 35) {
        // document.getElementById('result').innerHTML=s3.toFixed(1);
        return s3.toFixed(1);
    } else {
        // document.getElementById('result').innerHTML=0;
        return 15;
    }
    // } else {
    //
    //     return 15;
    // }


}

function BmiPage() {
    const [bmi, setBmi] = React.useState(15);
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
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

    var chartValue =0;

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

                                        <InputGroup style={{marginBottom: '20px',marginTop:'100px'}}>
                                            <h4 style={{marginRight: '15px',marginLeft: '40px'}}>
                                                Age:
                                            </h4>

                                            <Input className="with-border" style={{fontSize: '1.5em',marginRight: '250px',marginLeft: '27px'}}
                                                   placeholder="Age..."

                                                   onFocus={() => setFirstFocus(true)}
                                                   onBlur={() => setFirstFocus(false)}
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
                                                   onBlur={() => setFirstFocus(false)}
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
                                                   onBlur={() => setFirstFocus(false)}
                                            ></Input>

                                            <h4 style={{marginRight: '150px',marginLeft:'-120px'}}>
                                                Kg
                                            </h4>
                                        </InputGroup>

                                    </Col>
                                    <Col md="6" style={{float:'right'}}>


                                        <h3 style={{marginTop:'80px',marginBottom:'-40px',marginLeft:'100px'}}>
                                            <font style={{marginRight: '15px',marginTop:'50px', fontWeight:'600'}}>
                                                Your BMI:
                                            </font>
                                            <font style={{fontSize: '2.0em',color:'#98D52C'}} >{bmi}</font>
                                            <font style={{marginRight: '15px',marginTop:'0px', fontWeight:'600',marginLeft:'15px'}}>
                                                Kg/㎡
                                            </font>
                                        </h3>
                                        {/*<GaugeChart style={{marginTop:'135px',fontSize: '1.0em',marginRight: '115px',width:'600px'}}*/}
                                        {/*            id="gauge-chart5"*/}
                                        {/*            nrOfLevels={320}*/}
                                        {/*            arcsLength={[0.2, 0.5, 0.3]}*/}
                                        {/*            colors={['#F5CD19', '#5BE12C', '#EA4228']}*/}
                                        {/*            percent={0.5}*/}
                                        {/*            arcPadding={0.02}*/}
                                        {/*            textColor={'#000000'}*/}
                                        {/*            formatTextValue={value=>value/2}*/}

                                        {/*/>*/}
                                        <CardBody style={{marginTop:'120px',fontSize: '3.0em',marginLeft: '-65px',marginRight:'150px'}}>
                                            <ReactSpeedometer
                                                value={bmi}
                                                minValue={15}
                                                maxValue={35}
                                                segments={4}
                                                customSegmentStops={[15, 18.5, 25, 30,35]}
                                                // customSegmentLabels={[
                                                //     {
                                                //         text: "Underweight",
                                                //         position: "OUTSIDE",
                                                //         color: "#555",
                                                //     },
                                                //     {
                                                //         text: "Normal",
                                                //         position: "OUTSIDE",
                                                //         color: "#555",
                                                //     },
                                                //     {
                                                //         text: "Overweight",
                                                //         position: "OUTSIDE",
                                                //         color: "#555",
                                                //     }
                                                // ]}
                                                segmentColors={["#F5CD19", "#5BE12C", "#ECA522","#D44124"]}
                                                needleTransition="easeElastic"
                                                needleTransitionDuration={3000}
                                                ringWidth={60}
                                                width={500}
                                                height={500}
                                                labelFontSize={15}
                                                paddingHorizontal={100}
                                            />
                                        </CardBody>

                                    </Col>
                                    <Button
                                        id="click"
                                        block
                                        className="newButton"
                                        color="info"
                                        onClick={() => setBmi(calcu())}
                                        size="lg"
                                    >
                                        Get Your BMI!
                                    </Button>

                                    <h2 className="title" style={{marginTop: '50px'}}>Recommended Calorie intake </h2>
                                    <Col md="6" style={{float:'left'}}>
                                        <CardBody className="anotherNewCard2">
                                            <InputGroup style={{marginBottom: '20px'}}>
                                                <h4 style={{marginRight: '15px',marginLeft: '-10px',textAlign: 'left'}}>
                                                    Calorie:
                                                </h4>
                                                <Input className="with-border" style={{fontSize: '1.5em',marginRight: '15px'}}
                                                       placeholder="2300"
                                                ></Input>
                                                <h4 >
                                                    Kcal/day
                                                </h4>
                                            </InputGroup>

                                        </CardBody>
                                    </Col>
                                    <Col md="5" style={{float:'right',marginRight: '15px',marginLeft: '10px'}}>
                                        <CardBody className="anotherNewCard1">
                                            <div
                                                className="image-container image-right"
                                                style={{
                                                    backgroundImage:
                                                        "url(" + require("assets/img/Picture1.png").default + ")",
                                                }}
                                            ></div>
                                        </CardBody>
                                    </Col>
                                </Card>
                            </Col>
                        </div>
                    </Container>
                </div>


                <DefaultFooter />
            </div>
        </>
    );
}


export default BmiPage;

