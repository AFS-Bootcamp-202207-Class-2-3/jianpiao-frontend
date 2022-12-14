import { Button, Form, Input, message, Modal, Select, Space, Switch, Table } from 'antd';
import { React, useEffect, useRef, useState } from 'react';
import { JPApi } from '../../api/http';
const { Option } = Select;


export default function FilmManagementPage(props) {
    const { TextArea } = Input;
    const { Column } = Table;

    const [films, setfilms] = useState([]);
    const [btnState, setBtnState] = useState("add");
    const [storeState, setstoreState] = useState([]);
    const formRef = useRef();
    const [form] = Form.useForm()


    const getCinemaFilms = async () => {
        JPApi("admin/films/", "get", { status: "" }, resp => {
            // console.log(resp.data.data);
            setfilms(resp.data.data)
        })
    }
    useEffect(() => {
        getCinemaFilms();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (record, status) => {

        setIsModalVisible(true);
        if (status === 'update') {
            setBtnState("update")
            setstoreState(record);
            console.log(storeState);
            form.setFieldsValue(record);
        } else {
            setBtnState("add")
            form.resetFields();
        }
    };

    const handleAddFilm = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleChange = (value) => {
        JPApi("admin/films/", "get", { status: value }, resp => {
            setfilms(resp.data.data)
        })
        console.log(`selected ${value}`);
    };

    const onFinish = (values) => {
        const { filmName, introduction, posterUrl, duration, releasedTime, director, leadingActor } = values;
        const film = {
            filmName,
            introduction,
            posterUrl,
            duration,
            releasedTime,
            director,
            leadingActor,
        };
        console.log(film);
        if (btnState === "add") {
            JPApi("/admin/films/", "post", film, res => {
                if (res.data.code === 200) {
                    message.success('??????????????????', 5)
                    setIsModalVisible(false);
                    const film = res.data.data;
                    film.status = "showing";
                    setfilms([film, ...films]);
                    formRef.current.resetFields();
                    getCinemaFilms();
                }
            })
        } else {
            JPApi(`admin/films/${storeState.film_cinema_id}`, "put", film, res => {
                if (res.data.code === 200) {
                    message.success('??????????????????', 5)
                    setIsModalVisible(false);
                    getCinemaFilms();
                }
            })
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (checked, record) => {
        console.log(record.film_cinema_id)
        if (checked) {
            const film = { filmCinemaId: record.film_cinema_id, status: "showing" };
            JPApi("admin/films/update-film-cinema-status", "post", film, res => {
                if (res.data.code === 200) {
                    record.status = "showing";
                    message.success('??????????????????', 5)
                    setIsModalVisible(false);
                }
            })
        } else {
            const film = { filmCinemaId: record.film_cinema_id, status: "seal" };
            JPApi("admin/films/update-film-cinema-status", "post", film, res => {
                if (res.data.code === 200) {
                    record.status = "seal"
                    message.success('??????????????????', 5)
                    setIsModalVisible(false);
                }
            })   
        }     
    }


    return (
        <div>
            <Space>
                <Button type="primary" onClick={showModal}>
                    ????????????
                </Button>

                <Select
                    defaultValue="????????????"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                >
                    <Option value="">????????????</Option>
                    <Option value="seal">?????????</Option>
                    <Option value="showing">????????????</Option>
                </Select>
            </Space>
            <Modal title={btnState === "add" ? "????????????" : "????????????"} visible={isModalVisible} onOk={handleAddFilm} onCancel={handleCancel}
                footer={
                    []
                }
            >
                <Form
                    name="film-add"
                    ref={formRef}
                    form={form}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="????????????"
                        name="filmName"
                        rules={[{ required: true, message: 'Please input your filmName!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="??????"
                        name="duration"
                        rules={[{ required: true, message: 'Please input your duration!' }]}
                    >
                        <Input placeholder="??????" />
                    </Form.Item>
                    <Form.Item
                        label="??????"
                        name="director"
                        rules={[{ required: true, message: 'Please input your director!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="??????"
                        name="leadingActor"
                        rules={[{ required: true, message: 'Please input your leadingActor!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="????????????"
                        name="releasedTime"
                        rules={[{ required: true, message: 'Please input your releasedTime!' }]}
                    >
                        <Input placeholder="yyyy-MM-dd" />
                    </Form.Item>
                    <Form.Item
                        label="????????????"
                        name="posterUrl"
                        rules={[{ required: true, message: 'Please input your posterUrl!' }]}
                    >
                        <Input placeholder="????????????" />
                    </Form.Item>

                    <Form.Item
                        label="????????????"
                        name="introduction"
                        rules={[{ required: true, message: 'Please input your introduction!' }]}
                    >
                        <TextArea rows={3} placeholder="????????????" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{ float: "right" }} >
                        {btnState === "add" ? "??????" : "??????"}
                    </Button>
                </Form>
            </Modal>

            <Table dataSource={films} rowKey={record => record.film_cinema_id + record.id} >
                <Column title="????????????" dataIndex="filmName" key="filmName" />
                <Column title="????????????" dataIndex="releasedTime" key="releasedTime" />
                <Column title="??????" dataIndex="duration" key="duration" />
                <Column title="??????" dataIndex="director" key="director" />
                <Column title="??????" dataIndex="leadingActor" key="leadingActor" />
                <Column title="????????????" dataIndex="introduction" key="introduction" />
                {/* <Column title="????????????" dataIndex="posterUrl" key="posterUrl" /> */}

                <Column
                    title="??????"
                    key="action"
                    render={(_, record) => (
                        <Space size="large">
                            <Button type="primary" onClick={() => showModal(record, "update")}>??????</Button>
                            <Switch checkedChildren="??????" unCheckedChildren="??????" defaultChecked={record.status === "showing"} onChange={(checked) => onChange(checked, record)} />
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

