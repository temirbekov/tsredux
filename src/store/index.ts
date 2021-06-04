import {combineReducers} from 'redux';
import news from "../reducers/news";
import users from "../store/users/reducer";

const rootReducer =  combineReducers({
  news,
  users,
});

export default rootReducer