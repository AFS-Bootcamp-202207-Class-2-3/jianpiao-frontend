import React from 'react';
import './FilmIntroduction.css';
import { useEffect, useState } from 'react';
import { getFilmById } from '../../api/film';
import moment from 'moment';

export default function FilmDetailPage(props) {
    const { filmId } = props;

    const [film, setFilm] = useState({});

    useEffect(() => {
        const getFilm = async () => {
            getFilmById(filmId).then((response) => {
                setFilm(response.data.film);
            });
        };
        getFilm();
    }, [filmId]);

    return (
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
                    <div className='movie-stats-container'>
                        <div className='movie-index'>
                            <p className='movie-index-title'>口碑</p>
                            <div>评分：{film.score}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
