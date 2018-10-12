
import { createStore } from 'redux';
import {ReviewReducer} from '../reducers/ReviewReducer';

/* const ReducerConfig = {
    ReviewReducer,
    NomalReducer
}

const rootReducer = combineReducers(ReducerConfig) */
export const appStore = createStore(ReviewReducer);
