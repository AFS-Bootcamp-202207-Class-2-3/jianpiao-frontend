import React from 'react';
import "./Login.css"

const LoginCardHeader = (props) => {

    const isLogin = props.isLogin;
    const isAdmin = props.isAdmin;
    return (
        <div className='login-header'>
            <img alt="" src={require("./image/ticket.png")} />
            <div>{isAdmin ? "影院管理员" : ""}{isLogin ? "登录" : "注册"}</div>
        </div>
    );
};

export default LoginCardHeader;
