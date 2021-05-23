(function () {
    if (!window.indexedDB) { //to check if browser supports indexed DB
        console.log(`Your browser doesn't support IndexedDB`);
        return;
    }
    //to open a connection
    const request = indexedDB.open('CRM', 1);// (database name, version )
        //open() returns instance of IDBOpenDBRequest instance
        // to handle error or success we use
            request.onerror = (event) => {
                console.error(`Database error: ${event.target.errorCode}`);
            };

            request.onsuccess = (event) => {
                // add implementation here

                //you can also add contact like this
                const db = event.target.result;

                insertContact(db, {
                    email: 'john.doe@outlook.com',
                    firstName: 'John',
                    lastName: 'Doe'
                });
            };
    //if opening connection for the first time
        //onupgradeneeded event will be triggered, if opening second time version will be higher
    // create the Contacts object store and indexes
        request.onupgradeneeded = (event) => {
            let db = event.target.result;

            // create the Contacts object store
            // with auto-increment id
            let store = db.createObjectStore('Contacts', {
                autoIncrement: true
            });

            // create an index on the email property
            let index = store.createIndex('email', 'email', {
                unique: true
            });
        };
    //to insert the transaction in to the db
        function insertContact(db, contact) {
            // create a new transaction
            const txn = db.transaction('Contacts', 'readwrite'); //readwrite or readonly => to read only operations

            // get the Contacts object store
            const store = txn.objectStore('Contacts');
            //
            let query = store.put(contact);

            // handle success case
            query.onsuccess = function (event) {
                console.log(event);
            };

            // handle the error case
            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }

            // close the database once the
            // transaction completes
            txn.oncomplete = function () {
                db.close();
            };
        }
    //to get the data from the database
        function getContactById(db, id) {
            const txn = db.transaction('Contacts', 'readonly');
            const store = txn.objectStore('Contacts');

            let query = store.get(id);

            query.onsuccess = (event) => {
                if (!event.target.result) {
                    console.log(`The contact with ${id} not found`);
                } else {
                    console.table(event.target.result);
                }
            };

            query.onerror = (event) => {
                console.log(event.target.errorCode);
            }

            txn.oncomplete = function () {
                db.close();
            };
        };
        request.onsuccess = (event) => {
            const db = event.target.result;
            getContactById(db, 1);
        };
    //read data from store by index
        function getContactByEmail(db, email) {
            const txn = db.transaction('Contacts', 'readonly');
            const store = txn.objectStore('Contacts');

            // get the index from the Object Store
            const index = store.index('email');
            // query by indexes
            let query = index.get(email);

            // return the result object on success
            query.onsuccess = (event) => {
                console.log(query.result); // result objects
            };

            query.onerror = (event) => {
                console.log(event.target.errorCode);
            }

            // close the database connection
            txn.oncomplete = function () {
                db.close();
            };
        }
        request.onsuccess = (event) => {
            const db = event.target.result;
            // get contact by email
            getContactByEmail(db, 'jane.doe@gmail.com');
        };
    //to read all the date from the database, use cursor
        function getAllContacts(db) {
            const txn = db.transaction('Contacts', "readonly");
            const objectStore = txn.objectStore('Contacts');

            objectStore.openCursor().onsuccess = (event) => {
                let cursor = event.target.result;
                if (cursor) {
                    let contact = cursor.value;
                    console.log(contact);
                    // continue next record
                    cursor.continue();
                }
            };
            // close the database connection
            txn.oncomplete = function () {
                db.close();
            };
        }
        request.onsuccess = (event) => {
            const db = event.target.result;
            // get all contacts
            getAllContacts(db);
        };
    //to delete use delete() method
        function deleteContact(db, id) {
            // create a new transaction
            const txn = db.transaction('Contacts', 'readwrite');

            // get the Contacts object store
            const store = txn.objectStore('Contacts');
            //
            let query = store.delete(id);

            // handle the success case
            query.onsuccess = function (event) {
                console.log(event);
            };

            // handle the error case
            query.onerror = function (event) {
                console.log(event.target.errorCode);
            }

            // close the database once the
            // transaction completes
            txn.oncomplete = function () {
                db.close();
            };
        }
        request.onsuccess = (event) => {
            const db = event.target.result;
            deleteContact(db, 1);
        };
})();