import React from "react";

// reactstrap components
import {
    Button,
    Input,
    InputGroup,
    Container,
    Row,
    Col, CardBody, CardFooter, Card,
} from "reactstrap";

// core components

import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import BMIPageHeader from "../components/Headers/BMIPageHeader";

function BmiPage() {
    // const [firstFocus, setFirstFocus] = React.useState(false);
    // const [lastFocus, setLastFocus] = React.useState(false);
    const setFirstFocus = React.useState(false)[1]
    const setLastFocus = React.useState(false)[1];

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
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="8" style={{color: 'black',fontSize: '15px',textAlign: 'center'}}>
                                <h2 className="title">What is BMI? Why is it important?</h2>
                                <h5 className="description" style={{color: 'black',fontSize: '20px',textAlign: 'center', fontWeight:'normal'}}>
                                    BMI is a calculation of your size that takes into account
                                    your height and weight. It's a good way to gauge whether
                                    your weight is in healthy proportion to your height.
                                    In fact, knowing your BMI can help you – and your GP –
                                    determine any health risks you may face if it's outside of
                                    the healthy range. BMI helps in averting major health issues.
                                </h5>
                            </Col>
                        </Row>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col className="ml-auto mr-auto" md="20">
                                    <Card className="card-login card-plain">

                                            <h2 className="title">Calculate your child’s BMI below</h2>
                                            <Col md="6" style={{float:'left'}}>

                                            </Col>
                                            <CardBody className="newCard">
                                                <InputGroup style={{marginBottom: '20px'}}>
                                                    <h4  style={{marginRight: '15px',marginLeft: '13px'}}>
                                                        Age:
                                                    </h4>

                                                    <Input className="with-border" style={{fontSize: '1.5em',marginRight: '45px',marginLeft: '23px'}}
                                                           placeholder="Age..."

                                                           onFocus={() => setFirstFocus(true)}
                                                           onBlur={() => setFirstFocus(false)}
                                                    ></Input>

                                                </InputGroup>
                                                <InputGroup style={{marginBottom: '20px'}}>
                                                    <h4 style={{marginRight: '15px',textAlign: 'left'}}>
                                                            Height:
                                                    </h4>

                                                    <Input className="with-border" style={{fontSize: '1.5em',marginRight: '4px',marginLeft: '3px'}}
                                                        placeholder="Height..."

                                                        onFocus={() => setFirstFocus(true)}
                                                        onBlur={() => setFirstFocus(false)}
                                                    ></Input>
                                                    <h4 style={{marginRight: '-20px'}}>
                                                        cm
                                                    </h4>
                                                </InputGroup>
                                                <InputGroup style={{marginBottom: '20px'}}>
                                                    <h4 style={{marginRight: '15px',textAlign: 'left'}}>
                                                        Weight:
                                                    </h4>
                                                    <Input className="with-border" style={{fontSize: '1.5em',marginRight: '8px',marginLeft: '-2px'}}
                                                        placeholder="Weight..."

                                                        onFocus={() => setLastFocus(true)}
                                                        onBlur={() => setLastFocus(false)}
                                                    ></Input>
                                                    <h4 style={{marginRight: '-20px'}}>
                                                        Kg
                                                    </h4>
                                                </InputGroup>
                                            </CardBody>
                                            <CardFooter className="text-center" >
                                                <CardBody className="newCard">
                                                    <Button
                                                        block
                                                        className="btn-round"
                                                        color="info"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                        size="lg"
                                                    >
                                                        Get Your BMI!
                                                    </Button>
                                                </CardBody>

                                                <CardBody className="anotherCard">
                                                    <InputGroup style={{marginBottom: '20px'}}>
                                                        <h3 style={{marginRight: '15px',marginTop:'100px', fontWeight:'500'}}>
                                                            Your BMI:
                                                        </h3>
                                                        <Input className="newBorder" style={{fontSize: '2.5em'}} placeholder="23.5"></Input>
                                                        <h3 style={{marginRight: '15px',marginTop:'100px',marginLeft:'20px'}}>
                                                            Kg/㎡
                                                        </h3>
                                                    </InputGroup>
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

                                            </CardFooter>

                                    </Card>
                                </Col>


                            </Row>
                        </div>
                    </Container>
                </div>


                <DefaultFooter />
            </div>
        </>
    );
}

export default BmiPage;
