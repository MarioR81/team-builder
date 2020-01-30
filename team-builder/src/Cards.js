import React from "react";

const Cards = props => {
    return (
        <div>
            {props.cards.map(card => (
                <div className="card" key={card.id}>
                        <h2>{card.name}</h2>
                        <p>Email: {card.email}</p>
                        <p>Role: {card.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;