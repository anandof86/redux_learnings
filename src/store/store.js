
import { createStore } from 'redux';
import {ReviewReducer} from '../reducers/ReviewReducer';

export const appStore = createStore(ReviewReducer);