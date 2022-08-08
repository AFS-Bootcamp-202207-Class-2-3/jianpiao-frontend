import { DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import "./OrderItem.css";

const OrderItem = () => {
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
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className="text" style={{ textAlign: "center" }}>
            明日战记
          </div>
        </div>
        <div style={{ float: "left", height: 200, marginLeft: 100 }}>
          <div className="text info">订单编号：21516846846465</div>
          <div className="text info">影院：天上人间</div>
          <div className="text info">座位：7排五座</div>
          <div className="text info">放映时间：2022.08.07</div>
          <div className="text info">总价：60</div>
        </div>
        <div style={{ width: 300, height: 150, float: "right" }}>
          <div
            style={{
              float: "left",
              marginTop: 75,
              fontSize:20
            }}
          >
            已完成
          </div>
          <div style={{ float: "right" }}>2022.08.06 17:00:01</div>
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
