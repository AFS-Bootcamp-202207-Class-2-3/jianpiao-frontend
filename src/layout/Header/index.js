import React, { useState } from "react";
import "./header.css";
import { Menu, Col, Row, Dropdown, Space } from "antd";
import { routes, userMenu } from "../../router";
import { DownOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
import LoginCard from "../../pages/user/LoginCard";
import {useSelector} from "react-redux";

const Header = () => {
  const [current, setCurrent] = useState("mail");

    const loginStatus = useSelector((state) => {
        return state.user.isLoginGlobal;
    })

    const [modal2Visible, setModal2Visible] = useState(false);

    const onClick = (e) => {
    console.log("click ", e);
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
          onClick={onClick}
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
          <div onClick={()=>setModal2Visible(true)}>
                <span className="login-text" >登录</span>
                <span> / </span>
                <span className="register-text">注册</span>
          </div>
        )}
      </Col>

        <LoginCard modal2Visible={modal2Visible} setModal2Visible={setModal2Visible}/>
    </Row>
  );
};

export default Header;
