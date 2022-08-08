import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useState } from "react";
import { getAllOrdersByUserId } from "../../api/order";
import OrderList from "../../components/order/OrderList";

const PersonalCenterPage = () => {
  const { TabPane } = Tabs;
  const [orders, setOrders] = useState([]);

  const getOrderById = () => {
    getAllOrdersByUserId().then((response) => {
      setOrders([...response.data]);
    });
  };

  const onChange = (key)=>{
    if(key === "2") {
      getOrderById();
    }
  }

  return (
    <div>
      <span style={{ fontSize: 28 }}>个人中心</span>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              个人信息
            </span>
          }
          key="1"
        >
          个人信息
        </TabPane>
        <TabPane
          tab={
            <span>
              <ContainerOutlined />
              我的订单
            </span>
          }
          key="2"
        >
          <OrderList orders={orders}/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PersonalCenterPage;
