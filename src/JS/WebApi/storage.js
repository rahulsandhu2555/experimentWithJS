//Cookies ~ Web Cookie ~ Browser Cookie = upto 4kb
    //generally server sends the data to browser and then browser sends it back with every request
    //why cookie
        //http req is stateless, there is no link between two consecutive http requests
        //for session management
        //Personalisation
        //Tracking
    //Cookie fields
        //name => unique, case insensitive
        //value => string value, must be url encoded
        //domain => domain for which cookie is valid
        //Path => path for which cookie should be sent to the server, without the domain
        //Expiration => timestamp at which browser should stop sending the cookie to the server, an cookie will expire and delete
        //secure => if secure flag is present, then browser sends cookie over the https only not over the http
    //Get Cookie
        //const str = document.cookie;
    //Set Cookie
        //document.cookie = cookieText;
        //it is good practise to use encodeURIComponent()
        //document.cookie = `${encodeURIComponent("username")}=${encodeURIComponent("admin")}`;
    //remove cookie
        //to remove => need to set the cookie with same name and value but with expired time
    //Cookie Class
        //has three method set get remove
            // set a cookie
            // Cookie.set('username', 'admin');
            // get a cookie
            // console.log(Cookie.get('username')); // admin
            // remove a cookie by a name
            // Cookie.remove('username');

//LocalStorage = to store data with no expiration => 5mb => stores only string type object
    //localstorage is bound to => protocol://host:port => unique
    //managed by JS, not interacted with server ~ however cookie can be managed by server and client
    //TO ACCESS
        //window.localStorage => return instance of Storage
    //SET ITEM
        //window.localStorage.setItem('theme','dark');
    //Length Property => to get the number of pairs
        //console.log(localStorage.length); // 1
    //GetItem
        //localStorage.getItem('theme'); // 'dark'
    //removeItem
        //localStorage.removeItem('theme');
    //to Iterate => for...of
        let keys = Object.keys(localStorage);
        for(let key of keys) {
            console.log(`${key}: ${localStorage.getItem(key)}`);
        }
        // color: #111
        // theme: light
        // backgroundColor: white
    //to store convert to string
        const settings = {
            backgroundColor: '#fff',
            color: '#111',
            theme: 'light'
        };
        localStorage.setItem('settings', JSON.stringify(settings));
        console.log(localStorage.getItem('settings'));
        // '{"backgroundColor":"#fff","color":"#111","theme":"light"}'
    //Storage Event
        //when there is any change in the storage, storage event is fired
        //Event occurs => setItem() removeItem() clear()
        //Storage event has properties
            //domain
            //key
            //oldValue
            //newValue
                // addEventListener('storage', function(e){
                //     console.log(`The value of the ${e.key} changed for the ${e.domain}.`);
                // });
//Session Storage => Stores the data for the session session, gets deleted as soon as browser or tab closed
    //new tab => new session
    //for same url on different tab => crates different session, which is not accessible to each other
    //TO Access =>
        //window.sessionStorage => returns the storage instance
    //TO Set
        //sessionStorage.setItem('mode','dark');
    //Get Data
        //const mode = sessionStorage.getItem('mode');
        // console.log(mode); // 'dark'
    //Remove Item
        //sessionStorage.removeItem('mode');
    //Iterate Over items
        let keys2 = Object.keys(sessionStorage);
        for(let key of keys2) {
            console.log(`${key}: ${sessionStorage.getItem(key)}`);
        }
    //To delete all items in session storage
        //sessionStorage.clear();
//indexedDB => used in the web, which works online and offline both. For large storage
    //Large scale object store
    //key values => value can be primitive and non primitive

    //indexDB structure
        //databases => contains one or more object stores, one db per web app
        //Object Store => bucket to store data with associated indexes ~ conceptually equally equivalent to SQL
        //indexes to create index on object to query, like on email
        //Concepts
            //Store key value pairs, but unlike localStorage and sessionStorage, we can even store blob
        //transactional => read from and write to db are transactional
            //good to maintain the integrity of the data, coz two transaction in two different tabs read and write at the same time
        //asynchronous => uses DOM event to notify transaction is complete and data ia available
        //follows same-origin policy