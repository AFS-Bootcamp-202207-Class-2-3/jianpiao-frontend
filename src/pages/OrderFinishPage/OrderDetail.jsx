import React from "react";
import "./OrderDetail.css";
import { Table } from "antd";
const OrderDetail = (props) => {
  const { address, contactNumber } = props.cinemaInfo;
  const { code, createTime, ticket } = props.orderInfo;
  const { filmName, hallName, seat, date, price, cinemaName } = JSON.parse(ticket);
  
  const columns = [
    {
      title: "影片",
      dataIndex: "filmName",
    },
    {
      title: "放映时间",
      dataIndex: "date",
    },
    {
      title: "影院",
      dataIndex: "cinemaName",
    },
    {
      title: "影厅",
      dataIndex: "hallName",
    },
    {
      title: "座位",
      dataIndex: "seat",
    },
    {
      title: "状态",
      dataIndex: "state",
    },
  ];

  const data = seat.map((s, index) => {
    return {
      key: index,
      filmName: filmName,
      date: date,
      cinemaName: cinemaName,
      hallName: hallName,
      seat: s,
      state: "已完成",
    };
  });

  return (
    <div className="OrderDetail">
      <div className="above">
        <span className="id">订单编号:{code}</span>
        <span className="createTime">{createTime ? createTime : ""}</span>
      </div>
      <div className="list">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ hideOnSinglePage: true }}
        ></Table>
      </div>
      <div className="bottom">
        <div className="price">总价:<span className="price-text">￥{price}</span></div>
        <div>
          <div>地址：{address}</div>
          <div>电话：{contactNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
