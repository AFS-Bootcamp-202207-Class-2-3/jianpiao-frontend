import React from "react";
import FilmTicket from "../../components/FilmTicket/FilmTicket";
import OrderDetail from "./OrderDetail";
import "./OrderFinishPage.css";
import { useLocation } from "react-router-dom";

const OrderFinishPage = () => {
  const {
    state: { orderInfo, cinemaInfo },
  } = useLocation();
  const ticketInfo = JSON.parse(orderInfo.ticket);

  return (
    <div className="OrderFinishPage">
      <FilmTicket ticketInfo={ticketInfo} />
      <OrderDetail orderInfo={orderInfo} cinemaInfo={cinemaInfo} />
    </div>
  );
};

export default OrderFinishPage;
