import React from "react";

// const UserContext = React.createContext();
const UserContext = React.createContext('I am default'); // to set the defalut value, do this

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserConsumer, UserProvider}
export default UserContext // to use the context type