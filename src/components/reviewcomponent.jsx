import React from "react";

export const ReviewPresention = props =>(
    <React.Fragment>
        <h5 className="card-title">Review App</h5>
        <p className="card-text">This will indicate total no of likes gained, based on user clicks</p>
        <span className="card-link">Like : {props.value}</span><br/>
        <div className="btn-group btn-group-sm" role="group" aria-label="...">
            <button type="button" onClick={() => props.onIncrement()} className="card-link btn btn-success btn-sm card-link">Like Counter</button>
            <button type="button" onClick={() => props.onDecrement()} className="card-link btn btn-danger btn-sm card-link">Unlike Counter</button>
        </div>
    </React.Fragment>
);