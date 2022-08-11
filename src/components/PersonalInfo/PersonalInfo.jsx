import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../api/user";
import { updateUserInfo } from "../../pages/user/UserSlice";

const PersonalInfo = (props) => {
  const { userInfo } = props;
  const dispatch = useDispatch();

  const handleSubmit = (updatedUser) => {
    updateUser(userInfo.id, updatedUser).then((response) => {
      let storageUnserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      storageUnserInfo = { ...storageUnserInfo, ...response.data.data };
      sessionStorage.setItem("userInfo", JSON.stringify(storageUnserInfo));
      dispatch(updateUserInfo(storageUnserInfo));
    });
  };

  return (
    <div>
      <Form
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        onFinish={handleSubmit}
        initialValues={{ ...userInfo }}
      >
        <Form.Item label="用户名" name="username">
          <Input disabled />
        </Form.Item>
        <Form.Item label="新密码" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input />
        </Form.Item>
        <Form.Item label="头像" name="photo" valuePropName="fileList">
          <Upload listType="picture-card" showUploadList={false}>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                上传
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="性别" name="gender">
          <Input />
        </Form.Item>
        <Form.Item label="电话" name="tel">
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 10 }}>
          <Button type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfo;
