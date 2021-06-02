import React from "react";
//Document Object Model => is an API for changing HTML and XML documents
//tree of nodes
//Cross Platform and language independent way of changing HTML doc
//document => root node => each document can have only one document node
//      |
//      html element > <head>...

//node type => each node is identified by the node type, JS recognises by the integer
//Node.ELEMENT_NODE  => 1 => An Element node like <p> or <div>.
//Node.COMMENT_NODE => 8 => A Comment node, such as <!-- … -->
//node.nodeType => to check the node type
//node.nodeName => <p> or <div> ....

//node or element
    //node is generic element in dom tree => it can be document, <html> <p> <div>
    //while element is => node.ELEMENT_NODE which contains the value = 1
//id and classes are case sensitive
//getElementById(id) => returns the element object with that id, id should be unique, if more than one, returns the first one
//getElementsByName() => fetch by name attribute, returns live NodeList, not an array, but array like object
//getElementsByTagName() => returns live HTMLCollection, live means if any node added or removed list will be updated automatically
//getElementsByClassName() => returns live HTMLCollection
    //     let menu = document.getElementById('#menu');
    //     let items = menu.getElementsByClassName('item');
    //     let data = [].map.call(items, item => item.textContent);
    //     console.log(data); // ["HTML", "CSS", "JavaScript", "TypeScript"]

//querySelector() and querySelectorAll()
    //querySelector() => finds the first element and returns, null if not found
    //querySelectorAll() => returns static nodelist, if not found [] empty list returned
        //after ES6, use Array.from() to convert nodeList to Array
        //1. *
            //matches all elements
        //2. Type selector
            //document.querySelector('h1')
        //3. class selector => with .
            //document.querySelector('.menu-
        //4. Id selector => with #
            //querySelector('#logo')
        //5. attribute
            // [attribute]
            // [attribute=value]
            // [attribute~=value]
            // [attribute|=value]
            // [attribute^=value]
            // [attribute$=value]
            // [attribute*$*=value]
        //6. group selector
            //document.querySelectorAll('<div>, <p>')
        //7. Combinator => adding space to combine tags
            //document.querySelector('p a')
            //child combinator
                //selector > selector
                //document.querySelectorAll('ul.nav > li')
            //general sibling combinator => selects siblings to the same parent
                //selector ~ selector
            //Adjacent sibling combinator => + adjacent siblings
                //document.querySelectorAll('h1 + a')
//Pseudo
    //Pseudo => : matches based on the state
        //document.querySelectorAll('a:visited')
    //Pseudo-elements => :: entities, that are not included in the document
        // document.querySelector('p::first-line')
//Parent Node
    // let parent = node.parentNode; => document and documentFragment doesn't have parent, so returns null
    //parentNode => read only
    //if the node created and doesn't attached to node tree, parentNode will also return null
//Sibling nodes

export function Sibling(){
    //first child
        //let firstChild = parentElement.firstChild;
        let content = document.getElementById('menu');
        let firstChild = content.firstChild.nodeName;
        //or
        //let firstElementChild = parentElement.firstElementChild;
        console.log(firstChild);// #text coz whitespace is inserted between <ul> <li>
        //single space, multiple space, or tab will return #text
        <article id="content"><h2>Heading</h2><p>First paragraph</p></article> // remove spaces to get the correct element
    //last child
        // let lastChild = parentElement.lastChild;
        // let lastChild = parentElement.lastElementChild;
    //get all child
        // let children = parentElement.childNodes;
        // let children = parentElement.children;
    //nextElementSibling => to get the next sibling, if not present null is returned
        let current = document.querySelector('.current');
        let nextSibling = current.nextElementSibling;
        console.log(nextSibling);
        //to get all nextSibling use in loop, nextSibling.nextElementSibling
    //previousElementSibling => to get the previous sibling, if the first one, will return null
        let current2 = document.querySelector('.current');
        let prevSiblings = current2.previousElementSibling;
        console.log(prevSiblings);
    return(
        <>
            siblings
            <ul id="menu">
                <li>Home</li>
                <li>Products</li>
                <li className="current">Customer Support</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>News</li>
                <li>About Us</li>
            </ul>
        </>
    )
}