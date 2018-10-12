import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import {ReviewReducer} from './reducers/ReviewReducer';
import {INCREMENT_ACTION} from './action/reviewaction';

//Create Store
const appStore = createStore(ReviewReducer);

class App extends React.Component {
    state = {
        like : 0
    }

    onIncrement = () =>{
        appStore.dispatch(INCREMENT_ACTION) 
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