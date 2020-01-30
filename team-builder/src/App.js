import React, { useState } from 'react';
import Form from "./Form";
import Cards from "./Cards";
import './App.css';


function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Mario",
      email: "mario@baddass.com",
      role: "Cool Guy"
    }
  ]);
const addNewCard = card => {
  const newCard = {
    id: Date.now(),
    name: card.name,
    email: card.email,
    role: card.role
  };
  setCards([...cards, newCard])
}
  
  return (
    <div className="App">
      <p> This is the APP</p>
          <Form addNewCard={addNewCard}/>
          <div className="Cards">
            <Cards cards={cards} />
          </div>
    </div>
  );
}

export default App;
 