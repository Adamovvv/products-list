import React from 'react';

function Button(props) {
    function click() {
        props.setBought(props.id)
    }
    return (
        <div className="card-button">
            <button className="btn" onClick={click} disabled={props.bought}>
                {props.bought ? 'Добавлено в корзину' : 'Добавить в корзину'}
                </button>
        </div>
    );
}

export default Button;