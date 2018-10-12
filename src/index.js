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

    return like;
}
//Create Store
const appStore = createStore(ReviewReducer);
console.log(appStore)
 
class App extends React.Component {
    render(){
        return(
            <div className="container">
                <h1>Redux Review Component</h1>
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));