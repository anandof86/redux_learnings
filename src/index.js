import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

/** Redux Layer Starts Here */
import {ReviewReducer} from './reducers/ReviewReducer';
import {INCREMENT_ACTION} from './action/reviewaction';

//Create Store
const appStore = createStore(ReviewReducer);
/** Redux Layer Ends Here */


/**
 * Redux State to React Prop Mapper
 * 
 */

const mapStatetoProps = like =>{
    return {
        value : like
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        onIncrement: function() {
            dispatch(INCREMENT_ACTION);
        }
    };
}
//Presentaion Layer

const ReviewPresention = props =>(
    <React.Fragment>
        <h5 className="card-title">Review App</h5>
        <p className="card-text">This will indicate total no of likes gained, based on user clicks</p>
        <span className="card-link">Like : {props.value}</span>
        <button type="button" onClick={() => props.onIncrement()} className="btn btn-success btn-sm card-link">Like Counter</button>
    </React.Fragment>
);


//Container Component Layer

class App extends React.Component {
   
    render() {
      return (
            <div className="container">
                    <div className="card col-md-6">
                        <div className="card-body">
                            <ReviewPresention {...this.props}/>
                        </div>
                    </div>
            </div>
        );
    }

    
   
}
//Create a Create Container Component
const ReviewContainer = connect(
    mapStatetoProps,
    mapDispatchToProps
)(App);

const MainApp = () => (
    <Provider store={appStore}>
      <ReviewContainer  />
    </Provider>
);
  

render(<MainApp />, document.getElementById("root"));