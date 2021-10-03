import React, {useState, useEffect, useRef} from "react";
import "assets/css/FlippingCard.css";

// reactstrap components
import {
    Container,
    Row,
    Col, Label, Input, FormGroup,
} from "reactstrap";

// core components

// icons
import iconPeople from 'assets/img/icon_people.png';
import iconClock from 'assets/img/icon_clock.png';
import iconPlate from 'assets/img/icon_plate.png';
import iconStar from 'assets/img/icon_star.png';
import carbohydrateImg from 'assets/img/Carbohydrate.png';
import energyImg from 'assets/img/Energy.png';
import fatImg from 'assets/img/Fat.png';
import proteinImg from 'assets/img/Protein.png';

/* Star 1 */


import DefaultFooter from "../components/Footers/DefaultFooter.js";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import FoodSearchHeader from "../components/Headers/FoodSearchHeader";
import {round, string} from "mathjs";
import Javascript from "./index-sections/Javascript";
import axios from "axios";
import defaultImage from "../assets/img/default.jpg";
import FoodDetailHeader from "../components/Headers/FoodDetailHeader";
import ReactToPrint from "react-to-print";
import PrintSingleRecipe from "../components/ExportPdf/PrintSingleRecipe";



function FoodDetailsPage(props) {
    const [recipeName, setRecipeName]=useState('')
    const [numberOfServings, setNumberOfServings]=useState('')
    const [prepTime, setPrepTime]=useState('')
    const [cookTime, setCookTime]=useState('')
    const [recipeType, setRecipeType]=useState('')
    const [rating, setRating]=useState('')
    const [calories, setCalories]=useState('')
    const [carbohydrate, setCarbohydrate]=useState('')
    const [protein, setProtein]=useState('')
    const [fat, setFat]=useState('')
    const [recipeImage, setRecipeImage]=useState('')
    const [ingredients, setIngredients]=useState([])
    const [directions, setDirections]=useState([])
    // const [displayStatusO, setDisplayStatusO]=useState('')
    // const [displayStatusP, setDisplayStatusP]=useState('none')




    const containerF = {
        width : '100%',
        minWidth: '810px',
        height: '100%',
        minHeight: '600px'
    }

    useEffect(()=>{
        const id = props.match.params.id
        axios.get(
            `http://api.junkfooddumper.tk/recipes/get?id=${id}`,
        )
            .then(res =>{
                if (typeof res.data.recipe.recipe_name ==='string')
                {
                    setRecipeName(res.data.recipe.recipe_name)
                }
                else
                {
                    setRecipeName('No Data')

                }

                if(typeof res.data.recipe.number_of_servings ==='string')
                {
                    setNumberOfServings(res.data.recipe.number_of_servings)
                }
                else{
                    setNumberOfServings('-')
                }


                if(typeof res.data.recipe.preparation_time_min ==='string')
                {
                    setPrepTime(res.data.recipe.preparation_time_min)
                }
                else
                {
                    setPrepTime('-')
                }


                if (typeof res.data.recipe.cooking_time_min ==='string'){
                    setCookTime(res.data.recipe.cooking_time_min)
                }
                else
                {
                    setCookTime('-')
                }

                if (typeof res.data.recipe.recipe_types.recipe_type ==='string')
                {
                    // console.log(typeof res.data.recipe.recipe_types.recipe_type)
                    setRecipeType(res.data.recipe.recipe_types.recipe_type)
                }
                else if (typeof res.data.recipe.recipe_types.recipe_type ==='object')
                {

                    let tempList = res.data.recipe.recipe_types.recipe_type
                    // console.log(res.data.recipe.recipe_types.recipe_type)
                    setRecipeType(
                        <p style={{fontSize:'20px',
                            fontWeight:'bold',
                            marginTop:'5px',
                            lineHeight: 1}}>
                            {tempList[0]} <br></br>
                            {tempList[1]}
                        </p>
                    )
                }
                else
                {
                    setRecipeType('No data')

                }

                if (typeof res.data.recipe.rating ==='string')
                {
                    setRating(parseFloat(res.data.recipe.rating).toFixed(1))

                }
                else
                {
                    setRating('-')
                }


                if (typeof res.data.recipe.serving_sizes.serving.calories ==='string'){
                    setCalories(res.data.recipe.serving_sizes.serving.calories)
                }
                else{
                    setCalories('-')
                }


                if(typeof res.data.recipe.serving_sizes.serving.carbohydrate  ==='string'){
                    setCarbohydrate(res.data.recipe.serving_sizes.serving.carbohydrate)
                }
                else{
                    setCarbohydrate('-')
                }


                if(typeof res.data.recipe.serving_sizes.serving.protein ==='string')
                {
                    setProtein(res.data.recipe.serving_sizes.serving.protein)
                }
                else{
                    setProtein('-')
                }


                if (typeof res.data.recipe.serving_sizes.serving.fat === 'string')
                {
                    setFat(res.data.recipe.serving_sizes.serving.fat)
                }
                else
                {
                    setFat('-')
                }


                try {
                    setRecipeImage(res.data.recipe.recipe_images.recipe_image)
                }
                catch (err){
                    setRecipeImage(defaultImage)
                }



                if (typeof res.data.recipe.ingredients.ingredient==='object')
                {
                    setIngredients(res.data.recipe.ingredients.ingredient)
                    // console.log(res.data.recipe.ingredients.ingredient)
                }
                else
                {
                    let emptyList = [{
                        serving_id:'No Data',
                        ingredient_description:'No Data'
                    }]
                    setIngredients(emptyList)
                }


                if(typeof res.data.recipe.directions.direction === 'object')
                {
                    let tempDirections = res.data.recipe.directions.direction
                    if (Object.keys(tempDirections)[0]==='direction_number')
                    {
                        let list = [{direction_number:tempDirections.direction_number,
                            direction_description:tempDirections.direction_description}]
                        setDirections(list)
                    }
                    else
                    {
                        setDirections(res.data.recipe.directions.direction)
                    }
                    // setDirections(res.data.recipe.directions.direction
                    //     // <div style={{fontSize: 20, width:'90%'}}>
                    //     //     {tempDirections.map(item => (
                    //     //         <li key = {item.direction_number}>{item.direction_description}</li>
                    //     //     ))}
                    //     // </div>
                    // )
                    // console.log(tempDirections)
                    // console.log(Object.keys(tempDirections))
                    // console.log(typeof Object.keys(tempDirections)[0])
                    // console.log(tempDirections.direction_description)
                    // console.log((parseInt(tempDirections.direction_number)))

                }
                else
                {
                    let noDataList = [{direction_number:'No Data',
                        direction_description:'No Data'}]
                    setDirections(noDataList)
                }


            })
            .catch(err=>{console.log(err)})

    },[])





    return (
        <>
            <div style={containerF}>
                <HomeNavbar />
                <div className="wrapper">
                    <FoodDetailHeader />
                    <div className="section section-about-us">
                        <Container className = "contain">
                            <div className="separator separator-primary"></div>
                            <div className="section-story-overview">
                                {/*{console.log(directions)}*/}
                                {/*{console.log(ingredients)}*/}
                                <div>
                                    <div align='center'>
                                        <h2 className="title">
                                            <b>Recipe Name: {recipeName}</b>
                                        </h2>
                                    </div>
                                    <div style={{width:'10%',float:'left',marginTop:'10px'}}/>
                                    <div style={{width:'40%',float:'left',marginTop:'10px'}}>
                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{position:"absolute"}}>
                                            <div className="flipper">
                                                <div className="front"
                                                     style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconPeople} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Yield
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconPeople} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Yield:<br></br>
                                                        {numberOfServings} Servings
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{marginLeft:'200px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconClock} style={{height:'50px',marginTop:'20px'}} alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Prep Time <br></br>
                                                        & <br></br>
                                                        Cooking Time
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconClock} style={{height:'50px',marginTop:'20px'}} alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Prep Time:<br></br>
                                                        {prepTime} Mins<br></br>
                                                        Cooking Time:<br></br>
                                                        {cookTime} Mins
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{position:"absolute",marginTop:'200px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconPlate} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Meal Type
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconPlate} style={{height:'70px',marginTop:'20px'}} alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Meal Type:<br></br>
                                                        {recipeType}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{marginLeft:'200px',marginTop:'20px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconStar} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Rating
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#C4C4C4'}}>
                                                    <img src={iconStar} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Rating:<br></br>
                                                        {rating} out of 5
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{width:'5%',float:'left',marginTop:'10px'}}/>
                                    <div style={{width:'45%',float:'left',marginTop:'10px'}}>
                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{position:"absolute"}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#F68888'}}>
                                                    <img src={energyImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Energy
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#F68888'}}>
                                                    <img src={energyImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Energy<br></br>
                                                        {calories} cal
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{marginLeft:'200px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#83CF77'}}>
                                                    <img src={carbohydrateImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Carbohydrate
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#83CF77'}}>
                                                    <img src={carbohydrateImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Carbohydrate<br></br>
                                                        {carbohydrate} g
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{position:"absolute",marginTop:'200px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#EDF49C'}}>
                                                    <img src={proteinImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Protein
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#EDF49C'}}>
                                                    <img src={proteinImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Protein<br></br>
                                                        {protein} g
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flip-container" onTouchStart="this.classList.toggle('hover');"
                                             style={{marginLeft:'200px',marginTop:'20px'}}>
                                            <div className="flipper">
                                                <div className="front" style={{backgroundColor:'#7CADF8'}}>
                                                    <img src={fatImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleF">
                                                        Fat
                                                    </p>
                                                </div>
                                                <div className="back" style={{backgroundColor:'#7CADF8'}}>
                                                    <img src={fatImg} className="rightImgStyle" alt=" "/>
                                                    <p className="rightTextStyleB">
                                                        Fat<br></br>
                                                        {fat} g
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Row style={{width:'100%', marginLeft:'80px'}}>
                                        <br></br><br></br>
                                    </Row>

                                    <p style={{lineHeight:0}}>
                                        <br></br>
                                    </p>
                                    <div align='center' style={{width:'50%',float:'left'}}>
                                        <img src={recipeImage} alt=" " style={{marginLeft:'40px',width:'300px',height:'300px'}}/>
                                    </div>

                                    <div style={{width:'50%',float:'left'}}>
                                        <h2 style={{marginLeft:'80px'}}>
                                            <b>Ingredients:</b>
                                        </h2>

                                        <div style={{fontSize: 20,marginLeft:'30px'}}>
                                            {ingredients.map(item => (
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox"></Input>
                                                        <span className="form-check-sign"></span>
                                                        <li key = {item.serving_id}>{item.ingredient_description}</li>
                                                    </Label>
                                                </FormGroup>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Row style={{width:'100%', marginLeft:'100px'}}>
                                    <Col>
                                        <h2>
                                            <br></br>
                                            <b>Description:</b>
                                        </h2>
                                        <div style={{fontSize: 20, width:'85%'}}>
                                            {directions.map(item => (
                                                <li key = {item.direction_number}>{item.direction_description}</li>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div align='center'>
                                <a href="javascript:history.go(-1)">
                                    <button className="buttonStyle">
                                        Back to Search Page
                                    </button>
                                </a>
                                <PrintSingleRecipe idNo = {props.match.params.id}/>

                            </div>

                        </Container>
                    </div>
                    <DefaultFooter />
                </div>
            </div>
        </>

    );
}
export default FoodDetailsPage;

