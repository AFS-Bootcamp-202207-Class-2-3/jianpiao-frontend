import React from "react";
import "./OrderDetail.css";
import { Table } from "antd";
const { Column } = Table;
const OrderDetail = (props) => {
  const { address, phone } = props.cinemaInfo;
  const { id, createTime, cinema, state, ticketInfo } = props.orderInfo;
  const { filmName, hall, seat, date, price } = ticketInfo;

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
      dataIndex: "cinema",
    },
    {
      title: "影厅",
      dataIndex: "hall",
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

  const data = seat.map((s) => {
    return {
      filmName: filmName,
      date: date,
      cinema: cinema,
      hall: hall,
      seat: s,
      state: state,
    };
  });

  return (
    <div className="OrderDetail">
      <div className="above">
        <span className="id">订单编号:{id}</span>
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
        <div className="price">总价:￥{price}</div>
        <div>
          <div>地址:{address}</div>
          <div>电话:{phone}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
