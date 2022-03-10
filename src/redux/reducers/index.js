import { combineReducers } from "redux";
import {userReducer, userInfoReducer} from './reducer';


const reducers = combineReducers({
    allUsers : userReducer,
    user: userInfoReducer

});
export default reducers;