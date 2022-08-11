import { Button, Form, Input, message, Select, Spin } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../api/user";
import { updateUserInfo } from "../../pages/user/UserSlice";

const PersonalInfo = (props) => {
  const { Option } = Select;
  const { userInfo } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (updatedUser) => {
    setLoading(true);
    updateUser(userInfo.id, updatedUser)
      .then((response) => {
        let storageUnserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
        storageUnserInfo = { ...storageUnserInfo, ...response.data.data };
        sessionStorage.setItem("userInfo", JSON.stringify(storageUnserInfo));
        dispatch(updateUserInfo(storageUnserInfo));
        setLoading(false);
        message.success("修改成功");
      })
      .catch(() => {
        message.error("修改失败");
        setLoading(false);
      });
  };

  return (
    <div>
      <Spin spinning={loading}>
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
          <Form.Item
            label="昵称"
            name="nickname"
            tooltip="What do you want others to call you?"
          >
            <Input />
          </Form.Item>
          <Form.Item label="头像" name="photo" valuePropName="fileList">
            <Input placeholder="请输入图片的地址" />
          </Form.Item>
          <Form.Item label="姓名" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="gender">
            <Select placeholder="select your gender">
              <Option value="男">男</Option>
              <Option value="女">女</Option>
            </Select>
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
      </Spin>
    </div>
  );
};

export default PersonalInfo;