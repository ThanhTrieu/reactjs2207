import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/counter';

const ButtonDecrement = () => {
    const dispatch = useDispatch();
    const decrement = () => {
        // dispatch action vao store
        // store day cho reducer xu ly
        dispatch(actions.decrementCounter(1));
    }

    return (
        <button
            type="button"
            name="decrement"
            onClick={()=> decrement()}
        > + </button>
    )
}
export default React.memo(ButtonDecrement);