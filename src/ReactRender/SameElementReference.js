//when component is passed as a props, and change is due to the state change, Child re-render won't happen

//this is the default behaviour, if parent will re-render, child will also re-render
// Parent.js
// <Child/>
//
// Child.js
// <>Child</>

//if the change is bcoz of state change, we can pass it as a  props

//as component can only change the state,not the props, react assumes the component passing as a prop, will not change
//so does not re-renders, makes use of previously created element
// <Parent>
//     <Child/>
// </Parent>

// Parent.js ({children})
// <>
//      {children}
// </>
//
// Child.js
// <>Child</>