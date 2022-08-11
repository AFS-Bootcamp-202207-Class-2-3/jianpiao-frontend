import {
  Button,
  DatePicker,
  Form,
  InputNumber,
  message,
  Modal,
  Select,
  Space,
  Table,
  TimePicker,
} from "antd";
import React, { useEffect, useState } from "react";
import { JPApi } from "../../api/http";

const SessionManagementPage = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const [form] = Form.useForm();
  useEffect(() => {
    JPApi(`/user/${userInfo.id}/sessions`, "get", {}, (response) => {
      setData([...response.data.data]);
    });
    // eslint-disable-next-line
  }, []);

  const deleteSession = (sessionId) => {
    JPApi(`sessions/${sessionId}`, "delete", {}, () => {
      message.success("删除成功！");
      setData([...data.filter((session) => session.id !== sessionId)]);
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (session) => {
    debugger;
    console.log(session);
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
            onFinish={handleSubmit}
            form={form}
          >
            <Form.Item name="film" label="电影">
              <Select>
                <Option value="demo">1</Option>
              </Select>
            </Form.Item>
            <Form.Item name="cinema" label="影厅">
              <Select>
                <Option value="demo">1</Option>
              </Select>
            </Form.Item>
            <Form.Item name="date" label="放映日期">
              <DatePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="startTime" label="开始时间">
              <TimePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item name="endTime" label="结束时间">
              <TimePicker
                style={{
                  width: "100%",
                }}
              />
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default SessionManagementPage;
