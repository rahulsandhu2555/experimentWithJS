/*
method in Constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };
    }
    => this getFullName will be attached to the every object created, but that is not necessary, to avoid that we can
       use Prototype to share the common functionality

 */