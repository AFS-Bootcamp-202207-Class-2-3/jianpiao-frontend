import React from "react";
import FilmTicket from "../../components/FilmTicket/FilmTicket";
import OrderDetail from "./OrderDetail";
import "./OrderFinishPage.css";
import { useLocation } from "react-router-dom";

const OrderFinishPage = () => {
  const {
    state: { orderInfo },
  } = useLocation();
  const ticketInfo = JSON.parse(orderInfo.ticket);

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
