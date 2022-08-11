import React from 'react';
import "./filmlist.css";
import { Row, Col, Rate } from 'antd';

const FilmList = (props) => {
    const films = props.films;
    const clickFilm = (id) => {
        props.clickFilm(id);
    }

    return (
        <div className='film-list'>
            <Row align='middle'>
            {
                films.map((item, index) =>
                    <Col
                        className="film-item"
                        onClick={() => clickFilm(item.id)}
                        key={item.id}
                        span={4}
                    >
                        <div>
                            <img
                                src={item.posterUrl}
                                alt={item.filmName}
                                className="film-img"
                            ></img>
                            <div className='film-info'>
                                <div className='film-name'>{item.filmName}</div>
                                <div className='film-score'>
                                    <Rate allowHalf defaultValue={item.score} />
                                    {item.score === null ? "暂无评分" : item.score + "分"}
                                </div>
                                {
                                    props.showReleasedTime ? 
                                    <div style={{color:'#999',textAlign:'center' }}>上映时间{item.releasedTime}</div> :
                                    <></>
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