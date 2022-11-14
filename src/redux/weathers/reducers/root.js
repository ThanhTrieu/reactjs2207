import { combineReducers } from "redux";
import { searchReducer as search } from './search';

const rootReducer = combineReducers({
    search
});
export default rootReducer;