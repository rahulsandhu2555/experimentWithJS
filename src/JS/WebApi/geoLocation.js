//GeoLocation
    //geoLocation object available through => navigator.geolocation
    //to check if supported
        if (!navigator.geolocation) {
            console.error(`Your browser doesn't support Geolocation`);
        }
    //to get the current position
        //getCurrentPosition() => method of geolocation object
    (() => {
        const message = document.querySelector('#message');

        // check if the Geolocation API is supported
        if (!navigator.geolocation) {
            message.textContent = `Your browser doesn't support Geolocation`;
            message.classList.add('error');
            return;
        }

        // handle click event
        const btn = document.querySelector('#show');
        btn.addEventListener('click', function () {
            // get the current position
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        });


        // handle success case
        function onSuccess(position) {
            const {
                latitude,
                longitude
            } = position.coords;

            message.classList.add('success');
            message.textContent = `Your location: (${latitude},${longitude})`;
        }

        // handle error case
        function onError() {
            message.classList.add('error');
            message.textContent = `Failed to get your location!`;
        }
    })();
