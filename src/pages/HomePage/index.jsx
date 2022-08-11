import React from 'react';
import "./homepage.css";
import AwesomeSwiper from 'react-awesome-swiper';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAllFilms } from "../../api/film";
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

const HomePage = () => {
    const navigate = useNavigate();
    const [films, setfilms] = useState([]);

    useEffect(() => {
        const getFilms = async () => {
            const res = await getAllFilms();
            setfilms(res.data.films);
        };
        getFilms();
    }, []);

    const config = {
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        preloadImages: false,
        lazy: true,
        speed: 500,
    };

    const clickFilm = (id) => {
        navigate('/films/' + id);
    }

    return (
        <div>
            <div className='slide'>
                <AwesomeSwiper config={config}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={banner1} alt=""></img>
                        </div>
                        <div className="swiper-slide">
                            <img src={banner2} alt=""></img>
                        </div>
                    </div>
                </AwesomeSwiper>
            </div>
            <div className='film-box'>
                <p className='title'>正在上映</p>
                <div className='film-list'>
                    {
                        films.map((item, index) =>
                            <div
                                className="file-item"
                                onClick={() => clickFilm(item.id)}
                                key={item.id}
                            >
                                <img
                                    src={item.posterUrl}
                                    alt={item.filmName}
                                    className="film-img"
                                ></img>
                                <div className="file-filmName">{item.filmName}</div>
                                <div className="file-score">{item.score}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;