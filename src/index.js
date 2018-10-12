import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

/**
 * Create a Reducer First
 * -> Simple JS Function
 * -> Reducer must take two arg (Initial State like react state variable declaration,action )
 * -> State can be any premitive literals 
 * -> reducer must return default state
 * -> Create Store object
 */
//Reducer
function ReviewReducer(like=0, action){
    if(action.type === "INCREMENT"){
        return like+1;
    }
    return like
}
//Create Store
const appStore = createStore(ReviewReducer);

/**
 * Action
 * Action is plain literal object 
 * Action must contain type property
 * Type property value must be name of action 
 * name of the action is business logic name
 */

const action = {
    type : 'INCREMENT'
};

/**
 * Dispatch
 * It is method from store object
 * It is used to call reducer
 * appStore.dispatch() // Redux will call Review Reducer
 * Dispatch Method takes action as paramter
 */

appStore.dispatch(action) 

/**
 * Take Data Out
 */
console.log(appStore.getState()); 
class App extends React.Component {
    state = {
        like : 0
    }

    onIncrement = () =>{
        appStore.dispatch(action) 
        const like = appStore.getState();
        this.setState({like});
    }

    render() {
      return (
            <div className="container">
                <div className="card col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Review App</h5>
                        <p className="card-text">This will indicate total no of likes gained, based on user clicks</p>
                        <span className="card-link">Like : {this.state.like}</span>
                        <button type="button" onClick={this.onIncrement} className="btn btn-success btn-sm card-link">Like Counter</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));