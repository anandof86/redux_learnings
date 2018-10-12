import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

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