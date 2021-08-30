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
import HomePageHeader from "../components/Headers/HomePageHeader";

function HomePage() {
    // const [firstFocus, setFirstFocus] = React.useState(false);
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
    return (
        <>
            <HomeNavbar />
            <div className="wrapper">
                <HomePageHeader />
                <div className="section section-about-us">
                    <Container>
                        <div className="separator separator-primary"></div>
                        <div className="section-story-overview">
                            <Row>
                                <Col md="6">
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/land_page_pic_2.png").default + ")",
                                        }}
                                    >
                                    </div>
                                    <h3 className="title">
                                        <br></br> <br></br> <br></br>Why Children Obesity is an Issue?
                                    </h3>
                                    <img
                                        src={require("assets/img/land_page_pic_4.png").default} alt = "landing page"
                                    ></img>

                                </Col>
                                <Col md="6">
                                    <h3 className="title">
                                        What is Junk Food Dumper?
                                    </h3>
                                    <p>
                                        <b>Junk food dumper allows you to choose the perfect diet based on your preferences.
                                        It also shows you the calorie intake necessary to be healthy along with nutritional value of various food items.
                                            This is a perfect website that would help you on your journey towards a healthy lifestyle for your children.</b>
                                    </p>
                                    <div
                                        className="image-container image-right"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/land_page_pic_3.png").default + ")",
                                        }}
                                    ></div>
                                    <h3 className="title">
                                        How Junk Food become a Problem?
                                    </h3>
                                    <p>
                                        <b>Regular consumption on junk food causes long-term health problems such as obesity,
                                        accompanying emotional and self-esteem problems, and chronic illnesses.</b>
                                    </p>
                                    <p>
                                        <b>Lack of vitamins such as magnesium and calcium,
                                        encourage the development of deficiency diseases as well as dental caries due to higher sugar intake.</b>
                                    </p>
                                    <p>
                                        <b>Fast food intake more than three times a week is associated with greater odds such as asthma.
                                        Asthma severity is more than 25% in younger children.</b>
                                    </p>
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

export default HomePage;
