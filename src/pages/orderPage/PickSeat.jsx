import React from 'react';
import "./PickSeat.css";
import seat from "../../assets/seat.png";
import sold from "../../assets/sold.png";
import seat_checked from "../../assets/seat-checked.png";
import { useState } from 'react';

const PickSeat = () => {

    const seatList = Array(7).fill(Array(11).fill(1));
    const [price, setPrice] = useState(0);
    const [seatChosen, setSeatChosen] = useState([]);


    const clickSeat = (e) => {
        let imgStatus = parseInt(e.target.getAttribute("imgstatus"));
        let x = e.target.getAttribute("x");
        let y = e.target.getAttribute("y");
        let tempArray = [...seatChosen];

        if (imgStatus === 1) {
            e.target.setAttribute("imgstatus", 2);
            e.target.src = seat_checked;
            tempArray.push({ "x": x, "y": y })
        } else if (imgStatus === 2) {
            e.target.setAttribute("imgstatus", 1);
            e.target.src = seat;
            tempArray = tempArray.filter((coordinate, index) => {
                if (coordinate.x === x && coordinate.y === y) {
                    return null;
                }
                return coordinate;
            })
        } else {
            return;
        }
        setSeatChosen(tempArray);

    }

    return (
        <div className='pickSeat_container'>
            <div className='film_message'>
                <img src={require('../../assets/film2.jpg')} alt="我图呢" />
                <div>《独 行 月 球》</div>
                <div>时长： 120分钟</div>
                <div>影院： xx影院</div>
                <div>影厅： 2号厅</div>
                <div>放映时间： 17:00 - 19:00</div>
                <div>单价：＄35</div>
            </div>
            <div className='pickSeat_right'>
                <div className='seat'>
                    <div className='seat_head'>
                        <div><img src={require('../../assets/seat.png')} alt="我图呢" /> 可选座位</div>
                        <div><img src={require('../../assets/sold.png')} alt="我图呢" /> 已售座位</div>
                        <div><img src={require('../../assets/seat-checked.png')} alt="我图呢" /> 已选座位</div>
                    </div>
                    <div className='screen'>
                        <div>
                            <img src={require('../../assets/screen.png')} alt="我图呢" />
                            <div>银幕中央</div>
                        </div>
                    </div>
                    <div className='seat_list' >
                        {seatList.map(
                            (oneLine, index1) =>
                                <div className='seat_line' key={index1}>
                                    <div><span>{index1 + 1}</span>{oneLine.map((s, index2) => <img key={index2} src={s === 1 ? seat : s === 2 ? seatChosen : sold} imgstatus={s} x={index1 + 1} y={index2 + 1} onClick={clickSeat} alt="我图呢" />)}</div>
                                </div>
                        )}
                    </div>

                </div>
                <div className='seat_footer'>
                    <div>已选择座位： {seatChosen.map((coordinate, index) => <span>{coordinate.x}排{coordinate.y}座 &nbsp;</span>)}</div>
                    <div>总价：＄{price}</div>
                </div>
            </div>
        </div >
    );
};

export default PickSeat;