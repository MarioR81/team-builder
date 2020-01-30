import React from "react";

const Cards = props => {
    return (
        <div>
            {props.cards.map(card => (
                <div key={card.id}>
                        <h2>{card.name}</h2>
                        <p>{card.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;