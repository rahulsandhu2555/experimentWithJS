// element.style = to set inline style
    //returns read-only CSSStyleDeclaration, which contains the css properties
        // element.style.color = 'red';
        // element.style.['-webkit-text-stock'] = 'unset';
//to override the existing style
    //.cssText
        //element.style.cssText = 'color:red;backgroundColor:yellow';
    //.setAttribute
        //element.setAttribute('style','color:red;background-color:yellow');
    //once properties are set, to modify
        //element.style.color = 'blue';
    //if dont want to completely override => use concat
        //element.style.cssText += 'color:red;backgroundColor:yellow';
//to get all the styles applied to an element
    //window.getComputedStyle()
    //let style = window.getComputedStyle(element [,pseudoElement]);
        //element => of which you want the style
        //pseudoElement => specifies the pseudoElement to match, default => null
        let link = document.querySelector('a');
        let style = getComputedStyle(link,':hover'); // returns live style object with instance of CSSStyleDeclaration
        console.log(style);

//class => html attribute, className => DOM Object property
    //element.className
    //to modify => element.className += newClassName;
//classList => readonly property
    //const classes = element.classList;
    //to manipulate
        // <div id="content" className="main red">JavaScript classList</div>
        // let div = document.querySelector('#content');
        // for (let cssClass of div.classList) {
        //     console.log(cssClass);
        // }
        // main
        // red
    //to add classes to classList
        let div = document.querySelector('#content');
        div.classList.add('info','visible','block');
    //to remove
        let div2 = document.querySelector('#content');
        div2.classList.remove('block','red');
    //to replace
        let div3 = document.querySelector('#content');
        div3.classList.replace('info','warning');
    //to check if contains a class
        let div4 = document.querySelector('#content');
        div4.classList.contains('warning'); // true
    //to toggle a class
        let div5 = document.querySelector('#content');
        div5.classList.toggle('visible');
//height and width
    let box = document.querySelector('div');
    let width = box.offsetWidth; //offset height and width contains padding and border
    let height = box.offsetHeight;

    let width2 = box.clientWidth; //with padding only, border not included
    let height2 = box.clientHeight

    //by using getComputedStyle
        let box2 = document.querySelector('div');
        let style3 = getComputedStyle(box2);

        let marginLeft = parseInt(style3.marginLeft);
        let marginRight = parseInt(style3.marginRight);
        let marginTop = parseInt(style3.marginTop);
        let marginBottom = parseInt(style3.marginBottom);