import React from 'react';
import './App.css';
import PromiseExample from "./components/Promise/Promise";
import FunctionExample from "./components/Function/Function";
import Currying from "./components/Currying/Currying";
import {Debouncing} from "./components/Common/Debouncing";
import CommonFunction from "./components/Common/CommonFunction";
import PrototypeExample from "./components/Common/Prototype";
import ObjectExample from "./components/Objects/Objects";
import BOMIntro from "./components/BOM/intro";

function App() {


  return (
    <div className="App">
        {/*<CommonFunction/>*/}
        {/*<Currying/>*/}
        {/*<FunctionExample/>*/}
        {/*<ObjectExample/>*/}
        {/*<PrototypeExample/>*/}
        <BOMIntro/>
        {/*<Debouncing/>*/}
      {/*<PromiseExample/>*/}
    </div>
  );
}

export default App;
