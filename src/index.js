import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import {appStore} from './store/store';
import {ReviewContainer} from './containers/reviewContainer';

const MainApp = () => (
    <Provider store={appStore}>
      <ReviewContainer  />
    </Provider>
);

render(<MainApp />, document.getElementById("root"));
