import React, { useState } from 'react';
import "./Login.css";
import { Button, Modal } from 'antd';

const Login = () => {

    const [modal2Visible, setModal2Visible] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setModal2Visible(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title="登录"
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};

export default Login;