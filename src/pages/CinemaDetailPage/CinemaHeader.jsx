import React from 'react';
import { Col, Row } from 'antd';

const CinemaHeader = (props) => {

    const {cinemaName, address, phone} = props.cinemaInfo;


    return (
        <div className='cinema-header'>
            <Row className='header-row'>
                <Col span={10}>
                    <img src={require("../../assets/cinema.jpg")} alt=""></img>
                </Col>
                <Col className="info-text" span={14}>
                    <div className='name-text'>{cinemaName}</div>
                    <div className='address-text'>地址：{address}</div>
                    <div className='phone-text'>电话：{phone}</div>
                </Col>
            </Row>
        </div>
    );
}

export default CinemaHeader;