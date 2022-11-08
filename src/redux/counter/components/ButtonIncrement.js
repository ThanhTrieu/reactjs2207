import React from 'react';

const ButtonIncrement = () => {
    return (
        <button
            type="button"
            name="increment"
        > - </button>
    )
}
export default React.memo(ButtonIncrement);