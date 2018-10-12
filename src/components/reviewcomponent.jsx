import React from "react";

export const ReviewPresention = props =>(
    <React.Fragment>
        <h5 className="card-title">Review App</h5>
        <p className="card-text">This will indicate total no of likes gained, based on user clicks</p>
        <span className="card-link">Like : {props.value}</span>
        <button type="button" onClick={() => props.onIncrement()} className="btn btn-success btn-sm card-link">Like Counter</button>
    </React.Fragment>
);