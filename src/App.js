import { useState } from 'react';
import List from './components/Output/List';
import Form from './components/Input/Form';
import './App.css';

function App() {

  const [names, setNames] = useState([]);

  function fetchSubmit(input){
    console.log(input);
    setNames(values => [...values, input]);
  }

  return (
    <div>
      <Form onAdd={fetchSubmit} />
      <List list={names} />
    </div>
  );
}

export default App;
