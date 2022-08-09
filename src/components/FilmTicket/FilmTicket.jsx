import React from 'react';
import './FilmTicket.css';
import QRCode from 'qrcode.react';

const FilmTicket = (props) => {
    const {filmName, hall, seat, date, price} = props.ticketInfo;
    return (
        <div className="filmTicket">
            <div className="img"><img src={require('../../assets/ticket-logo.png')} alt="ticket-logo"></img></div>
            {filmName ? <div className="item filmName">影片 : {filmName}</div> : ""}
            {hall ? <div className="item">放映厅: {hall}</div> : ""}
            {seat ? <div className="item">座位 : {seat}</div> : ""}
            {date ? <div className="item">日期 : {date}</div> : ""}
            {price ? <div className="item">票价 : ￥{price} </div> : ""}
            <div className="qrCode"><QRCode value={JSON.stringify(props.ticketInfo)} /></div>
        </div>
    );
}

export default FilmTicket;