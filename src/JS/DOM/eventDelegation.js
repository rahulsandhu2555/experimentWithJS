//event delegation => process of adding only one event handler to the parent, rather than adding a lot on child
    //lets say you have a menu, and you are capturing onclick on every option,
    //not good, because every event handler is function, and function are objects, which are taking space and time to assign
    //to avoid this we use event bubbling and capture the click at parent
<ul id="menu">
    <li><a id="home">home</a></li>
    <li><a id="dashboard">Dashboard</a></li>
    <li><a id="report">report</a></li>
</ul>

// while handling click individually
let home = document.querySelector('#home');
home.addEventListener('home',(event) => {
    console.log('Home menu item was clicked');
});

let dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('dashboard',(event) => {
    console.log('Dashboard menu item was clicked');
});

let report = document.querySelector('#report');
report.addEventListener('report',(event) => {
    console.log('Report menu item was clicked');
});

//with event bubbling
let menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});
//when it is possible, you should use event handlers on the document, coz
    //less memory, better performance
    //less time required to setup event handlers on the page
    //document object is available immediately