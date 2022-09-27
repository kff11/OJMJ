import { combineReducers } from "redux";
import foodReducer from './foodReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    foodReducer,
    userReducer
});

export default rootReducer;