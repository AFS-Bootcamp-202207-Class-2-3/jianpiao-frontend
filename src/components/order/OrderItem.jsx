import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useEffect, useState } from "react";
import "./OrderItem.css";

const OrderItem = (props) => {
  const { order } = props;

  const [ticket, setTicket] = useState({});

  useEffect(() => {
    setTicket({ ...JSON.parse(order.ticket) });
  }, [order]);

  return (
    <div>
      <Card
        className="card"
        hoverable
        style={{ width: 1000, height: 250, marginBottom: 15 }}
      >
        <div className="card-left">
          <img
            alt="Not Found"
            width={125}
            height={180}
            src={ticket.posterUrl}
          />
          <div className="text" style={{ textAlign: "center" }}>
            {ticket.filmName}
          </div>
        </div>
        <div className="card-mid">
          <div className="text info">订单编号：{order.id}</div>
          <div className="text info">影院：天上人间</div>
          <div className="text info">座位：7排5座</div>
          <div className="text info">放映时间：2022.08.07</div>
          <div className="text info">总价：{ticket.totalPrice}</div>
        </div>
        <div className="card-right">
          <div className="status">已完成</div>
          <div style={{ float: "right" }}>2022.08.06 17:00:01</div>
          <div>
            <Button
              type="primary"
              shape="round"
              style={{ position: "absolute", bottom: 120, right: 25 }}
            >
              查看票据
            </Button>
          </div>
          <DeleteOutlined
            style={{
              fontSize: 20,
              float: "right",
              position: "absolute",
              bottom: 25,
              right: 25,
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default OrderItem;
