import React from "react";

export function ManipulatingElements(){
    //Creating element
        //document.createElement()
            let div = document.createElement('div');
            div.id = 'content';
            div.className = 'note';
            // div.innerHTML = '<p>CreateElement example</p>';
            //div.innerHTML += '<p class="note">JS DOM</p>';/or
            // create a new text node and add it to the div
            let text = document.createTextNode('CreateElement example');
            div.appendChild(text);
            document.body.appendChild(div);

            //to create script element
                function loadJSAsync(url) {
                    let script = document.createElement('script');
                    script.src = url;
                    script.async = true;
                    document.body.appendChild(script);
                }
            div.innerHTML += '<p class="note">JS DOM</p>'; // you can also do like this, but createElement is more efficient
                            //coz using innerHTML reparse and recreate all DOM elements
        //inside innerHTML, data should come from secure and trusted source, or malicious code can be injected, createElement more secure
    //append() => used to insert set of Node objects or DOM strings after the last node
        //parentNode.append(...nodes);
        //parentNode.append(...DOMStrings); => will insert domstring as a text node
        //input => multiple node object
        //return value undefined
    //appendChild() => allows to add the node at the end of the list
        //parentNode.appendChild(childNode); => if child node is already there, it moves to new position
        //input => single node object
        //return value => appended node
    //prepend() => used to insert set of Node objects or DOM strings before the first node
        // parentNode.prepend(...nodes);
        // parentNode.prepend(...DOMStrings);
    //Text content of the node
        //to get the text content
            // let text = node.textContent; => if getting text content of parent,it will give text of all child concatenated, excluding comments
            let note = document.getElementById('note');
            // console.log(note.textContent);
            // JavaScript textContent Demo!
            // Hidden Text!
    //innerText() => takes css into account, will give human readable text, not the hidden one
            //console.log(note.innerText);
            // JavaScript textContent Demo!
    //insertBefore() => to insert a before
    //insertAfter() => to insert after
    //insertAdjacentHTML() => element.insertAdjacentHTML(positionName, text);
        //positionName = beforebegin, afterbegin, beforeend, afterend
    //replaceChile() => parentNode.replaceChild(newChild, oldChild);
    //removeChild()
        //let childNode = parentNode.removeChild(childNode);
        //parentNode.removeChild(childNode); if you dont want to keep the removed child
    //parentNode.insertBefore(newNode, existingNode);
    //cloneNode() => a method of node interface
        //let clonedNode = originalNode.cloneNode(deep);
            //if deep is true, its decendent will be copied, else not
            //it copies all the attributes and inline event listeners, however skips event listeners added by
            //addEventListener()  or properties like originalNode.onclick = eventHandler()
    //innerHtml() => to get or set the HTML markup inside the element
        //SECURITY WARNING => you should not use use <script> tag while setting innerHtml(),
        //you should not use the content inside the innerHTML(), on which you do not have the control, a security risk
        //if you want to use the text content use textContent instead, it will be treated as raw text
    //DocumentFragment => use for better performance
        //stores a Document like structure, is not a part of active DOM Tree
        //and you can insert this in active DOM using appendChild() or insertBefore()
    return(
        <>
            Manipulating Elements
            <div id="note">
                JavaScript textContent Demo!
                <span style={{display:"none"}}>Hidden Text!</span>
                // Comment
            </div>
        </>
    )

}