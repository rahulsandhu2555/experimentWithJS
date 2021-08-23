import React from "react";

function Throttling(){

    //Throttling a button so can't spam click
    //Throttling a mousemove/touchmove event handler
    const throttle = (func, limit) => {
        let inThrottle
        return function() {
            const args = arguments
            const context = this
            if (!inThrottle) {
                func.apply(context, args)
                inThrottle = true
                setTimeout(() => inThrottle = false, limit)
            }
        }
    }
    const throttle2 = (func, limit) => {
        let lastFunc
        let lastRan
        return function() {
            const context = this
            const args = arguments
            if (!lastRan) {
                func.apply(context, args)
                lastRan = Date.now()
            } else {
                clearTimeout(lastFunc)
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args)
                        lastRan = Date.now()
                    }
                }, limit - (Date.now() - lastRan))
            }
        }
    }
    return(
        <>Throlling</>
    )
}
export default Throttling