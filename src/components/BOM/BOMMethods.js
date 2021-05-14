import React from "react";

export default function BOMMethods(){
    //alert()
        //synchronous and modal, stops the execution of the code until clicks okay
        window.alert("message");
    //confirm()
        //let result = window.confirm(question);
        //ok => true, cancel => false
    //prompt()
        //let result = window.prompt(message, default);
        //with input field, ok, cancel
    //setTimout()
        //let timeoutID  = setTimeout(cb [,delay], arg1, arg2,...); //timeoutID => positive integer if cb is not executed yet
        //clearTimeout(timeoutID)
    //setInterval()
        //let intervalID = setInterval(callback, delay,[arg1, arg2, ...]);
        //clearInterval(intervalID)
    return<>BOM methods</>
}