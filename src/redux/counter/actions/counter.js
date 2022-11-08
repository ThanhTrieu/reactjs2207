import * as types from './type';

// noi dinh nghia action
// se la 1 ham tra ve 1 object

export const decrementCounter = (val) => {
    return {
        type: types.DECREMENT_COUNTER,
        payload: { val }
    }
}
export const incrementCounter = (val) => ({
    type: types.INCREMENT_COUNTER,
    payload: { val }
});