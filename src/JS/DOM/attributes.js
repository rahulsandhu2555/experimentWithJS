//when browser loads HTML, it generates DOM object's properties from DOM Nodes
// <input type="text" id="username">  => has two attributes
    //generated HTMLInputElement object will have two properties input.id and input.type
    //only standard properties are converted into DOM object properties
        // <input type="text" id="username" secured="true">
        //input.secured => will be undefined
//attribute methods
    // element.getAttribute(name) – get the attribute value, null if can't find
    // element.setAttribute(name, value) – set the value for the attribute
        //name automatically converts to lowercase
        //returns undefined
        //if already exists => updates the value
        // btnSend.setAttribute('disabled', ''); => boolean field, to enable, remove this attribute or can't set false
    // element.hasAttribute(name) – check for the existence of an attribute
    // element.removeAttribute(name) – remove the attribute
        //if name attribute is not present, will raise an error, returns undefined
//element.attributes => provides a live collection of attributes
    let input = document.querySelector('#username');
    for(let attr of input.attributes) {
        console.log(`${attr.name} = ${attr.value}` )
    }
    // type = text
    // id = username
    // secure = true
//when we try to update the standard property, it reflects, but if try to update the non standard property, it doesn't
    // <input type="text" id="username" tabIndex="1">
    //     // attribute -> property
    //     input.setAttribute('tabindex', 2);
    //     console.log(input.tabIndex);  // 2
    //
    //     // attribute -> property: OK
    //     input.setAttribute('value','guest');
    //     console.log(input.value);  // guest
    //
    //     // property -> attribute: doesn't change
    //     input.value = 'admin';
    //     console.log(input.getAttribute('value')); // guest
//DOM properties are typed
    //attribute value has to be string, but while converting to the DOM Object property it can be Boolean, Object, string
//custom attribute
    //want to add custom attribute, prefix with data-
    <div id="main" data-progress="pending" data-value="10%"></div>
    let bar = document.querySelector('#main');
    console.log(bar.dataset);
    // [object DOMStringMap] {
    //     progress: "pending",
    //         value: "10%"
    // }

