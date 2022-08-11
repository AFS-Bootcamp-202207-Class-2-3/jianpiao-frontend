import React, {useEffect} from 'react';
import { Outlet } from "react-router-dom";
import SideMenu from './SideMenu';
import Header from '../Header';
import { useNavigate  } from "react-router-dom";
import { Row, Col } from 'antd';
import "./backstage.css";

const BackStageLayout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("jpUserInfo"));
        if (user === null ||user.roles === undefined || !user.roles.includes("cinema-admin")) {
            navigate("/");
        }
    });

    return (
        <div className='back-stage'>
            <Header></Header>
            <Row className="back-stage-row">
                <Col>
                    <SideMenu></SideMenu>
                </Col>
                <Col style={{flex: 1}}>
                <div className="back-stage-content">
                    <Outlet />
                </div>
                </Col>
            </Row>
        </div>
    )
}


export default BackStageLayout;