import React, { useState } from 'react';
import Form from "./Form";
import './App.css';


function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "name app.js",
      role: "role app.js"
    }
  ]);
const addNewCard = card => {
  const newCard = {
    id: Date.now(),
    name: card.name,
    role: card.role
  };
  setCards([...cards, newCard])
}
  
  
  return (
    <div className="App">
      <p> This is the APP</p>
      <Form addNewCard={addNewCard}/>
    </div>
  );
}

export default App;
 