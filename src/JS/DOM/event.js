import React from "react";

export function EventHandler(){
    //Event can be handled by one or multiple event handler, if for an event,multiple event, all will be executed
    //Event Flow
        //1. Bubbling
            //event start at specific element and moves upto document (even windows in some browser)
        //2. Capturing
            //event starts from document or window and moves to the specific element
        //DOM level 2 flow
            //1. event capturing
            //2. target receives the event
            //3. event bubbling occurs
    //Event Object
        //when event occur, event passes event object => event obj only accessible inside the event handler
        //once all event handled, then event object is destroyed
        // bubbles	true if the event bubbles
        // cancelable	true if the default behavior of the event can be canceled
        // currentTarget	the current element on which the event is firing
        // defaultPrevented	return true if the preventDefault() has been called.
        // detail	more information about the event
        // eventPhase	1 for capturing phase, 2 for target, 3 for bubbling
        // preventDefault()	cancel the default behavior for the event. This method is only effective if the cancelable property is true
        // stopPropagation()	cancel any further event capturing or bubbling. This method only can be used if the bubbles property is true.
        // target	the target element of the event
        // type	the type of event that was fired
    //preventDefault()
        //to prevent the default behaviour of the event
        let link = document.querySelector('a');
        if(link){
            link.addEventListener('click',function(event) {
                console.log('clicked');
                event.preventDefault();
            });
        }
    //stopPropagation()
        //immediately stops the event flow, but not the default behaviour
    //HTML event handler attributes
        //every event handler probably has a attribute name, starting with on
        // <input type="button" value="Save" onClick="alert('Clicked!')">
            // while adding the value of onclick need to escape & ' < otherwise syntax error
            //<input type="button" value="Save" onclick="alert(event.type)"> => accessing event object without specifying it
            //<input type="button" value="Save" onclick="alert(this.value)"> => this contains event's target
            //<input type="button" value="Save" onclick="alert(value)"> => accessing element's properties
    //Disadvantages of using HTML event handler attribute
        //code gets mixed with the HTML code
        //if the page is fully loaded and js not, user will be able to interact, and will give the error
    //DOM level 0 event handlers
        //you can even access few event handler as a element properties
            // let btn = document.querySelector('#btn');
            // btn.onclick = function() {
            //     alert('Clicked!');
            // };
        //to remove
            //btn.onclick = null;
    //DOM Level 2 event handlers
        //provides two methods to register and deregister the event
            // addEventListener() – register an event handler
            // removeEventListener() – remove an event handler
                //addEventListener() => takes three parameters
                    //event name
                    //event handler function
                    //boolean value => true, to run during capture phase, false, to run during bubbling phase
                //removeEventListener() => to remove the event listeners added by the addEventListener, however,
                    // you need to pass the same arguments while adding the event
    //PageLoad events => DOMContentLoaded, load, beforeunload, and unload.--------------------------------------------------
        //DOMContentLoaded => browser has fully loaded the html page, node tree is complete, however external js, css not downloaded yet
        // load => browser has fully loaded the page with the external files and css as well and images
        // beforeunload => just before unloading the page, can be used to show that you are leaving save your unsaved data
        // unload => files and pages have been unloaded completely, can be used to send the analytics data
            // addEventListener('beforeunload', (event) => {
            //     // show the confirmation dialog
            //     event.preventDefault();
            //     // Google Chrome requires returnValue to be set.
            //     event.returnValue = '';
            // });
    //window's load event
        //fired when html page, css and images are loaded
        window.addEventListener('load', (event) => {
            console.log('The page has fully loaded');
        });
        //or use the window.onload property
        window.onload = (event) => {
            console.log('The page has fully loaded');
        };
    //load event can be used for the images
    //script's load event
        //script's load event triggers when src is assigned and <script> is added to the document
    //Mouse Events ---------------------------------------------------------------------------------------------------
        // mousedown => if button pressed and took the cursor out of the element, and released the button
        // mouseup
        // click => mousedown + mouseup
        //dbclick => mousedown + mouseup + click + mousedown + mouseup + click + dbclick
            //in double click, click always happens before double click, if you add both events on the same element, click and
            // double click, you will not be able to figure it out, which event has fired
        //mousemove => fires repeatedly, even if the cursor moves 1px, so remove immediately when not in use
        //mouseover/mouseout =>
        //mouseenter/mouseleave =>
    //Modifier keys =>
        // event.shiftKey => true if shift key is pressed while event triggering, else false
        // event.ctrlKey
        // event.altKey
        // event.metaKey
    //Screen coordinates
        //event.screenX and event.screenY
    //Keyboard events --------------------------------------------------------------------------------------------------
        //keydown => fires repeatedly if press and hold
        //keyup
        //keypress
        //keyboard event properties
            //key
            //code
    //Scroll
        //adding eventListener on the target element
            // targetElement.addEventListener('scroll', (event) =>
            // targetElement.onscroll = (event) => {
        //to scroll the document, add scroll event on the window object
        //Scroll offsets => window object has two properties
            //returns number of pixed document has scrolled
            //scrollX => alias pageXOffset
            //scrollY => alias pageYOffset
        //Element scroll
            //to track offset instead of scrollX and scrollY use => scrollTop and scrollLeft
        //Issue = scroll jank (after scrolling may take some time to execute)
            //to avoid this issue, use event throttling
        //Passive events?
        //ScrollIntoView
            //element.scrollIntoView(options);  => accepts boolean or object
                //if true, it will align the element to the top, else to the bottom
                //if object => will give more control over the event
                    //behaviour => defines the transition animation, switch or auto(default)
                    //block => vertical alignment, start(default), center, end, nearest
                    //inline => horizontal alignment , start, center, end, nearest(default)
    //Focus event
        //event fires when element loses or gets focus
            //focus => when gets focus (focusin => does bubbling while focus does not)
            //blur => when loses focus (focusout => does bubbling while blur does not)
        //focusable elements
            //window => trigger when ctrl + alt
            // form fields
            //elements with tabindex
    //haschange event => fires when url hash value changes
        //to capture use property of window object => window.haschange () => {}
    //custom events
        //let event = new CustomEvent(eventType, options);
            //eventType => string, represents the name of the event
            //options => is the object which contains the detail property about the custom info about the event
            let event = new CustomEvent('highlight', {
                detail: {backgroundColor: 'yellow'}
            });
        //to attach and trigger the element
            //element.dispatchEvent(event);
        //to listen to the custom event
        // Listen to the highlight event
            // div.addEventListener('highlight', function (e) {
            //     console.log(e.detail);
            // });
        //Manually create event and dispatch
            //typically events are generated by mouse click or key press
            //they can be generated programatically by Event constructor
                //let event = new Event(type, [,options]);
                    //type => string such as 'click'
                    //options => object with two optional properties
                        //bubbles => boolean
                        //cancelable: true or false
                        //{ bubbles: false, cancelable: false}
                    //=> let clickEvent = new Event('click');
            //to dispatch
                //element.dispatchEvent(event);
            //to check the authenticity of the event you can check the property
                //if event.isTrusted === true => by user action
                //if event.isTrusted === false => by code

    return (
        <>
            Event handler
            <a href="https://www.javascripttutorial.net/">JS Tutorial</a>
        </>
    )
}
