import React from 'react';
import "./homepage.css";
import AwesomeSwiper from 'react-awesome-swiper';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAllFilms } from "../../api/film";
import banner3 from '../../assets/banner3.jpg';
import banner4 from '../../assets/banner4.jpg';
import FilmList from '../../components/FilmList/FilmList';

const HomePage = () => {
    const navigate = useNavigate();
    const [films, setfilms] = useState([]);

    const filterFilm = (films) => {
        const filterFilms = films.sort((item1, item2) => {
            return (item2.score === null ? 0 : item2.score) - (item1.score === null ? 0 : item1.score);
        });
        return filterFilms.splice(0, 12);
    }

    useEffect(() => {
        const getFilms = async () => {
            const res = await getAllFilms();
            setfilms(filterFilm(res.data.films));
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
                            <img src={banner3} alt=""></img>
                        </div>
                        <div className="swiper-slide">
                            <img src={banner4} alt=""></img>
                        </div>
                    </div>
                </AwesomeSwiper>
            </div>
            <div className='film-box'>
                <p className='title'>正在上映</p>
                <FilmList films={films} clickFilm={clickFilm}></FilmList>
            </div>
        </div>
    );
}

export default HomePage;