import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllOrdersByUserId } from "../../api/order";
import OrderList from "../../components/order/OrderList";

const PersonalCenterPage = () => {
  const { TabPane } = Tabs;
  const [orders, setOrders] = useState([]);
  const { state } = useLocation();

  const userInfo = useSelector((state) => {
    return state.user.userInfo;
  });

  let activedKey = state.activedKey;

  useEffect(() => {
    onChange(state.activedKey);
    // eslint-disable-next-line
  }, [state]);

  const getOrderById = (userId) => {
    getAllOrdersByUserId(userId).then((response) => {
      setOrders([...response.data.data]);
    });
  };

  const onChange = (key) => {
    const userId = userInfo.id;
    if (key === "2") {
      getOrderById(userId);
    }
  };

  return (
    <div>
      <span style={{ fontSize: 28 }}>个人中心</span>
      <Tabs defaultActiveKey={activedKey} onChange={onChange}>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              个人信息
            </span>
          }
          key="1"
        >
          暂未录入信息
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
