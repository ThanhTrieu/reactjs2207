import { combineReducers } from 'redux';
import { counterReducer as counter } from './counter';
// import them reducer khac neu co

const rootReducer = combineReducers({
    counter,
    // goi them reducer khac neu co
});
export default rootReducer;