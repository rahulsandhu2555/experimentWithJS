//mutatationObserver Api allow to monitor changes on the document tree, when a dom node changes, you can attach a callback
//function to react to the changes
//steps:
    //1. first create a callback function
        function callback(mutations) {
            //
        }
    //2. create MutationObserver object and pass cb
        let observer = new MutationObserver(callback);
    //3. call the observer method to monitor the DOM changes
        //observer.observe(targetNode, observerOptions);
            //targetNode => root of the node to observe for the changes
            //observerOptions => allows to specify the options
                let options = {
                    childList: true,  //childList, attributes, characterData should be there atleast, otherwise error
                    attributes: true, // to observe changes on the attributes
                    characterData: false, //to monitor changes on the textContent
                    subtree: false, // to observe changes on the subtree
                    attributeFilter: ['attr1', 'attr2'], // to observe changes on the particular attribute
                    attributeOldValue: false, // to access old values
                    characterDataOldValue: false //character old value
                };
    //4. to stop observing
        //observer.disconnect();