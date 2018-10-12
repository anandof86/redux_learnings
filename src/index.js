import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import {appStore} from './store/store';
import {ReviewContainer} from './containers/reviewContainer';

const MainApp = () => (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="http://google.com">Navbar</a>
        </nav>
        <Provider store={appStore}>
        <ReviewContainer  />
        </Provider>
    </React.Fragment>
);

render(<MainApp />, document.getElementById("root"));
