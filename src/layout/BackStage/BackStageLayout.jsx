import React from 'react';
import { Outlet } from "react-router-dom";
import SideMenu from './SideMenu';
import Header from '../Header';
import { Row, Col } from 'antd';
import "./backstage.css";

const BackStageLayout = () => {
    return (
        <div className='back-stage'>
            <Header></Header>
            <Row className="back-stage-row">
                <Col>
                    <SideMenu></SideMenu>
                </Col>
                <Col>
                <div className="back-stage-content">
                    <Outlet />
                </div>
                </Col>
            </Row>
        </div>
    )
}


export default BackStageLayout;