import React ,{useEffect,useState} from 'react';
import {Card} from 'antd'
import {useDrag, useDrop} from 'react-dnd';
import DeleteTwoTone from "@ant-design/icons/lib/icons/DeleteTwoTone";
const { Meta } = Card

const style = {
    minWidth:'150px',

    padding: '0.5rem 1rem',
    marginRight: ".5rem",
    cursor: 'move',
    display:'inline-flex'
};

function RecipeCard({id,recipeItem,day,index,moveCard,findCard,deleteCard}){

    const [del,setDel] = useState(false)


    if (del){
        deleteCard(id,day)
    }

    const originalIndex = findCard(id,day).index;
    const [{ isDragging }, drag] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: ('Card'+day),
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        item: { id, originalIndex },
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex,day);
            }
        },

    }), [id, originalIndex, moveCard,day])

    const [, drop] = useDrop(() => ({
        accept: ('Card'+day),
        canDrop: () => false,
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id,day);
                moveCard(draggedId, overIndex,day);
            }
        },
    }),[findCard, moveCard,day]);

    const opacity = isDragging ? 0 : 1;

    return(
        <div  ref={(node) => drag(drop(node))} style={{ opacity,...style}}>
            <Card
                hoverable
                title={recipeItem.recipe_name}
                style={{ width:'200px',height:'150px'}}
                size='small'
                extra={
                        <a onClick={()=>{setDel(true)}}><DeleteTwoTone twoToneColor="#eb2f96" /></a>


                }
            >

                <Meta
                    description={
                        <div style={{whiteSpace: 'pre-line'}}>
                            {
                            'Calories: ' + JSON.stringify(recipeItem.recipe_nutrition.calories) + ' cal\n' +
                            'Protein: ' + JSON.stringify(recipeItem.recipe_nutrition.protein) + ' g\n' +
                            'Fat: ' + JSON.stringify(recipeItem.recipe_nutrition.fat) + ' g\n' +
                            'CarbonHydrate: ' + JSON.stringify(recipeItem.recipe_nutrition.carbohydrate) + ' g\n'
                            }
                        </div>
                    }

                />
            </Card>
        </div>
    )
}


export default RecipeCard