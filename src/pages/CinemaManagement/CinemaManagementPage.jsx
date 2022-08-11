
import { Button, Form, Input } from 'antd';
import { React, useEffect, useState } from 'react';
import { getCinema } from '../../api/cinemaManagement';

export default function CinemaManagementPage() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [cinema, setHalls] = useState([]);

    useEffect(() => {
        const getHalls = async () => {
            const res = await getCinema();
            setHalls(res.data.data);
        };
        getHalls();
    }, []);

    return (
        <div>
            <div style={{ width: 256, float: "left" }} > </div>

            <div style={{ alignItems: "center", width: 356, display: "inline-block" }} > </div>

            <div style={{ width: 700, display: "inline-block" }} >

                <h1>
                    影院名称：
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                        { cinema.cinemaName }
                    </span>
                </h1>

                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 12,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="影院地址"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your address!',
                            },
                        ]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item
                        label="联系电话"
                        name="contactNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your contactNumber!',
                            },
                        ]}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>

            </div>

        </div>
    )
}

