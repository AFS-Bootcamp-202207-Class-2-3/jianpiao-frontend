import React from 'react';
import { Popconfirm, Modal  } from 'antd';
import './FilmDetailPage.css';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { getFilmById } from '../../api/film';
import moment from 'moment';
import FilmTicket from '../../components/FilmTicket/FilmTicket';

export default function FilmDetailPage() {
  let param = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    const getFilm = async () => {
        const res = await getFilmById(param.id);
        console.log(res);
        setFilm(res.data.film);
    };
    getFilm();
}, [param.id]);

  const ticketInfo = {
    filmName: film.filmName,
    hall: "1号放映厅",
    seat: "1排1坐",
    date: "2022.08.10",
    price: 35
  }

  const tickInfo = () => {
    Modal.info({
      title: '票据信息',
      content: (
        <div>
          <FilmTicket ticketInfo={ticketInfo}></FilmTicket>
        </div>
      ),

      onOk() {},
    });
  };

  return (
    <div>
      <div className="banner">
        <div className='wrapper clearfix'>
          <div className='celeInfo-left'>
            <div className='avatar-shadow'>
              <img className='avatar' src={film.posterUrl} alt={film.filmName} />
            </div>
          </div>
          <div className='celeInfo-right clearfix'>
            <div className='movie-brief-container'>
              <h1 className='name' >{film.filmName}</h1>
              <ul>
                <li>时长： {film.duration}  分钟</li>
                <li>类型：动作 / 冒险 / 喜剧 </li>
                <li>导演： {film.director}</li>
                <li>主演： {film.leadingActor} </li>
                <li>上映时间：{moment(film.releasedTime).format("YYYY-MM-DD")}</li>
              </ul>
            </div>
            <div className='action-buyBtn'>
              <button>想看</button>
              <Popconfirm
                title="确定购票吗?"
                onConfirm={tickInfo}
                placement="right"
                okText="确定"
                cancelText="取消"
              >
                <button>购票</button>
              </Popconfirm>
            </div>
            <div className='movie-stats-container'>
              <div className='movie-index'>
                <p className='movie-index-title'>口碑</p>
                <div>评分：{film.score}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>剧情简介：{film.introduction}</div>
    </div >
  )
}
