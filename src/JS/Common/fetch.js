//Sending a request
    fetch('url')
        .then(response => {
            // handle the response
        })
        .catch(error => {
            // handle the error
        });

//reading a response
    fetch('/readme.txt')
        .then(response => response.text())
        .then(data => console.log(data));
    //or
    async function fetchText() {
        let response = await fetch('/readme.txt');
        let data = await response.text();
        console.log(data);
    }