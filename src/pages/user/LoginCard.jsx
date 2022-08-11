import React, {useState} from 'react';
import "./Login.css";
import {message, Modal} from 'antd';
import LoginCardHeader from './LoginCardHeader';
import {Switch, Input} from 'antd';
import {updateLoginStatus, updateUserInfo} from "./UserSlice";
import {useDispatch} from "react-redux";
import {JPApi} from "../../api/http";


const LoginCard = (prop) => {

    // 登录注册转换
    const [isLogin, setIsLogin] = useState(true);

    const switchOnChange = (e) => {
        setIsLogin(!isLogin);
    }

    const [isAdmin, setIsAdmin] = useState(false);

    const switchAdminOnChange = (e) => {
        setIsAdmin(!isAdmin);
    }

    const [inputUsername, setInputUsername] = useState('');
    const onInputUsernameChange = (e) => {
        setInputUsername(e.target.value);
    }

    const [inputPassword, setInputPassword] = useState('');
    const onInputPasswordChange = (e) => {
        setInputPassword(e.target.value);
    }

    const [inputCheckPassword, setInputCheckPassword] = useState('');
    const onInputCheckPasswordChange = (e) => {
        setInputCheckPassword(e.target.value);
    }

    const [inputInvitationCode, setInputInvitationCode] = useState('');
    const onInputInvitationCodeChange = (e) => {
        setInputInvitationCode(e.target.value);
    }

    const dispatch = useDispatch();

    const onConfirm = () => {
        const user = {
            username: inputUsername,
            password: inputPassword
        };
        const loginOrRegisterSuccess = (resp) =>{

            // 写入localStorage
            let jptoken = resp.data.jptoken;
            if(jptoken){
                localStorage.setItem('jptoken', jptoken);
            }else {
                message.error("未能得到用户凭证，请调试网络");
            }

            // 写入localStorage
            if(resp.data.data.userInfo){
                localStorage.setItem("jpUserInfo", JSON.stringify(resp.data.data.userInfo));
                // 写入redux
                dispatch(updateUserInfo(resp.data.data.userInfo));

                dispatch(updateLoginStatus(true));
                // 关闭登录窗
                prop.setModal2Visible(false)
            }else{
                message.error("未能得到用户信息");
            }
        }
        if (isLogin) {
            JPApi("/user/login", "post", user, loginOrRegisterSuccess);
        } else {
            if (inputUsername === '' || inputPassword === '' || inputCheckPassword === '') {
                alert('请输入用户名、密码和确认密码');
            } else if (inputPassword !== inputCheckPassword) {
                alert('两次密码不一致');
            } else if(isAdmin && inputInvitationCode === ''){
                alert('邀请码不能为空');
            } else {
                if(isAdmin){
                    JPApi("/admin/users/register", "post", user, loginOrRegisterSuccess);
                }else{
                    JPApi("/user/register", "post", user, loginOrRegisterSuccess);
                }
            }
        }
    }

    return (
        <>
            <Modal
                title={<LoginCardHeader isLogin={isLogin} isAdmin={isAdmin}/>}
                centered
                visible={prop.modal2Visible}
                onOk={onConfirm}
                onCancel={() => prop.setModal2Visible(false)}
            >
                <div style={{"margin": "0 30px"}}>
                    <Input type="text" placeholder='请输入账号' onChange={onInputUsernameChange}/>
                    <Input type="password" placeholder='请输入密码' onChange={onInputPasswordChange}/>
                    {isLogin ?
                        null :
                        <Input type="password" placeholder='请输入确认密码' onChange={onInputCheckPasswordChange}/>
                    }
                    {isAdmin && !isLogin? <Input type="text" placeholder='请输入影院验证邀请码' onChange={onInputInvitationCodeChange}/> : null}

                </div>
                <div>
                    <Switch checkedChildren="我是影院管理员" unCheckedChildren="我是用户" onChange={switchAdminOnChange}/>
                    <Switch checkedChildren="去登录" unCheckedChildren="去注册" onChange={switchOnChange}/>
                </div>
            </Modal>
        </>
    );
};

export default LoginCard;
