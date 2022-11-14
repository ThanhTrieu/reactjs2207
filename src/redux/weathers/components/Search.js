import React from "react";
import { useDispatch } from "react-redux";
import { Input } from 'antd';
import { searchWeatherByCity } from '../actions/index';

const { Search } = Input;

const SearchWeather = () => {
    const dispatch = useDispatch();
    const searchData = name => {
        dispatch(searchWeatherByCity(name));
    }

    return (
        <Search
            placeholder="Name of city"
            allowClear={true}
            enterButton
            onSearch={val => searchData(val)}
        />
    )
}
export default React.memo(SearchWeather);