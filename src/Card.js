import React from 'react';
import Button from './Button';

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.card.image} alt="card" />
            </div>
            <div className="card-info">
                <div className="card-name">{props.card.name}</div>
                <div className="card-rating">{props.card.rating}</div>
                <div className="card-price">{props.card.price}₽</div>
                <Button bought={props.card.bought} id={props.card.id} setBought={props.setBought} />
            </div>
        </div>
    );
}

export default Card;