import React from "react";
import FilmTicket from "../../components/FilmTicket/FilmTicket";
import OrderDetail from "./OrderDetail";
import "./OrderFinishPage.css";

const OrderFinishPage = () => {
  const ticketInfo = {
    filmName: "《明日战纪》",
    hall: "1号放映厅",
    seat: ["1排1坐", "1排2坐"],
    date: "2022.08.10",
    price: 35,
  };
  const orderInfo = {
    id: "1121212121",
    createTime: "2022.08.07 10:00:00",
    cinema: "xx影院",
    state: "完成",
    ticketInfo: ticketInfo,
  };
  const cinemaInfo = {
    address: "广东省珠海市香洲区唐家湾镇...",
    phone: "0759-00000000",
  };
  return (
    <div className="OrderFinishPage">
      <FilmTicket ticketInfo={ticketInfo} />
      <OrderDetail orderInfo={orderInfo} cinemaInfo={cinemaInfo} />
    </div>
  );
};

export default OrderFinishPage;
