import React from "react";

function BOMIntro(){
    const x = true;
    if(x){
        //Browser Object Model => provides you the object which exposes browser functionality

        //Window Object => all variable and functions with the var keywords becomes the property of window object
        //Window size
            //innerWidth, innerHeight => not including border and toolbars
            // outerWidth, outerHeight
                const width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;

                const height = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
        //To open a new window
            //window.open(url, windowName, [windowFeatures]);
            //returns a windowProxy() object, if can not open the window => null is returned
                let features = 'height=600,width=800',
                    url = 'http://localhost:3000/js/about.html';
                let jsWindow = window.open(url, 'about', features);
        //To resize a window
            //resizeTo() method of window object
            setTimeout(() => {
                jsWindow.resizeTo(600, 300);
            }, 3000);
        //window.resizeBy(deltaX,deltaY); to change from the current window
        //to Move a window
            //window.moveTo(x, y); => to move to a specific coordinate
                setTimeout(() => {
                    jsWindow.moveTo(500, 500);
                }, 3000);
        //to close a window
            //window.close()
                setTimeout(() => {
                    jsWindow.close();
                }, 3000);
        //Window.opener() => can reference back to the window, and communicate with the window object
    }

    return<>BOM Intro</>
}
export default BOMIntro
