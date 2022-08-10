import React, {useState} from 'react';
import "./Login.css";
import {Modal} from 'antd';
import LoginCardHeader from './LoginCardHeader';
import {Switch, Input} from 'antd';
import {updateLoginStatus, updateRoles, updatePermissions, updateUserInfo} from "./UserSlice";
import {useDispatch} from "react-redux";
import {JPApi} from "../../api/http";


const LoginCard = (prop) => {

    // 登录注册转换
    const [isLogin, setIsLogin] = useState(true);

    const switchOnChange = (e) => {
        setIsLogin(!isLogin);
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

    const dispatch = useDispatch();

    const onConfirm = () => {
        const user = {
            username: inputUsername,
            password: inputPassword
        };
        if (isLogin) {
            JPApi("/user/login", "post", user, (resp)=>{
                // console.log(resp)
                dispatch(updateLoginStatus(true));
                dispatch(updateUserInfo(resp.data.data.user));
                dispatch(updateRoles(resp.data.data.roles));
                dispatch(updatePermissions(resp.data.data.permissions));
                prop.setModal2Visible(false)
            })
        } else {
            if (inputUsername === '' || inputPassword === '' || inputCheckPassword === '') {
                alert('请输入用户名、密码和确认密码');
            } else if (inputPassword !== inputCheckPassword) {
                alert('两次密码不一致');
            } else {
                JPApi("/user/register", "post", user, (resp)=>{
                    // console.log(resp)
                    dispatch(updateLoginStatus(true));
                    dispatch(updateUserInfo(resp.data.data.user));
                    dispatch(updateRoles(resp.data.data.roles));
                    dispatch(updatePermissions(resp.data.data.permissions));
                    prop.setModal2Visible(false);
                })
            }
        }
    }

    return (
        <>
            <Modal
                title={<LoginCardHeader isLogin={isLogin}/>}
                centered
                visible={prop.modal2Visible}
                onOk={onConfirm}
                onCancel={() => prop.setModal2Visible(false)}
            >
                <div style={{"margin": "0 30px"}}>
                    <Input type="text" placeholder='请输入账号' onChange={onInputUsernameChange}/>
                    <Input type="password" placeholder='请输入密码' onChange={onInputPasswordChange}/>
                    {isLogin ? (<></>) : (
                        <Input type='password' placeholder='请输入确认密码' onChange={onInputCheckPasswordChange}/>)}
                </div>
                <div>
                    <Switch checkedChildren="去登录" unCheckedChildren="去注册" onChange={switchOnChange}/>
                </div>
            </Modal>
        </>
    );
};

export default LoginCard;
