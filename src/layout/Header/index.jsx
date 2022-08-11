import { DownOutlined, HomeOutlined, ExportOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Space, Button } from "antd";
import React, { useEffect, useState } from "react";
import LoginCard from "../../pages/user/LoginCard";
import { routes, getItem } from "../../router";
import { useNavigate, useLocation  } from "react-router-dom";
import "./header.css";
import {
  updateLoginStatus,
  updateUserInfo,
  logout,
} from "../../pages/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
    const dispatchLogout = () => {
      dispatch(logout());
      // dispatch(updateLoginStatus(false));
    };

    const userInfo = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    const location = useLocation();

    const userMenu = [
      getItem(
        <Link to="/personal" state={{ activedKey: "1" }}>
          个人信息
        </Link>,
        "userinfo",
        <HomeOutlined />
      ),
      getItem(
        <Link to="/personal" state={{ activedKey: "2" }}>
          我的订单
        </Link>,
        "myorders",
        <AppstoreOutlined />
      ),
      getItem(
        <span onClick={dispatchLogout}>退出登录</span>,
        "logout",
        <LogoutOutlined />
      ),
    ];

    const dispatch = useDispatch();

    const [current, setCurrent] = useState("mail");

    const loginStatus = useSelector((state) => {
      return state.user.isLoginGlobal;
    });

    // 获取localStorage userInfo
    useEffect(() => {
      let jpStorageUserInfo = localStorage.getItem("jpUserInfo");
      if (jpStorageUserInfo) {
        // 已经登录
        // 保存userInfo到redux
        dispatch(updateUserInfo(JSON.parse(jpStorageUserInfo)));
        // 保存登录状态
        dispatch(updateLoginStatus(true));
      }
    }, [dispatch]);

    const [modal2Visible, setModal2Visible] = useState(false);

    const clickMenu = (e) => {
      setCurrent(e.key);
    };

    const toBackStage = () => {
      navigate("/back-stage");
    }

    const setUserMenu = () => {
      return <Menu items={userMenu}></Menu>;
    };

    return (
      <Row className="header" justify="center" align="middle">
        <Col className="logo-box" span={4}>
          <img src={require("../../assets/logo.jpg")} alt="logo"></img>
        </Col>
        <Col className="nav" span={16}>
          <Menu
            style={{width: "400px"}}
            defaultSelectedKeys={['homepage']}
            mode="horizontal"
            onClick={clickMenu}
            selectedKeys={[current]}
            items={routes}
          />
          {
            userInfo.roles !== undefined && userInfo.roles.includes("cinema-admin") && !location.pathname.includes("/back-stage") ? (
              <Button className="to-back-btn" onClick={toBackStage} icon={<ExportOutlined />}>
                后台管理
              </Button>
            ) : ""
          }
          
        </Col>
        <Col className="user-box" span={4}>
          {loginStatus ? (
            <div>
              <Dropdown overlay={setUserMenu} arrow placement="bottom">
                <Space className="dropdown-icon" >
                  <img
                    src={userInfo&&userInfo.photo ? userInfo.photo : require("../../assets/default-avatar.png") }
                    alt="head-portrait"
                  ></img>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
          ) : (
            <div onClick={() => setModal2Visible(true)}>
              <span className="login-text">登录</span>
              <span> / </span>
              <span className="register-text">注册</span>
            </div>
          )}
        </Col>
        <LoginCard modal2Visible={modal2Visible} setModal2Visible={setModal2Visible}></LoginCard>
      </Row>
    );
}

export default Header;
