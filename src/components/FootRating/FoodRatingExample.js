import React from "react";

function FoodRatingExample() {
    const divRedStyle = {
        height:190,
        width:135,
        backgroundColor:'#f13939',
        borderTopLeftRadius: 25,
        borderTopRightRadius:25,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
    };

    const titleStyle ={
        textAlign:'center',
        height:35,
        lineHeight:'35px',
        color:'white',
        fontSize: 20,
        fontWeight:'bold'
    };

    const middleStyle1 ={
        textAlign:'center',
        height:35,
        lineHeight:'35px',
        color:'#6d6d6d',
        fontSize: 20,
        fontWeight:'bold'
    };

    const middleStyle2 ={
        textAlign:'center',
        height:35,
        lineHeight:'25px',
        color:'#6d6d6d',
        fontSize: 15,
        fontWeight:'bold'
    };

    const bottomStyle ={
        textAlign:'center',
        height:35,
        lineHeight:'50px',
        color:'white',
        fontSize: 25,
        fontWeight:'bold'
    };

    const middleOutStyle ={
        textAlign:'center',
        height:75,
        width:120,
        backgroundColor:'white',
        fontWeight:'bold',
        margin:'auto',
    };



    return (
        <div style={divRedStyle}>
            <div style={titleStyle}>
                HIGH
            </div>

            <div style={middleOutStyle}>
                <div style={middleStyle1}>
                    Fat
                </div>
                <div style={middleStyle2}>
                    10.9g
                </div>
            </div>

            <div style={bottomStyle}>
                16%
            </div>
        </div>
    )
}


export default FoodRatingExample;
