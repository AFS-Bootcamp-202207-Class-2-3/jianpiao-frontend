
import { Button, Form, Input, Modal, Space, Table } from 'antd';
import { React, useEffect, useState } from 'react';
import { JPApi } from '../../api/http';

const { Column } = Table;

export default function HallManagementPage() {

    const [text, setText] = useState("");
    const handleChange = (event) => setText(event.target.value);

    const [halls, setHalls] = useState([]);

    useEffect(() => {
        JPApi("/admin/halls","get", {}, (res) => {

            setHalls(res.data.data)

        })
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        JPApi("/admin/halls/"+text,"get", {}, (res) => {
            setHalls([...halls, res.data.data]);
        })
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
                <Table dataSource={halls} rowKey={record => record.id}>
                    <Column title="影厅名称" dataIndex="name" key="name" />

                    <Column
                        title=""
                        key="action"
                        dataIndex="action"
                        render={(_, record) => (
                            <Space size="middle">
                            </Space>
                        )}
                    />
                </Table>
        </div>
    )
}

