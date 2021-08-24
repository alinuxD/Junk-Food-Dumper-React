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


function BmiPage() {
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

                                                   onFocus={() => setFirstFocus(true)}
                                                   onBlur={() => setFirstFocus(false)}
                                            ></Input>

                                            <h4 style={{marginRight: '150px',marginLeft:'-120px'}}>
                                                Kg
                                            </h4>
                                        </InputGroup>

                                    </Col>
                                    <Col md="6" style={{float:'right'}}>
                                        <CardBody className="anotherCard">

                                            <h3 style={{marginTop:'60px',marginBottom:'0px'}}>
                                                <font style={{marginRight: '15px',marginTop:'50px', fontWeight:'600'}}>
                                                    Your BMI:
                                                </font>
                                                <font  style={{fontSize: '2.0em',color:'#98D52C'}} >23.5</font>
                                                <font style={{marginRight: '15px',marginTop:'0px', fontWeight:'500',marginLeft:'15px'}}>
                                                    Kg/㎡
                                                </font>
                                            </h3>
                                            <img style={{marginBottom:'160px',marginLeft:'-60px'}} src={require('assets/img/gauge.png').default} alt="" />

                                        </CardBody>

                                    </Col>

                                    <CardBody className="newCard" style={{marginTop:'50px'}} >
                                        <Button
                                            block
                                            className="newButton"
                                            color="info"
                                            onClick={(e) => e.preventDefault()}
                                            size="lg"
                                        >
                                            Get Your BMI!
                                        </Button>
                                    </CardBody>
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
