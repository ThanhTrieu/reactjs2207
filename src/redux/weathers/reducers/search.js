import * as types from '../actions/index';

const defaultState = {
    loading: false,
    finish: false,
    dataWeather: [],
    error: {}
}

// reducer thi chi nhan cac action cua redux saga
export const searchReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.START_SEARCH:
            return {
                ...state,
                loading: action.loading,
                finish: false
            }
        case types.FINISH_SEARCH:
            return {
                ...state,
                finish: action.finish,
                loading: false
            }
        case types.SEARCH_DATA_SUCCESS:
            return {
                ...state,
                dataWeather: action.dataWeather,
                error: {}
            }
        case types.SEARCH_DATA_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}