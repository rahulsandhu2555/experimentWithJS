import React from 'react';
import UseState from "./UseState";
import UseReducer from "./UseReducer";

function ReactRender(props) {
    //how rendering happens
            //Initial render
                //Render Phase
                    //moves from root to leaf node
                    //calls createElement on every component and converts : JSX => React Element (JS Objects)
                //Commit Phase
                    //once all are converted to JS Objects, all React Elements handed over to DOM (Commit Phase) using React DOM package
            //Re render
                //Render phase
                    //find all elements flagged for update
                    //for each flagged component, convert JSX to react element and store the result
                    //Perform reconciliation =>Diff between old and new tree (Virtual dom)
                    //hand over the changes to the DOM
                //Commit Phase
                    //Apply changes to DOM

    //**** Commit Phase is very fast but rendering can be slow ****//

    return (
        <div>
            {/*<UseState/>*/}
            <UseReducer/>
        </div>
    );
}

export default ReactRender;