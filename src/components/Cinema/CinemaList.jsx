import React from "react";
import './CinemaList.css';
import CinemaItem from "./CinemaItem";

const CinemaList = (props) => {
    return (<div className='CinemaList'>
        <div className="title">影院列表</div>
        {props.cinemaList.map((cinema) => <CinemaItem key={cinema.id} cinema={cinema} />)}
    </div>);
}

export default CinemaList;