
import React from 'react';
import Car from './car';
import Cat from './components/Animals';
import './App.css';
//import ReactDOM from 'react-dom';

function App() {
  const style = {
    backgroundColor: 'green',
    marginLeft: '1000px'
  }
  return (
    // React.createElement('h1', null,'Welcome to GeeksforGeeks')
    <div className="App">
        <Car name="toyota"/>
        <h1 style={style}>hi mohamed anwar</h1>
        <Cat name="mimi" age="3"/>
        <Cat name="mimi2" age="4"/>
        <Cat name="mimi3" age="5"/>
    </div>
  );
}

export default App;
