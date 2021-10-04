import React from 'react';
import {Card} from 'antd'
import {useDrag} from 'react-dnd';

function CardItem(props){

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: 'Box',
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        item: props,
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return(
        <div role="Handle" ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
                <Card
                    hoverable
                    style={{ width: 150, marginRight:'20px', marginBottom:'20px'}}
                    cover={<img height='150px' alt="example" src={props.recipe_image} />}

                >
                    <h6>{props.content}</h6>
                </Card>
        </div>
    )
}


export default CardItem