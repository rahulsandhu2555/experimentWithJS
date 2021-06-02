import React from "react";

// const UesrContext = React.createContext();
const UesrContext = React.createContext('I am default'); // to set the defalut value, do this

const UserProvider = UesrContext.Provider;
const UserConsumer = UesrContext.Consumer;

export {UserConsumer, UserProvider}
export default UesrContext // to use the context type