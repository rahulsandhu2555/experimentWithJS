import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store";
import UserProfileConnect from "./UserProfileConnect";
import UserProfileHook from "./UserProfileHook";

function ReduxExample(props) {
    return (
        <Provider store={store}>
            <div>
                <p>Connect</p>
                <UserProfileConnect/><br/>
                ==================================================
                <p>hook</p>
                <UserProfileHook/>
            </div>
        </Provider>

    );
}

export default ReduxExample;