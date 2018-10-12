import React from "react";
import {  connect } from 'react-redux';
import {INCREMENT_ACTION} from '../action/reviewaction';
import {DECREMENT_ACTION} from '../action/reviewaction';
import {ReviewPresention} from '../components/reviewcomponent'

const mapStatetoProps = like => {
    return {
        value : like
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrement: function() {
            dispatch(INCREMENT_ACTION);
        },
        onDecrement: function() {
            dispatch(DECREMENT_ACTION);
        }
    };
}

class App extends React.Component {
    render() {
      return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-3">
                        <div className="card-body">
                           <ReviewPresention {...this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const ReviewContainer = connect(
    mapStatetoProps,
    mapDispatchToProps
)(App);

 