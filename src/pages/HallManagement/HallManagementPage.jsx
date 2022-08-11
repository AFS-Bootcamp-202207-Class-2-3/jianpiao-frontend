
import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { React, useEffect, useState } from 'react';
import { getAllHallsByCinemaId } from '../../api/hall';
import { addHall } from '../../api/hall';

const { Column } = Table;

export default function HallManagementPage() {

    const [text, setText] = useState("");
    const handleChange = (event) => setText(event.target.value);

    const [halls, setHalls] = useState([]);

    useEffect(() => {
        const getHalls = async () => {
            const res = await getAllHallsByCinemaId();
            setHalls(res.data.data);
        };
        getHalls();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        addHall(text).then((response) => {
            setHalls([...halls, response.data.data])
        });

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
                <Button type="primary" onClick={showModal}>
                    添加影厅
                </Button>
                <div style={{ width: 700, display: "inline-block" }} ></div>
                <Modal title="添加影厅" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="影厅名称"
                            name="name"
                        >
                            <Input onChange={handleChange} />
                        </Form.Item>

                    </Form>
                </Modal>
                <Table dataSource={halls}>
                    <Column title="影厅名称" dataIndex="name" key="name" />

                    <Column
                        title=""
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                            </Space>
                        )}
                    />
                </Table>
        </div>
    )
}

