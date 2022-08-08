import React from 'react';
import "./Login.css"

const LoginContent = (props) => {

    const isLogin = props.isLogin;

    return (
        <div className='login-header'>
            <img src={require("./image/ticket.png")} />
            <div>{isLogin ? "登录" : "注册"}</div>
        </div>
    );
};

export default LoginContent;