import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import AboutPageHeader from "../components/Headers/AboutPageHeader";

function AboutPage() {
    // const [firstFocus, setFirstFocus] = React.useState(false);
    // const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("about-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("about-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <HomeNavbar />
            <div className="wrapper">
                <AboutPageHeader />
                <div className="section section-about-us">
                    <Container>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    <h2 className="title">
                                        About Us
                                    </h2>
                                    <p>
                                        <b>We offer various features that can help you to keep your child healthy.
                                        We allow you to calculate BMI and recommend the necessary calorie intake,
                                        so that you know how many calories your child needs to be healthy.
                                        You can also plan your own diet by looking at various feedbacks we give you based on what food items you want in your meal.
                                            We aim to aid you in keeping your child healthy in a easy and effective way.</b><br></br><br></br>
                                    </p>
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/about_page_1.png").default + ")",
                                        }}
                                    >
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/about_page_2.png").default + ")",
                                        }}
                                    ></div>
                                    <h2 className="title">
                                        <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Vision & Mission
                                    </h2>
                                    <p>
                                        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        How - To Build Your Children Healthy Diet <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Can - Assist your Selection on Food <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        We - Care About Your Children <br></br>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            Help - Build Up Children Healthy Life</b>
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col>
                                <h2 className="text-center">
                                    <b>FAQs</b>
                                </h2>
                                <p>
                                    <b><b>What if my child is allergic to certain food items?</b></b><br></br>
                                    <b>You can avoid looking for food items if you know that your child is already allergic to it.
                                    Our recommendation would be to consult a GP to know what if your child can eat a certain food item.</b><br></br>

                                    <b><b>How do I know that this information is accurate?</b></b><br></br>
                                    <b>All the information provided to you is based on turtable sources.
                                    Click here for further information.</b><br></br>

                                    <b><b>How is BMI calculated?</b></b><br></br>
                                    <b>BMI is a calculation of your size that takes into account your height and weight.
                                        Click here to calculate your child’s BMI.</b>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default AboutPage;
