import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import { useState, useEffect } from 'react';

const FilmsList = (props) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const films = props.films;

    useEffect(() => {
        setActiveSlideIndex(props.activeIndex);
    }, [props.activeIndex]);

    const clickFilmItem = (index) => {
        setActiveSlideIndex(index);
        props.getActiveItemIndex(index);
    }

    const config = {
        loop : false,
        spaceBetween: 20,
        width: 160,
        slidesPerGroup: 6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        preloadImages: false,
        lazy: true,
        speed: 500,
    };

    return (
        <div className='films-list'>
            <AwesomeSwiper config={config} className="film-awesome-swiper">
                <div className="swiper-wrapper">
                    {films.map((item, index) => {
                         return (
                            <div key={index} className={`swiper-slide ${activeSlideIndex === index ? "active-slide" : ""}`} onClick={() => clickFilmItem(index)}>
                                <img src={item.posterUrl} alt=""></img>
                            </div>
                        )
                    })}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </AwesomeSwiper>
        </div>
    );
}


export default FilmsList;