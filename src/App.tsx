import React from 'react';
import './App.css';
import {useHistory} from "react-router-dom";
import Button from "./components/common/Button";

function App() {
  const history = useHistory();
  return (
    <div className="App w-full">
        <Button title='Array' onClick={()=>history.push('/array')}/>
        <Button title='Git' onClick={()=>history.push('/git')}/>
        <Button title='DS' onClick={()=>history.push('/ds')}/>
        <Button title='JS' onClick={()=>history.push('/js/theory/async')}/>
        <Button title='React' onClick={()=>history.push('/react/theory/intro')}/>
        <Button title='Extra Tools' onClick={()=>history.push('/extra-tools')}/>
    </div>
  );
}

export default App;
