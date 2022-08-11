import React from 'react';
import './FilmDetailPage.css';
import { Button } from 'antd';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getFilmById } from '../../api/film';
import moment from 'moment';
import {JPApi} from "../../api/http";

export default function FilmDetailPage() {
  const navigate = useNavigate();
  let param = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    JPApi(`/films/${param.id}`, "get", {}, resp => {
      setFilm(resp.data.film);
    })
  }, [param.id]);

  const toCinemaPage = () => {
    navigate("/cinemas?filmId=" + film.id);
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
              {/* <button>想看</button> */}
              <Button type='primary' onClick={toCinemaPage}>购票</Button>
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
