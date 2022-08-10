import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import React from "react";

const PersonalInfo = (props) => {
  const { userInfo } = props;
  console.log(userInfo);

  const onFormLayoutChange = () => {};

  return (
    <div>
      <Form
        labelCol={{
          span: 1,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="用户名">
          <Input disabled value={userInfo.username} />
        </Form.Item>
        <Form.Item label="新密码">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="昵称">
          <Input value={userInfo.nickname}/>
        </Form.Item>
        <Form.Item label="头像" valuePropName="fileList">
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
        <Form.Item label="姓名">
          <Input value={userInfo.name}/>
        </Form.Item>
        <Form.Item label="性别">
          <Input value={userInfo.gender}/>
        </Form.Item>
        <Form.Item label="电话">
          <Input value={userInfo.tel}/>
        </Form.Item>
        <Form.Item label="邮箱">
          <Input type="email" value={userInfo.email}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">修改</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfo;
