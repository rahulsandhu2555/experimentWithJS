import React from "react";
//React
    //react is declarative => means you tell what to draw, and its upto react it draws the canvas
    //imperative => means you tell what to draw first and then what next

    //npx - npm package runner, gets installed with nodejs, means create-react-app package is already there
    //npm - need to install npm install create-react-app -g, then create-react-app <project_name>

    //JSX => JS xml => code simple and elegant
        const jsx = () => {return(
            <div id={'testId'} className={'testClass'}>
                <h1>
                    hello
                </h1>
            </div>
        )}
        const noJsx = () =>  {
            return React.createElement(
                "div", {id:'testId', className: 'testClass'},
                React.createElement('h1', null, 'hello'))
        }
        //differences
            //class => className
            //for => htmlFor
            //camelcase property convention
                //onclick => onClick
    //props => is object of attributes passed to the component => immutable
        //if not sure about the content, then pass it as a children
//Conditional Rendering
    //1. if/else can not be used in the jsx
        // render(
        //     if(){
        //         return()
        //     }else{
        //         return()
        //     }
        // )
    //2. storing the jsx in the variable
        // render(){
        //     let element;
        //     if(x){
        //         element = <div>Hi there!</div>
        //     }else{
        //         element = <div>Hello there!</div>
        //     }
        //     return(
        //         <div>{element}</div>
        //     )
        // }
    //3. ternary => can be used inside the JSX
        // return x ? <div> this is</div> : <div>else this</div>
    //4.
        //return x && <div>if x is true </div> //=> renders if only x is true

//Rendering list
    //Why key is used?
        //to gives element a stable identity
        //key helps react to identify, which Item has changed, added updated or removed
        //efficient UI update
        //items does not have unique ID
        //List is static and will not change
        //list will never be reordered or filtered

//Fragment or <></>
    //does not create extra node
    //only key attribute can be passed to the Fragment


//Ways to add React into a website
    //1. you can import the script and directly use it, but not recommended for production
        // https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/html/single-file-example.html