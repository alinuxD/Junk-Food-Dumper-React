import React, {useState} from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components

import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import HomePageHeader from "../components/Headers/HomePageHeader";

// import icon
import bmiIcon from "../assets/img/landing_page_icon_1.png"
import recipeIcon from "../assets/img/landing_page_icon_3.png"
import exportIcon from "../assets/img/landing_page_icon_2.png"
import baymaxIcon from "../assets/img/baymax_landing_page.png"
import junkfoodIcon from "../assets/img/junkfood_landing_page.png"
import trendIcon from "../assets/img/trend_landing_page.png"

// Chart components
import FruitConsumption from "components/ChartComponents/FruitConsumption.js";
import StackChart from "components/ChartComponents/StackChart.js";
import VegConsumption from "components/ChartComponents/VegatibleConsumption.js";
import JunkFoodConsumption from "components/ChartComponents/JunkFoodConsumption.js";

// Video
import Video from '../components/VideoComponents/video.js'

// Page


function HomePage() {
    // set knowmore block to None
    const [showMore, setshowMore]=useState('none')
    const [hideButton, sethideButton]=useState('block')
    const [showLess, setshowLess]=useState('none')

    // Press Know more button
    const submitValue = () => {
        setshowMore("block")
        sethideButton("none")
        setshowLess("block");
    };

    const submitClose = () => {
        setshowMore("none")
        setshowLess("none")
        sethideButton("block");
    }

        
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
        <HomeNavbar/>
            <div className="wrapper">
                <HomePageHeader/>
                <div className="section section-about-us">
                    <Container>
                        <div className="separator separator-primary"></div>
                        <h1 style={{fontWeight:'bold'}}align="center">What is Junk Food Dumper?</h1>

                        {/* Icon Section */}
                        <Row>
                            <Col align="center">
                                <div>
                                    <Link to="/bmi-page">
                                        <img src={bmiIcon} height="200" alt="BMI_Calculator"/>
                                    </Link>
                                </div>
                            </Col>
                            <Col align="center">
                                <div>
                                    <Link to='/diet-plan-page'>
                                    <img src={recipeIcon} alt="Healthy Recipe"/>
                                    </Link>
                                </div>
                            </Col>
                            <Col align='center'><div><img src={exportIcon} alt="Export Recipe"/></div></Col>
                        </Row>
                        <Row>
                            <Col align="center"><h4 >Calculate Your BMI</h4></Col>
                            <Col align="center"><h4>Plan Healty Recipes</h4></Col>
                            <Col align="center"><h4>Maintain Healthy Diet</h4></Col>
                            
                        </Row>

                        <div className="section-story-overview">

                        {/* About Section */}
                            <p align='justify' style={{fontSize:"20px"}}>
                                <b> Junk food dumper allows you to choose the perfect diet based on your preferences. 
                                    It also shows you the calories intake necessary to be healthy along with the nutritional value of various food items. 
                                    This is a perfect website that would help you on your journey towards a healthy lifestyle for your child.
                                </b>
                            </p>
                        </div>
                        
                        {/* Project Video */}
                        <div>
                            <Video/>
                        </div>


                        <div className="section-story-overview">
                            <Row>
                                <Col>
                                    <div
                                        className="image-container"
                                        style={{
                                            backgroundImage:
                                                "url(" + require("assets/img/land_page_pic_3.png").default + ")",
                                        }}
                                    >
                                    </div>
                                </Col>

                                <Col>
                                    <h3 className="title" align="center">Why Junk Food is an Issue?</h3>
                                    <p align='justify'>
                                        <b>
                                            Regular consumption of junk food causes long-term health problems such as obesity, accompanying emotional and self-esteem problems, and chronic illnesses. 
                                            Lack of vitamins such as magnesium and calcium, encourage the development of deficiency diseases as well as dental caries due to higher sugar intake. 
                                            Fast food intake more than three times a week is associated with greater odds such as asthma. Asthma severity is more than 25% in younger children.
                                        </b>
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <h3 className="title" align='center'> How Children Obesity Become an Issue?</h3>
                            <Row margin="0">
                                <Col align="left"><div>
                                    <img src={baymaxIcon} alt="BaymaxIcon"/></div>
                                    <h5 align='left'>Children were obese in Australia</h5>
                                </Col>
                                <Col align="center">
                                    <div><img src={junkfoodIcon} alt="BaymaxIcon"/></div>
                                    <h5 align='center'>Advertisements are related to junk food.</h5>
                                </Col>
                                <Col align="right">
                                    <div><img src={trendIcon} alt="BaymaxIcon"/></div>
                                    <h5 align='right'>Type 2 Diabetes Patients Booming</h5>
                                </Col>
                            </Row>
                        </div>

                        {/* Children Obesity chart components */}
                        <div style={{height:"100%"}}>
                                <h3 className="title" align='center'>Let The Data Speak for Itself</h3>
                                <StackChart/>
                                <p align='center' style={{fontWeight:"normal"}}>
                                            Nearly 25% of the children around Austrlia were experencing overweight issue
                                    </p>

                            <div style={{display:hideButton, marginTop: '1%'}}>
                                        <Button id="click" block className="newButton" color="info" onClick={submitValue} size="lg">
                                                Know More
                                        </Button>
                            </div>
                            {/* Know more tab */}
                            <div style={{display:showMore}}>
                                <hr style={{ color: "#808080", backgroundColor: "#808080", height: 3}}/>
                                <FruitConsumption/>
                                <VegConsumption/>
                                <JunkFoodConsumption/>   

                                <div style={{display:showLess, marginTop: '1%'}}>
                                    <Button id="click" block className="newButton" color="info" onClick={submitClose} size="lg">
                                        Show Less
                                    </Button>
                                </div>                             
                            </div>
                            
                        </div>
                        

                    </Container>
                {/* Footer */}
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default HomePage;



// import React from "react";

// // reactstrap components
// import {
//     Container,
//     Row,
//     Col,
// } from "reactstrap";

// // core components

// import DefaultFooter from "../components/Footers/DefaultFooter.js";
// import HomeNavbar from "../components/Navbars/HomeNavbar";
// import HomePageHeader from "../components/Headers/HomePageHeader";

// function HomePage() {
//     // const [firstFocus, setFirstFocus] = React.useState(false);
//     // const [lastFocus, setLastFocus] = React.useState(false);
//     React.useEffect(() => {
//         document.body.classList.add("home-page");
//         document.body.classList.add("sidebar-collapse");
//         document.documentElement.classList.remove("nav-open");
//         window.scrollTo(0, 0);
//         document.body.scrollTop = 0;
//         return function cleanup() {
//             document.body.classList.remove("home-page");
//             document.body.classList.remove("sidebar-collapse");
//         };
//     }, []);
//     return (
//         <>
//             <HomeNavbar />
//             <div className="wrapper">
//                 <HomePageHeader />
//                 <div className="section section-about-us">
//                     <Container>
//                         <div className="separator separator-primary"></div>
//                         <div className="section-story-overview">
//                             <Row>
//                                 <Col md="6">
//                                     <div
//                                         className="image-container"
//                                         style={{
//                                             backgroundImage:
//                                                 "url(" + require("assets/img/land_page_pic_2.png").default + ")",
//                                         }}
//                                     >
//                                     </div>
//                                     <h3 className="title">
//                                         <br></br> <br></br> <br></br>Why Children Obesity is an Issue?
//                                     </h3>
//                                     <img
//                                         src={require("assets/img/land_page_pic_4.png").default} alt = "landing page"
//                                     ></img>

//                                 </Col>
//                                 <Col md="6">
//                                     <h3 className="title">
//                                         What is Junk Food Dumper?
//                                     </h3>
//                                     <p align='justify'>
//                                         <b>Junk food dumper allows you to choose the perfect diet based on your preferences.
//                                         It also shows you the calorie intake necessary to be healthy along with nutritional value of various food items.
//                                             This is a perfect website that would help you on your journey towards a healthy lifestyle for your children.</b>
//                                     </p>
//                                     <div
//                                         className="image-container image-right"
//                                         style={{
//                                             backgroundImage:
//                                                 "url(" + require("assets/img/land_page_pic_3.png").default + ")",
//                                         }}
//                                     ></div>
//                                     <h3 className="title">
//                                         How Junk Food become a Problem?
//                                     </h3>
//                                     <p align='justify'>
//                                         <b>Regular consumption on junk food causes long-term health problems such as obesity,
//                                         accompanying emotional and self-esteem problems, and chronic illnesses.</b>
//                                     </p>
//                                     <p align='justify'>
//                                         <b>Lack of vitamins such as magnesium and calcium,
//                                         encourage the development of deficiency diseases as well as dental caries due to higher sugar intake.</b>
//                                     </p>
//                                     <p align='justify'>
//                                         <b>Fast food intake more than three times a week is associated with greater odds such as asthma.
//                                         Asthma severity is more than 25% in younger children.</b>
//                                     </p>
//                                 </Col>
//                             </Row>
//                         </div>
//                     </Container>
//                 </div>
//                 <DefaultFooter />
//             </div>
//         </>
//     );
// }

// export default HomePage;
