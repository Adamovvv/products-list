import React from 'react';
import Card from './Card';

function Content(props) {
    return (
        <div className="content">
            {props.database.map((card, index) => {
                return <Card key={card.id} card={card} setBought={props.setBought}/>
            })}
        </div>
    );
}

export default Content;