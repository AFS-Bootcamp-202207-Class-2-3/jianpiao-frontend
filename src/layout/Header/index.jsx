import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginCard from "../../pages/user/LoginCard";
import { routes, userMenu } from "../../router";
import "./header.css";

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const loginStatus = useSelector((state) => {
    return state.user.isLoginGlobal;
  });

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
