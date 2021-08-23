import React from 'react';
import UseState from "./UseState";
import UseReducer from "./UseReducer";
import ParentChild from "./ParentChild";
import ChildForParent from "./ChildForParent";
import IncorrectMemo from "./incorrectOptimization/IncorrectMemo";

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
            {/*<UseReducer/>*/}
            {/*<ParentChild/>*/}
            <IncorrectMemo/>
            {/* to avoid the unnecessary re-rendering of the child component, we can use memoization, or you can pass the
             the component as a children*/}
            {/*<ParentChild>*/}
                {/*same element reference, use when there is change in state, coz on props change, it will re-render
                if same props, go for React.memo(child)*/}
            {/*    <ChildForParent/>*/}
            {/*</ParentChild>*/}
            {/* here we are passing Child as a prop, ParentChild = ({children}) = > {}
                //not re-render coz, no parent re-render(passed as prop), no state change, no prop change
                //component can change its state, but not props, so React automatically provides optimisation
                //makes use of previously created elements, children props has to be referencing to same element from
                //previous render, so will skip the re-render for the children

                //but if its grand parent state is changing, it will cause the re-render of parent and child as well
                //coz react thinks, props might have changed, but does not passes to the Commit Phase
            */}
        </div>
    );
}

export default ReactRender;