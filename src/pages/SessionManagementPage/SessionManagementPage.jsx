import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import { JPApi } from "../../api/http";

const SessionManagementPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("jpUserInfo"));
  const [data, setData] = useState([]);
  const [cinema, setCinema] = useState({});
  const [films, setFilms] = useState([]);
  const [halls, setHalls] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    JPApi(`/user/${userInfo.id}/sessions`, "get", {}, (response) => {
      setData([...response.data.data]);
    });
    JPApi("admin/cinema", "get", {}, (response) => {
      setCinema({ ...response.data.data });
    });
    // eslint-disable-next-line
  }, []);

  const getFilmsByCinemaId = () => {
    JPApi(`cinemas/${cinema.id}/showingFilms`, "get", {}, (response) => {
      setFilms([...response.data.data]);
    });
  };

  const getHallByCinemaId = () => {
    JPApi(`admin/halls`, "get", {}, (response) => {
      setHalls([...response.data.data]);
    });
  };

  const deleteSession = (sessionId) => {
    JPApi(`sessions/${sessionId}`, "delete", {}, () => {
      message.success("删除成功！");
      setData([...data.filter((session) => session.id !== sessionId)]);
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
    getFilmsByCinemaId();
    getHallByCinemaId();
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addSession = (session) => {
    JPApi(
      "sessions",
      "post",
      {
        cinemaId: cinema.id,
        filmId: session.film,
        hallId: session.hall,
        date: session.date,
        startTime: session.startTime,
        endTime: session.endTime,
        price: session.price,
      },
      (response) => {
        message.success("新增成功！");
        setData([...data, response.data.data]);
      }
    );
  };

  const columns = [
    {
      title: "影院",
      dataIndex: "cinemaName",
    },
    {
      title: "影厅",
      dataIndex: "hallName",
    },
    {
      title: "电影",
      dataIndex: "filmName",
    },
    {
      title: "放映时间",
      dataIndex: "startTime",
    },
    {
      title: "结束时间",
      dataIndex: "endTime",
    },
    {
      title: "价格",
      dataIndex: "price",
    },
    {
      title: "操作",
      dataIndex: "",
      key: "delete",
      render: (record) => (
        <Button type="primary" danger onClick={() => deleteSession(record.id)}>
          删除
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={showModal}>
          新增
        </Button>
        <Modal
          title="新增场次"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 15,
            }}
            onFinish={addSession}
            form={form}
          >
            <Form.Item name="film" label="电影">
              <Select>
                {films.map((film) => (
                  <Option key={film.id} value={film.id}>
                    {film.filmName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="hall" label="影厅">
              <Select>
                {halls.map((hall) => (
                  <Option key={hall.id} value={hall.id}>
                    {hall.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="date" label="放映日期">
              <Input />
            </Form.Item>
            <Form.Item name="startTime" label="开始时间">
              <Input />
            </Form.Item>
            <Form.Item name="endTime" label="结束时间">
              <Input />
            </Form.Item>
            <Form.Item name="price" label="价格">
              <InputNumber
                prefix="￥"
                min={0}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default SessionManagementPage;
