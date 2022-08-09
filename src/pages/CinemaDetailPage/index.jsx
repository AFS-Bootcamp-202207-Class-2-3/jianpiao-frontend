import React from 'react';
import { useState, useEffect } from 'react';
import CinemaHeader from './CinemaHeader';
import FilmsList from './FilmsList';
import { Col, Row } from "antd";
import "./cinemaDetailPage.css";
import film1 from '../../assets/film1.jpg';
import film2 from '../../assets/film2.jpg';

const CinemaDetailPage = () => {
    const [currentFilm, setCurrentFilm] = useState({});
    const [films] = useState( [
        {
            filmName: "明日战记",
            director: "谁",
            leadingActor: "古天乐",
            duration: 90,
            posterUrl: film1,
            introduction: "高分火爆热映中！古天乐亲任总监制！华语科幻年度震撼巨献！机甲大战外星生物，硬核守护家园！ 未来世界地球污染严重，一枚外太空陨石突如其来，带着外星生命体潘朵拉降临人间，袭击人类。空战部队泰来（古天乐饰）与队长郑重生（刘青云饰）前往执行拯救地球的任务，却遭遇前所未见的怪物袭击，机甲军团与外星异形生物展开超燃大战，千难万难誓死捍卫家园，上演了一场酣畅淋漓的激爽对决。然而，在牺牲队友身上意外发现的神秘信号，让泰来开始思考真相到底是什么，难道真正致命的并不是眼前的一切，而是自己身后迷雾之中一场巨大的阴谋…"
        },
        {
            filmName: "独行月球",
            director: "谁",
            leadingActor: "沈腾",
            duration: 90,
            posterUrl: film2,
            introduction: "1234353214123132134141"
        },
        {
            filmName: "侦探大战",
            director: "谁",
            leadingActor: "刘青云",
            duration: 90,
            posterUrl: film1,
            introduction: "侦探侦探侦探侦探侦探侦探侦探侦探侦探侦探"
        },
        {
            filmName: "猪猪侠",
            director: "谁",
            leadingActor: "猪",
            duration: 90,
            posterUrl: film2,
            introduction: "猪猪猪猪猪猪猪猪猪猪"
        }
    ])

    const cinemaInfo = {
        cinemaName: "万达影院",
        address: "广东省珠海市香洲区唐家湾镇....",
        phone: "0759-0948953"
    };



    useEffect(() => {
        setCurrentFilm(films[0]);
    }, [films]);

    const getActiveItemIndex = (index) => {
        setCurrentFilm(films[index]);
    }

    return (
        <div>
            <CinemaHeader cinemaInfo={cinemaInfo}></CinemaHeader>
            <FilmsList films={films} getActiveItemIndex={getActiveItemIndex}></FilmsList>
            <Row className='film-detail'>
                <Col span={5} className="film-img">
                    <img src={currentFilm.posterUrl} alt="电影"></img>
                </Col>
                <Col span={16} className="film-text-info">
                    <p className='film-name'>《{currentFilm.filmName}》</p>
                    <p><span className='text-strong'>导演：</span>{currentFilm.director}</p>
                    <p><span className='text-strong'>主演：</span>{currentFilm.leadingActor}</p>
                    <p><span className='text-strong'>时长：</span>{currentFilm.duration}</p>
                    <p className='flim-introduction'><span className='text-strong'>故事简介：</span>{currentFilm.introduction}</p>
                </Col>
            </Row>
        </div>
    );
}


export default CinemaDetailPage;