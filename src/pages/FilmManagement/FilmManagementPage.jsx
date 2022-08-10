import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { React, useEffect, useState } from 'react';
import { getAllFilms } from '../../api/film';

const { Column } = Table;



export default function FilmManagementPage() {

    // const [visible, setVisible] = useState(false);
    const [films, setfilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            const res = await getAllFilms();
            setfilms(res.data.films);
        };
        getFilms();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // const handleMenuClick = (e) => {
    //     if (e.key === '1' || e.key === '2') {
    //         setVisible(false);
    //     }
    // };

    // const handleVisibleChange = (flag) => {
    //     setVisible(flag);
    // };
    // const menu = (
    //     <Menu
    //         onClick={handleMenuClick}
    //         items={[
    //             {
    //                 label: '正在上映',
    //                 key: '1',
    //             },
    //             {
    //                 label: '已下架',
    //                 key: '2',
    //             },
    //         ]}

    //     />
    // );

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                添加电影
            </Button>
            <Modal title="添加电影" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="电影名称"
                        name="filmName"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="电影简介"
                        name="introduction"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="上映日期"
                        name="releasedTime"
                        // rules={[{ required: true, message: 'Please input your releasedTime!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="时长"
                        name="duration"
                        // rules={[{ required: true, message: 'Please input your duration!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="导演"
                        name="director"
                        // rules={[{ required: true, message: 'Please input your director!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="主演"
                        name="leadingActor"
                        // rules={[{ required: true, message: 'Please input your leadingActor!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="评分"
                        name="score"
                        // rules={[{ required: true, message: 'Please input your score!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            {/* <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown> */}
            <Table dataSource={films}>
                <Column title="电影名称" dataIndex="filmName" key="filmName" />
                <Column title="电影简介" dataIndex="introduction" key="introduction" />
                <Column title="上映日期" dataIndex="releasedTime" key="releasedTime" />
                <Column title="时长" dataIndex="duration" key="address" />
                <Column title="导演" dataIndex="director" key="director" />
                <Column title="演员" dataIndex="leadingActor" key="leadingActor" />
                <Column title="评分" dataIndex="score" key="score" />

                <Column
                    title="操作"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            {/* <a>Invite {record.lastName}</a>
                            <a>Delete</a> */}
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}


