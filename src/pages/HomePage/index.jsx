import React from 'react';
import "./homepage.css";
import AwesomeSwiper from 'react-awesome-swiper';
import { useNavigate  } from "react-router-dom";
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

const HomePage = () => {
    const navigate = useNavigate();

    const films = [
        {
            id: 1,
            name: "明日战记",
            url: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
        },
        {
            id: 2,
            name: "独行月球",
            url: "https://p0.pipi.cn/mmdb/25bfd6d72c992367cb537c020675f703a7045.jpg?imageView2/1/w/160/h/220",
        },
        {
            id: 3,
            name: "神探大战",
            url: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
        },
        {
            id: 3,
            name: "神探大战",
            url: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
        },
        {
            id: 3,
            name: "神探大战",
            url: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220",
        },
    ];

    const config = {
        loop : true,
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
        navigate('/film/'+id);
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
                            <img src={item.url} alt={item.name} key={index} onClick={() => clickFilm(item.id)} className="film-img"></img>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;