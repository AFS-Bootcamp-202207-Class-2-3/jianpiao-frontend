import React from "react";
import "./FilmTicket.css";
import QRCode from "qrcode.react";

const FilmTicket = (props) => {
  const { filmName, hallName, seat, date, totalPrice } = props.ticketInfo;
  return (
    <div className="filmTicket">
      <div className="img">
        <img
          src={require("../../assets/ticket-logo.png")}
          alt="ticket-logo"
        ></img>
      </div>
      {filmName ? <div className="item filmName">影片 : {filmName}</div> : ""}
      {hallName ? <div className="item">放映厅: {hallName}</div> : ""}
      {seat ? <div className="item">座位 : {seat.join(" ")}</div> : ""}
      {date ? <div className="item">日期 : {date}</div> : ""}
      {totalPrice ? <div className="item">票价 : ￥{totalPrice} </div> : ""}
      <div className="qrCode">
        <QRCode value={JSON.stringify(props.ticketInfo)} />
      </div>
    </div>
  );
};

export default FilmTicket;
