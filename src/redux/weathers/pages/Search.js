import React from "react";
import SearchWeather from '../components/Search';
import ResultWeather from "../components/Result";
import { Row, Col } from 'antd';

const SearchPage = () => {
    return (
        <>
            <Row style={{ margin: '30px 0px' }}>
                <Col span={12} offset={6}>
                    <SearchWeather/>
                </Col>
            </Row>
            <ResultWeather/>
        </>
    )
}
export default React.memo(SearchPage);