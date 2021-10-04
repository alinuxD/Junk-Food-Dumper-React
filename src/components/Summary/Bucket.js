import React, {useCallback, useState} from "react";
import {useDrop} from "react-dnd";
import CardItem from "./CardItem";
import DayContainer from "./DayContainer";
import NutritionChart from "./NutritionChart";

const style = {
    minHeight:'200px',
    maxHeight:'420px',
    width:'1000px',
    marginBottom:'25px',
    marginTop:'25px',
    overflow:'auto',
    // float:'left', display:'inline'
};

function Bucket({ findCard,day,chosenItems, onDrop, moveCard,deleteCard,calculateTotal,nutList}) {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'Box',
        // Props to collect
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))


    const [nut,setNut] = useState(nutList);
    const isActive = isOver && canDrop;
    let backgroundColor = '#eeeff0';
    if (isActive) {
        backgroundColor = '#ffd4cd';
    }
    else if (canDrop) {
        backgroundColor = '#eeeff0';
    }



    // calculateTotal(chosenItems,day)


    return (
        <>
<div style={{display:'inline-flex'}}>
            <div
                ref={drop}
                role={'Dustbin'}
                style={{ ...style,backgroundColor: backgroundColor }}
            >
                <h5 style={{marginLeft:'20px'}}>{canDrop ? 'Release to drop on Day'+day : 'Day' + day}</h5>

                {/*{chosenItems && (<p>Last dropped: {JSON.stringify(chosenItems)}</p>)}*/}

                {/*<div style={card}>*/}
                {/*    {chosenItems.map((item,index) => {*/}
                {/*        return(*/}
                {/*            <CardItem*/}
                {/*                key={index}*/}
                {/*                title={item.title}*/}
                {/*                content={item.content}*/}
                {/*                id={item.id}*/}
                {/*                // recipe_image={item.recipe_image}*/}
                {/*                index={index}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</div>*/}

                <DayContainer chosenItems={chosenItems}
                              findCard = {findCard}
                              moveCard = {moveCard}
                              day = {day}
                              deleteCard = {deleteCard}
                              />
            </div>
            {/*<div style={{width:'300px', maxHeight:'380px',height:'200px',margin:'auto'}}>{JSON.stringify(nutList)}</div>*/}
            <div style={{width:'300px', maxHeight:'350px',height:'200px',margin:'auto'}}>
                <NutritionChart data={nutList}/>
            </div>



</div>
        </>
    )
}

export default Bucket
