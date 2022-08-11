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

    useEffect(() => {
        const getCinemaFilms = async () => {
            JPApi("admin/films/", "get", { status: "" }, resp => {
                // console.log(resp.data.data);
                setfilms(resp.data.data)
            })
        }
        getCinemaFilms();
    }, []);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = (record, status) => {

        setIsModalVisible(true);
        if (status === 'update') {
            setBtnState("update")
            setstoreState(record);
            // console.log(storeState);
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
                    message.success('添加电影成功', 5)
                    setIsModalVisible(false);
                    const film = res.data.data;
                    film.status = "showing";
                    setfilms([film, ...films]);
                    formRef.current.resetFields();
                }
            })
        } else {
            JPApi(`admin/films/${storeState.film_cinema_id}`, "put", film, res => {
                if (res.data.code === 200) {
                    message.success('修改电影成功', 5)
                    setIsModalVisible(false);
                    setfilms(films);
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
                    message.success('电影成功上架', 5)
                    setIsModalVisible(false);
                }
            })
        } else {
            const film = { filmCinemaId: record.film_cinema_id, status: "seal" };
            JPApi("admin/films/update-film-cinema-status", "post", film, res => {
                if (res.data.code === 200) {
                    record.status = "seal"
                    message.success('电影成功下架', 5)
                    setIsModalVisible(false);
                }
            })
        }
   
        // window.location.reload();
    }


    return (
        <div>
            <Space>
                <Button type="primary" onClick={showModal}>
                    添加电影
                </Button>

                <Select
                    defaultValue="全部影片"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                >
                    <Option value="">全部影片</Option>
                    <Option value="seal">已下架</Option>
                    <Option value="showing">正在上映</Option>
                </Select>
            </Space>
            <Modal title={btnState === "add" ? "添加电影" : "修改电影"} visible={isModalVisible} onOk={handleAddFilm} onCancel={handleCancel}
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
                        label="电影名称"
                        name="filmName"
                        rules={[{ required: true, message: 'Please input your filmName!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="时长"
                        name="duration"
                        rules={[{ required: true, message: 'Please input your duration!' }]}
                    >
                        <Input placeholder="分钟" />
                    </Form.Item>
                    <Form.Item
                        label="导演"
                        name="director"
                        rules={[{ required: true, message: 'Please input your director!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="主演"
                        name="leadingActor"
                        rules={[{ required: true, message: 'Please input your leadingActor!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="上映日期"
                        name="releasedTime"
                        rules={[{ required: true, message: 'Please input your releasedTime!' }]}
                    >
                        <Input placeholder="yyyy-MM-dd" />
                    </Form.Item>
                    <Form.Item
                        label="电影海报"
                        name="posterUrl"
                        rules={[{ required: true, message: 'Please input your posterUrl!' }]}
                    >
                        <Input placeholder="海报链接" />
                    </Form.Item>

                    <Form.Item
                        label="电影简介"
                        name="introduction"
                        rules={[{ required: true, message: 'Please input your introduction!' }]}
                    >
                        <TextArea rows={3} placeholder="电影简介" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" style={{ float: "right" }} >
                        {btnState === "add" ? "添加" : "修改"}
                    </Button>
                </Form>
            </Modal>

            <Table dataSource={films} rowKey={record => record.film_cinema_id + record.id}>
                <Column title="电影名称" dataIndex="filmName" key="filmName" />
                <Column title="上映日期" dataIndex="releasedTime" key="releasedTime" />
                <Column title="时长" dataIndex="duration" key="duration" />
                <Column title="导演" dataIndex="director" key="director" />
                <Column title="演员" dataIndex="leadingActor" key="leadingActor" />
                <Column title="电影简介" dataIndex="introduction" key="introduction" />
                {/* <Column title="电影海报" dataIndex="posterUrl" key="posterUrl" /> */}
                {/* <Column title="状态" dataIndex="status" key="status" render={(text) => { return text === "showing" ? <span>上映中</span> : <span>已下架</span> }} /> */}

                <Column
                    title="操作"
                    key="action"
                    render={(_, record) => (
                        <Space size="large">
                            <Button type="primary" onClick={() => showModal(record, "update")}>修改</Button>
                            {/* <Button type="primary" onClick={() => onChange(record.status === "showing", record)}>{record.status === "showing" ? '下架' : '上架'}</Button> */}
                            <Switch checkedChildren="上架" unCheckedChildren="下架" defaultChecked={record.status === "showing"} onChange={(checked) => onChange(checked, record)} />
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

