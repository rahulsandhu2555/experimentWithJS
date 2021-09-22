//Parent.js
//CountContext
//
//ChildA
//ChildB
//ChildC
//const x = useContext(CountContext)

//when using context, lets say passing provider from the parent and using in the component C, React will flag the Provider
//and the component using the context value for the re-render, if provider updated
//however, if parent is updated, every child will re-render because of the default behaviour
//Child C has two reason to re-render, parent and provider

//to achieve the optimization, you can use the React.memo for the ChildA component, as the props are not changing
//it will not re-render, hence its child B and C will not re-render, now Child C will re-render because it is using the
//provider, so it will re-render

//or

//you can use the same element response and pass the Child A as a children, so it will not re-render