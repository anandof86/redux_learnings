import {INCREMENT, DECREMENT} from '../actionconstants/constants';

export const ReviewReducer = (like=0, INCREMENT_ACTION) =>{
    switch (INCREMENT_ACTION.type) {
        case INCREMENT:
            return like+1 
        case DECREMENT:
            return like-1       
        default:
            return like
    }
}
