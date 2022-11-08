// reducer: la noi cap nhat thay doi trang thai du lieu cua ung dung
// reducer: nhan vao state cu va action (action se dc store dispatch vao reducer)
import * as types from '../actions/type';

// dinh nghia stat mac dinh, ban dau cua ung dung
const defaultState = {
    count: 0
}

export const counterReducer = (state = defaultState, action) => {
    switch(action.type){
        case types.DECREMENT_COUNTER:
            // cap nhat thay doi state
            // khong thay doi truc tiep state cu ban dau
            return {
                ...state,
                count: state.count + action.payload.val
            }
        case types.INCREMENT_COUNTER:
            return {
                ...state,
                count: state.count - action.payload.val
            }
        default:
            return state;
    }
}

