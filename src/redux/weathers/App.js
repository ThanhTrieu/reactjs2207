import React from "react";
import SearchPage from "./pages/Search";
import { Provider } from 'react-redux';
import { configStore } from './store/configStore';

const { store } = configStore();

const AppSearch = () => {
    return (
        <Provider store={store}>
            <SearchPage/>
        </Provider>
    )
}
export default React.memo(AppSearch);