
import { Button, Form, message, Input } from 'antd';
import { React, useEffect, useState } from 'react';
import { getCinema } from '../../api/cinemaManagement';
import { updateCinema } from '../../api/cinemaManagement';

export default function CinemaManagementPage() {

    const onFinish = (values) => {
        console.log('Success:', values);

        updateCinema(cinema.id, values).then((response) => {
            message.success("修改成功");
        })
            .catch(() => {
                message.error("修改失败");
            });
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

            <div style={{ width: '100%', display: "inline-block" }} >

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
                                message: '影院地址不为空',
                            },
                        ]}
                    >
                        <Input placeholder={cinema.address} />
                    </Form.Item>

                    <Form.Item
                        label="联系电话"
                        name="contactNumber"
                        rules={[
                            {
                                required: true,
                                message: '联系电话不可为空',
                            },
                        ]}
                    >
                        <Input placeholder={cinema.contactNumber} />
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

