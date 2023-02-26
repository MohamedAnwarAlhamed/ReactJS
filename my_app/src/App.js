import {React, useState} from 'react';
import Car from './car';
import Cat from './components/Animals';
import './App.css';
import AnimalsClass from './components/AnimalsClass';
//import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const [animals, setAnimals] = useState([
    {name: 'mimi', age: 25},
    {name: 'mimi2', age: 26},
    {name: 'mimi3', age: 27},
  ])
  const style = {
    backgroundColor: 'green',
    marginLeft: '1000px'
  }
  return (
    // React.createElement('h1', null,'Welcome to GeeksforGeeks')
    <div className="App">
        <Car name="toyota"/>
        <h1 style={style}>hi mohamed anwar</h1>
        {
        animals.map((animals) => (
          <div key={animals.name}>
            <Cat  name={animals.name} age={animals.age}/>
            <AnimalsClass   name={animals.name} age={animals.age}/>
          </div>           

        ))
      }
     
        <button onClick={handleIncrement}>increment</button>
        <button onClick={() => setCount(count + 1)}>increment 2</button>
        {count}

    </div>
  );
}

export default App;
