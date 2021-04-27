import React from 'react';
import icon from './checkout.svg';

function Checkout(props) {
    const filteredCards = props.database.filter((card) => {
        if(card.bought === true){
            return true
        } else {
            return false
        }
    })
    return (
        <div className="checkout">
            <a href="/#">
                <img src={icon} alt="checkout" />
                <span className="counter">{filteredCards.length}</span>
            </a>
        </div>
    );
}

export default Checkout;