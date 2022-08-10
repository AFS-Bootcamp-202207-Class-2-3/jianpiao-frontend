import React, { useEffect } from "react";
import "./PickSeat.css";
import seat from "../../assets/seat.png";
import sold from "../../assets/sold.png";
import seat_checked from "../../assets/seat-checked.png";
import { useState } from "react";
import { getSeats } from "../../api/pickSeat";
import { Button } from "antd";
import { insertOrder } from "../../api/order";
import { useNavigate } from "react-router-dom";

const PickSeat = () => {
  let m = 7;
  const [price, setPrice] = useState(0);
  const [seatList, setSeatList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [seatChosen, setSeatChosen] = useState([]);
  // eslint-disable-next-line
  const [size, setSize] = useState("large");
  const navigate = useNavigate();

  useEffect(() => {
    getSeats(1).then((res) => {
      let temp_seatList = [];
      for (var i = 0; i < m; i++) {
        temp_seatList[i] = [];
      }
      let site = res.data.data.site;
      let index = 0;
      for (let idx = 0; idx < site.length; ++idx) {
        if (idx > 0 && idx % 11 === 0) {
          index++;
        }
        temp_seatList[index].push(site[idx]);
      }
      setPrice(res.data.data.price);
      setSeatList(temp_seatList);
    });
    // eslint-disable-next-line
  }, []);

  const clickSeat = (e) => {
    let imgStatus = parseInt(e.target.getAttribute("imgstatus"));
    let x = e.target.getAttribute("x");
    let y = e.target.getAttribute("y");
    let tempArray = [...seatChosen];

    if (imgStatus === 1) {
      e.target.setAttribute("imgstatus", 3);
      e.target.src = seat_checked;
      tempArray.push({ x: x, y: y });
      setTotalPrice(totalPrice + price);
    } else if (imgStatus === 3) {
      e.target.setAttribute("imgstatus", 1);
      e.target.src = seat;
      setTotalPrice(totalPrice - price);
      tempArray = tempArray.filter((coordinate, index) => {
        if (coordinate.x === x && coordinate.y === y) {
          return null;
        }
        return coordinate;
      });
    } else {
      return;
    }
    setSeatChosen(tempArray);
  };

  const bookClick = (e) => {
    let seatIndexes = [];
    seatChosen.map((coordinate, index) => {
      let x = parseInt(coordinate.x);
      let y = parseInt(coordinate.y);
      seatIndexes.push((x - 1) * 11 + (y - 1));
      return null;
    });
    const params = {
      sessionId: "1",
      seatIndexes: seatIndexes,
    };
    if (seatIndexes.length === 0) {
      alert("请选择座位");
      return;
    }

    insertOrder(params)
      .then((res) => {
        console.log(res);
        navigate("/order-finish", {
          replace: false,
          state: { orderInfo: res.data.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pickSeat_container">
      <div className="film_message">
        <img src={require("../../assets/film2.jpg")} alt="我图呢" />
        <div>《独 行 月 球》</div>
        <div>时长： 120分钟</div>
        <div>影院： xx影院</div>
        <div>影厅： 2号厅</div>
        <div>放映时间： 17:00 - 19:00</div>
        <div>单价：＄35</div>
      </div>
      <div className="pickSeat_right">
        <div className="seat">
          <div className="seat_head">
            <div>
              <img src={require("../../assets/seat.png")} alt="我图呢" />{" "}
              可选座位
            </div>
            <div>
              <img src={require("../../assets/sold.png")} alt="我图呢" />{" "}
              已售座位
            </div>
            <div>
              <img
                src={require("../../assets/seat-checked.png")}
                alt="我图呢"
              />{" "}
              已选座位
            </div>
          </div>
          <div className="screen">
            <div>
              <img src={require("../../assets/screen.png")} alt="我图呢" />
              <div>银幕中央</div>
            </div>
          </div>
          <div className="seat_list">
            {seatList.map((oneLine, index1) => (
              <div className="seat_line" key={index1}>
                <div>
                  <span>{index1 + 1}</span>
                  {oneLine.map((s, index2) => (
                    <img
                      key={index2}
                      src={s === "1" ? seat : s === "2" ? sold : seat_checked}
                      imgstatus={s}
                      x={index1 + 1}
                      y={index2 + 1}
                      onClick={clickSeat}
                      alt="我图呢"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="seat_footer">
          <div className="seat_footer_msg">
            <div>
              已选择座位：{" "}
              {seatChosen.map((coordinate, index) => (
                <span key={index}>
                  {coordinate.x}排{coordinate.y}座 &nbsp;
                </span>
              ))}
            </div>
            <div>
              总价：＄
              <span style={{ fontSize: "20px", lineHeight: "20px" }}>
                {totalPrice}
              </span>
            </div>
          </div>
          <div className="book">
            <Button
              type="primary"
              shape="round"
              size={size}
              onClick={bookClick}
            >
              确认选座
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickSeat;
