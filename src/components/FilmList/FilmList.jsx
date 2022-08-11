import React from 'react';
import "./filmlist.css";
import { useState } from "react";
import { Row, Col, Rate } from 'antd';

const FilmList = (props) => {
    const films = props.films;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const clickFilm = (id) => {
        props.clickFilm(id);
    }
    
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize.bind(this));

    return (
        <div className='film-list'>
            <Row align='middle'>
            {
                films.map((item, index) =>
                    <Col
                        className="film-item"
                        key={item.id}
                        span={windowWidth > 1600 ? 4 : 6}
                    >
                        <div>
                            <img
                                src={item.posterUrl}
                                alt={item.filmName}
                                className="film-img"
                                onClick={() => clickFilm(item.id)}
                            ></img>
                            <div className='film-info'>
                                <div className='film-name'>{item.filmName}</div>
                                <div className='film-score'>
                                    {props.isNotShowing ? <></> : <Rate allowHalf defaultValue={item.score} disabled/>}
                                    {item.score === null ? "暂无评分" : item.score + "分"}
                                </div>
                                {
                                    props.isNotShowing ? 
                                     <div style={{color:'#999',textAlign:'center' }}>上映时间{item.releasedTime}</div> : <></>

                                }
                            </div>
                        </div>
                    </Col>
                    
                )
            }
            </Row>
    </div>
    );
}


export default FilmList;