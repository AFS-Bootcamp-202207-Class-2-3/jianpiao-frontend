import React from "react";
import './CinemaList.css';
import CinemaItem from "./CinemaItem";

const CinemaList = (props) => {
    const toBuyTicket = (id) => {
        props.toBuyTicket(id)
    }

    return (<div className='CinemaList'>
        <div className="title">影院列表</div>
        {props.cinemaList.map((cinema) => <CinemaItem key={cinema.id} cinema={cinema} clickButton={toBuyTicket}/>)}
    </div>);
}

export default CinemaList;