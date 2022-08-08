import React, { useState } from 'react';
import "./Login.css";
import { Button, Modal } from 'antd';
import LoginContent from './LoginContent';

const Login = (props) => {

    const [modal2Visible, setModal2Visible] = useState(false);

    const checkPassword = "<div>确认密码: <input type='password' placeholder='请输入确认密码' /></div>"
    return (
        <>
            <Button type="primary" onClick={() => setModal2Visible(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title={<LoginContent isLogin={props.isLogin} />}
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
            >

                <div>
                    账号: <input type="text" placeholder='请输入账号' />
                </div>
                <div>
                    密码: <input type="password" placeholder='请输入密码' />
                </div>
                {props.isLogin ? checkPassword : ""}

            </Modal>
        </>
    );
};

export default Login;