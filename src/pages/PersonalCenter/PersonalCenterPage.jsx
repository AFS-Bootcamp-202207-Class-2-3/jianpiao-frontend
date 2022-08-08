import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import OrderList from "../../components/order/OrderList";
const { TabPane } = Tabs;

const PersonalCenterPage = () => {
  return (
    <div>
      <span style={{ fontSize: 28 }}>个人中心</span>
      <Tabs defaultActiveKey="1">
        <TabPane tab={
        <span>
          <UserOutlined />
          个人信息
        </span>
      } key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab={
        <span>
          <ContainerOutlined/>
          我的订单
        </span>
      } key="2">
          <OrderList />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PersonalCenterPage;
