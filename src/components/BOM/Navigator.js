//window.navigator => readonly => tells about the browser capabilities and
// window.navigator.userAgent => tell about the browser
    if(navigator.userAgent.includes('MSIE')) {
        // IE, use specific features of IE
    } else {
        // not IE
    }
    // to use the specific feature of the browser
    if( typeof window.addEventListener === 'function' ) {
        // let's use addEventListener
    } else {
        // addEventListener is not supported, use another way
    }
//properties and method of navigator
    // cookieEnabled => Returns true if if cookies are enabled; otherwise false.
    // geolocation => Returns a Geolocation object to interact with the Geolocation API.
    // javaEnabled => Determines if Java is enabled in the browser.
    // permissions => Returns the Permissions object to interact with the Permissions API.
    //and so on...