import {DownOutlined, HomeOutlined} from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Space } from "antd";
import React, {useEffect, useState} from "react";
import LoginCard from "../../pages/user/LoginCard";
import { routes, getItem } from "../../router";
import "./header.css";
import {updateLoginStatus, updateUserInfo, logout} from "../../pages/user/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    AppstoreOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Header = () => {

    const dispatchLogout = () => {
        dispatch(logout());
        // dispatch(updateLoginStatus(false));
    }

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
            <span onClick={dispatchLogout} >退出登录</span>,
            "logout",
            <AppstoreOutlined />
        ),
    ];

    const dispatch = useDispatch();

  const [current, setCurrent] = useState("mail");

    const loginStatus = useSelector((state) => {
        return state.user.isLoginGlobal;
    });





  // 获取sessionStorage userInfo
    useEffect(()=>{
        let sessionStorageUserInfo = sessionStorage.getItem("userInfo");
        if(sessionStorageUserInfo){ // 已经登录
            // 保存userInfo到redux
            dispatch(updateUserInfo(JSON.parse(sessionStorageUserInfo)));
            // 保存登录状态
            dispatch(updateLoginStatus(true));
        }
    }, [dispatch]);

  const [modal2Visible, setModal2Visible] = useState(false);

  const clickMenu = (e) => {
    setCurrent(e.key);
  };

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
          mode="horizontal"
          onClick={clickMenu}
          selectedKeys={[current]}
          items={routes}
        />
      </Col>
      <Col className="user-box" span={4}>
        {loginStatus ? (
          <div>
            <img
              src={require("../../assets/photo.jpg")}
              alt="head-portrait"
            ></img>
            <Dropdown overlay={setUserMenu} arrow placement="bottom">
              <Space>
                <DownOutlined className="dropdown-icon" />
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

      <LoginCard
        modal2Visible={modal2Visible}
        setModal2Visible={setModal2Visible}
      />
    </Row>
  );
};

export default Header;
