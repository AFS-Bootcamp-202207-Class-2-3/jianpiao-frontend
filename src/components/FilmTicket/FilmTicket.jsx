import React from 'react';
import './FilmTicket.css';
import QRCode from 'qrcode.react';

const FilmTicket = (props) => {
    return (
        <div className="filmTicket">
            <div className="img"><img src={require('../../assets/ticket-logo.png')} alt="ticket-logo"></img></div>
            {props.filmName ? <div className="item filmName">影片 : {props.filmName}</div> : ""}
            {props.hall ? <div className="item">放映厅: {props.hall}</div> : ""}
            {props.seat ? <div className="item">座位 : {props.seat}</div> : ""}
            {props.date ? <div className="item">日期 : {props.date}</div> : ""}
            {props.price ? <div className="item">票价 : ￥{props.price} </div> : ""}
            <div className="qrCode"><QRCode value={JSON.stringify(props)} /></div>
        </div>
    );
}

export default FilmTicket;