import React from 'react';
import './App.css';
import PromiseExample from "./JS/Promise/Promise";
import FunctionExample from "./JS/Function/Function";
import Currying from "./JS/Currying/Currying";
import {Debouncing} from "./JS/Common/Debouncing";
import CommonFunction from "./JS/Common/CommonFunction";
import PrototypeExample from "./JS/Common/Prototype";
import ObjectExample from "./JS/Objects/Objects";
import BOMIntro from "./JS/BOM/intro";
import {Sibling} from "./JS/DOM/intro";
import {ManipulatingElements} from "./JS/DOM/manipulatingElements";
import {EventHandler} from "./JS/DOM/event";
import Dashboard from "./JS/Dashboard/Dashboard";
import ClassComp from "./React/classComponent";
import {CheckBind} from "./React/eventBinding";
import HOC from './React/HOC/HOC';
import RenderProps from './React/RenderProps/RenderProps';
import ReactDOM from "react-dom";
import ContextApi from './React/ContextAPI/intro';
import StateExample from "./React/state";
import UseEffect from './React/UseEffect';
import UseEffectCounter from './React/UseEffectCounter';
import ReducerExample from "./React/Reducer";
import ReducerExampleWithObject from "./React/Reducer/ReducerWithObject";
import UseCallback from "./React/UseCallback/UseCallback";
import UseMemo from "./React/useMemo";
import UseRef from "./React/UseRef";
import CustomHook from "./React/customHooks/CustomHook";
import MultipleReducers from "./Redux/MultipleReducers";
import ReduxLogger from "./Redux/ReduxLogger";
import ReduxExample from "./Redux/ReduxExample/ReduxExample";
import ReactRender from "./JS/ReactRender/intro";

function App() {
    // ReactDOM.render(
    //         <h1>gdh</h1>,
    //     document.getElementById('root1')
    // );

  return (
    <div className="App">
        {/*<div style={{border:'1px solid red', padding:"20px"}} onClickCapture={()=>console.log('3')}>*/}
        {/*    <div style={{border:'1px solid red', padding:"20px"}} onClick={()=>console.log('2')}>*/}
        {/*        <div style={{border:'1px solid red', padding:"20px"}} onClick={(event)=>{*/}
        {/*            console.log('1');*/}
        {/*        }}>*/}
        {/*            HI*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<ContextApi/>*/}
        {/*<ReducerExample/>*/}
        {/*<ReducerExampleWithObject/>*/}
        {/*<StateExample/>*/}
        {/*<UseCallback/>*/}
        {/*<UseMemo/>*/}
        {/*<UseRef/>*/}
        {/*<CustomHook/>*/}
        {/*<UseEffect/>*/}
        {/*<ReduxExample/>*/}
        {/*<MultipleReducers/>*/}
        {/*<ReduxLogger/>*/}
        {/*<UseEffectCounter/>*/}
        {/*<ReduxExample/>*/}
        <ReactRender/>
          {/*<ClassComp/>*/}
          {/*<CheckBind/>*/}
          {/*<HOC/>*/}
          {/*  <RenderProps/>*/}


        {/*<Dashboard/>*/}
        {/*<CommonFunction/>*/}
        {/*<Currying/>*/}
        {/*<FunctionExample/>*/}
        {/*<ObjectExample/>*/}
        {/*<PrototypeExample/>*/}
        {/*<BOMIntro/>*/}
        {/*Document Object Model*/}
        {/*<Sibling/>*/}
        {/*<Debouncing/>*/}
        {/*<ManipulatingElements/>*/}
        {/*<EventHandler/>*/}
      {/*<PromiseExample/>*/}
    </div>
  );
}

export default App;
