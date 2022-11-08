import React from 'react';
import ButtonDecrement from './components/ButtonDecrement';
import ButtonIncrement from './components/ButtonIncrement';
import Result from './components/Result';
import { Provider } from 'react-redux'
import store from './store';

const AppCounter = () => {
    return (
        <Provider store={store}>
            <Result/>
            <ButtonDecrement/>
            <ButtonIncrement/>
        </Provider>
    )
}
export default React.memo(AppCounter);