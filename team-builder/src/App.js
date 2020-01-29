import React, { useState } from 'react';
import Form from "./Form";
import './App.css';


function App() {
  const [state, setState] = useState()
  return (
    <div className="App">
      <p> This is the APP</p>
      <Form />
    </div>
  );
}

export default App;
