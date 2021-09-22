import React from "react";
import {useHistory, useParams} from "react-router-dom";
import Button from "../components/common/Button";
import {convertToViewFromArrayOfObj} from "../components/PageCompnents/componentList";
import Intro from "./Intro";

export default function ReactComp(){
    let { topic } = useParams();
    const history = useHistory();


    const data =[
        {
            sec:{
                pre:{
                    list:[
                        
                    ]
                }

            }
        }
    ];

    const buttons = [
        {title:'Info', url:'/react/info/intro', component: Intro},
    ];
    function loadComponent(){
        if(topic === 'theory'){
            return convertToViewFromArrayOfObj(data)
        }else {
            return React.createElement(
                buttons.find(button => button.url.includes(topic)).component,{},{}
            )
        }
    }

    return(
        <>
            ...React
            {
                buttons.map(button => <Button title={button.title} onClick={()=> history.push(button.url)}/>)
            }
            {loadComponent()}
        </>
    )
}