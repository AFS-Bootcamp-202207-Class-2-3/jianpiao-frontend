import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import { useState } from 'react';

const FilmsList = (props) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const films = props.films;

    const clickFilmItem = (index) => {
        setActiveSlideIndex(index);
        props.getActiveItemIndex(index);
    }

    const config = {
        loop : false,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true,
        // },
        spaceBetween: 20,
        width: 160,
        // slidesPerView: 2,
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