// window.history => to access browser's session history
//function to navigate, without knowing the url
    //back()
        window.history.back();
    //forward()
        window.history.forward();
    //go() => to move to a specific url
        // -1 for back()
        // 1 for forward()
        // 0 to refresh the current page
//history.length => to determine the number of urls in the stack
//pushState
        //history.pushState() => to add entry on the session stack
                //history.pushState(state, title, [,url])
                        //state => a serializable object, when navigate to a new state, popevent is fired.
                                //popevent has state property, which refers to the state object
                        //title => to change the title of the page, generally pass empty '',coz generally document.title is used
                        //url => optional | must be same as origin url or will throw an exception
                                //if you see the new url, 