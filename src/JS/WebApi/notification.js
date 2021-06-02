//Notification
    //Notification API can be abuse easily, Two security feature by default
        //user must explicitly agree to receive notification
        //code runs in secure context HTTPS
    // let permission = await Notification.requestPermission();
        //returns a promise, string value of permissions are => granted, denied, default
    //create notification
        //use Notification constructor for the same
            const greeting = new Notification('Hi, How are you?');
            //or
            const greeting2 = new Notification('Hi, How are you?',{  // to customize using optional options parameter
                body: 'Have a good day',
                icon: './img/goodday.png'
            });
    //to close the notification
        greeting.close();
        //setTimeout(() => greenting.close(), 10*1000); //to close after some time
    //Notification Events
        //show => fire when notification is displayed
        //click => when notification is clicked
        //close => fires when notification is dismissed or closed via close()
        //error => when error occurs, blocks notification from display

        //to handle these events use eventListener() method on Notification object
            // navigate to the https://www.javascripttutorial.net/ on click
            greeting.addEventListener('click', function(){
                window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/');
            });
            //or you can add to the property of the greeting object => onshow, onclick, onclose and onerror
            greeting.onclick = () => window.open('https://www.javascripttutorial.net/web-apis/javascript-notification/');

