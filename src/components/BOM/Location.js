import React from "react";

function LocationObject(){
    //Location objects represents the URL of the current document
        //window.location = document.location
        //Location.href = entire url
        //location.port/hostname/port/pathname
        //location.search
            //that represents the query string of the url
            //"?type=listing&page=2"
        //location.hash
            //"#title" => identifier of the url
        //location.origin
            //"http://localhost:8080"
        //Location.username
            //if username before the domain name
        //location.password
            //password before the domain name
    //Manipulating the location
        //assign(), reload(), replace()
            //assign(url) => loads the url immediately, and creates an entry in the history stack
                //when a history is created in the history stack, you can click back button to go back
                //if hostname, pathname, port changes, page reloads with new entry in the stack
                //if the hash changes, doesn't reload but adds a entry in the stack
        //replace()
            //does the same thing as assing, but does not create entry in the history stack, so you can not go back
        //reload()
            // to force reload(true)
            // code after the reload() may or may not run, so always put at the last line
        //Redirect upon on page loading
            window.onload = function() {
                window.location.href = "https://www.javascripttutorial.net/";
            }
    //Query parameters
    const urlParams = new URLSearchParams(window.location.search);
            //URLSearchParams is an iterable object, you can use for...of
            for (const [key, value] of urlParams) {
                console.log(`${key}:${value}`);
            }
            //URLSearchParams's useful methods
                //keys()
                    for (const key of urlParams.keys()) {
                        console.log(key);
                    }
                //values()
                    for (const value of urlParams.values()) {
                        console.log(value);
                    }
                //entries()
                    for (const entry of urlParams.entries()) {
                        console.log(entry);
                    }
                //has() => to check if the param exists
                    console.log(urlParams.has('type')); // true/false

    return<>Location Object</>
}