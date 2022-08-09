import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllOrdersByUserId } from "../../api/order";
import OrderList from "../../components/order/OrderList";

const PersonalCenterPage = () => {
  const { TabPane } = Tabs;
  const [orders, setOrders] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    onChange(state.activedKey);
  }, [state]);

  const getOrderById = (userId) => {
    getAllOrdersByUserId(userId).then((response) => {
      setOrders([...response.data.data]);
    });
  };

  const onChange = (key) => {
    const userId = "1";
    if (key === "2") {
      getOrderById(userId);
    }
  };

  return (
    <div>
      <span style={{ fontSize: 28 }}>个人中心</span>
      <Tabs defaultActiveKey={state.activedKey} onChange={onChange}>
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
          <OrderList orders={orders} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PersonalCenterPage;
