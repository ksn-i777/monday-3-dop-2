import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';

type ShowType = {
  userId: number,
  id: number,
  title: string,
  completed: false,
}

function App() {

  const [show, setShow] = useState<Array<ShowType>>([])

  

  const useShowUp = () => {
    //useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setShow(json))
    //}, [])
  }

  const clean = () => {
    setShow([])
  }

  return (
    <div className="App">
      <Button name={'Show me'} callBack={useShowUp}/>    
      <Button name={'Clean me'} callBack={clean}/>  
      <ul>
        {show.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id}</span>
              <span>{el.title}</span>
              <span>{`${el.completed}`}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


export default App;
