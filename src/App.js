import './App.css';
import Header from './components/header'
import Body from './components/body'
import React, { useState } from 'react'

function App() {
  const [count, addItem] = useState(0);
  return (
      <div className="App">
        <Header count={count} addItem={addItem}/>
        <Body count={count} addItem={addItem}/>
    </div>
  );
}

export default App;
