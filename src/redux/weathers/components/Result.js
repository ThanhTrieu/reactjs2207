import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import  * as reselector  from '../reselect/search';
import { Row, Col, Skeleton } from 'antd';

const ResultWeather = () => {
    // get state 
    const { loading, finish, weathers } = useSelector(createStructuredSelector({
        loading: reselector.getStateLoading,
        finish: reselector.getStateFinish,
        weathers: reselector.getMainData
    }));

    if(loading){
        return (
            <Skeleton active />
        )
    }

    if((weathers=== undefined || weathers.length === 0) && finish){
        return (
            <h3> Khong du lieu ban can tim kiem</h3>
        )
    }

    if(!loading && !finish){
        return null;
    }


    return (
        <Row>
            <Col span={20} offset={2}>
                <ul>
                {weathers.map((item,index) => (
                    <li key={index}>
                        <p>Ngay: {item.dt_txt}</p>
                        <p>Nhiet do: {item.main.temp}</p>
                    </li>
                ))}
                </ul>
            </Col>
        </Row>   
    )
}
export default React.memo(ResultWeather);