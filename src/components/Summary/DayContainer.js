import React, {useCallback} from "react";
import {useDrop} from "react-dnd";
import RecipeCard from "./RecipeCard";

const card = {
    // 'display': 'flex',
    // 'margin': '50px',
}

function DayContainer({day, chosenItems,findCard,moveCard, deleteCard}) {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: ('Card'+day),
        // Props to collect
        // drop: handleDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver({ shallow: true }),
            canDrop: monitor.canDrop()
        })
    }))



    //
    // const isActive = isOver && canDrop;
    // let backgroundColor = '#eeeff0';
    // if (isActive) {
    //     backgroundColor = '#bcd7d3';
    // }
    // else if (canDrop) {
    //     backgroundColor = '#bcbdbe';
    // }



    return (
        <>

            <div
                ref={drop}

                // style={{
                //     // minHeight:'100px',marginBottom:'50px',
                //     backgroundColor: backgroundColor }}
            >
                {/*{chosenItems && (<p>Last dropped: {JSON.stringify(chosenItems)}</p>)}*/}

                <div style={card}>
                    {chosenItems.map((item,index) => {
                        return(
                            <RecipeCard
                                key={item.id}
                                index={index}
                                day={day}
                                recipeItem={item}
                                id={item.id}
                                findCard={findCard}
                                moveCard={moveCard}
                                deleteCard = {deleteCard}

                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DayContainer
