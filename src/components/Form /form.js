//to create a form, use form element
    // <form action="/signup" method="post" id="signup">
    // </form>
        //two important attributes
            //action => url that will process the submission
            //method => get, post or
    //HTMLObject has the properties .action and .method
    //HTMLObject methods
        //submit => to submit the form
        //reset => to reset the form
    //document can have multiple forms
        //document.forms => returns collection of form elements
    //to submit the form
        //input => <input type="submit" value="Subscribe">
        //button => <button type="submit">Subscribe</button> if submit button has focus, and hit enter, will also submit
            //fires submit event right before calling the api, right place to do the validation on the data
            let form  = document.getElementById('signup');
            form.addEventListener('submit', (event) => {
                // handle the form data
                event.preventDefault(); // is called if the form is invalid and want to stop data to submit
            });
        //form.submit() => when using this, this does not fire the submit event, validate data before firing this method
    //accessing form fields
        //form.elements => to return collection of elements of the form
        //by getElementsByName(), getElementById(), querySelector()
            let form2 = document.getElementById('signup');
            let name = form2.elements[0];
            let name2 = form.elements['name'];
                //accessing its value let fullname = name.value;
    //Checkbox
        //to check if the checkbox is checked
            //select the checkbox and check checked property
                // <input type="checkbox" id="accept"> Accept
                // const cb = document.getElementById('accept');
                // console.log(cb.checked); or document.querySelector('#accept:checked') !== null
            //value => if checkbox does not have value attribute, its default value is on, checked or not
        //getting value of multiple checkbox
            //name and value attribute should be there, name should be same and attribute different
                // <input type="checkbox" name="color" value="red"> Red
                // <input type="checkbox" name="color" value="green"> Green
                // <input type="checkbox" name="color" value="blue"> Blue
                // const checkboxes = document.querySelectorAll('input[name="color"]:checked');
                // let colors = [];
                // checkboxes.forEach((checkbox) => {
                //     colors.push(checkbox.value);
                // });
        //check/uncheck all boxes
            function check(checked = true) {
                const cbs = document.querySelectorAll('input[name="color"]');
                cbs.forEach((cb) => {
                    cb.checked = checked;
                });
            }
    //Radio button => <input type="radio">
        //use name to form a group, from a group you can select only one
        //if checked property true => selected else not
            const btn = document.querySelector('#btn');
            // handle click button
            btn.onclick = function () {
                const rbs = document.querySelectorAll('input[name="choice"]');
                let selectedValue;
                for (const rb of rbs) {
                    if (rb.checked) {
                        selectedValue = rb.value;
                        break;
                    }
                }}
                //alert(selectedValue);
    //Select => provides list to select one or more
            // <select id="framework" multiple> // multiple optional if you want to select multiple
            //     <option value="1">Angular</option>
            //     <option value="2">React</option>
            //     <option value="3">Vue.js</option>
            //     <option value="4">Ember.js</option>
            // </select>
        //HTMLSelectElement =>
            //selectedIndex => returns zero based index, if none selected => -1, if multiple => first one is returned
            //value => value property of first selected element or returns ''
            //multiple => true, if allows multiple selection
        //HTMLOptionElement =>
            //index => index in the collection
            //selected => true if selected
            //text => returns option's text
            //value => returns HTML value attribute
        //accessing by property
            // let selectedOption = selectBox.options[selectBox.selectedIndex];
            // const selectedText = selectedOption.text;
            // const selectedValue = selectedOption.value;
        //to add an option dynamically
            //add() => HTMLSelectElement has add method to add the options dynamically
                //add(option,existingOption) => option - new option, existingOption - before existing Option
                    //let newOption = new Option('Option Text','Option Value');
                    //selectBox.add(newOption,undefined); => in undefined is passed, it add at the end of list
                //using DOM method
                    // create option using DOM
                    const newOption = document.createElement('option');
                    const optionText = document.createTextNode('Option Text');
                    // set option text
                    newOption.appendChild(optionText);
                    // and option value
                    newOption.setAttribute('value','Option Value');
                    // add the option to the select box
                    //selectBox.appendChild(newOption);
            //remove(index) =>
                //selectBox.remove(0);
                //using DOM method = >
                    // remove the first element:
                    // selectBox.removeChild(selectBox.options[0]);
    //Change event
            // element.addEventListener('change', function(){
            //     // handle change
            // });
            // or
            // <input type="text" onChange="changeHandler()">
        //for input box
            //fires change event when input box loses focus, if you want to handle every value change use input event instead
        //for radio button
            //event fires when you select
        //for check box
            //event fires when you select
        //for select
            //event fires when you select
    //Input event => fires whenever <input>, <select>, and <textarea> changes
        //fires everytime any change occurs
        //unlike change event (fires when value committed) , it fires on every change