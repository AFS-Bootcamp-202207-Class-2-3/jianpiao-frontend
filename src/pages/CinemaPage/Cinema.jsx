import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getAllCinema, getCinemaByFilmId } from '../../api/cinema';
import './Cinema.css'
import CinemaList from '../../components/Cinema/CinemaList';
import FilmIntroduction from './FilmIntroduction'

const Cinema = () => {
    const param = useParams();
    const [cinemaList, setCinemaList] = useState([]);
    useEffect(() => {
        const getCinemas = async () => {
            debugger;
            if (param.filmId === undefined) {
                getAllCinema().then((response) => {
                    setCinemaList(response.data.data);
                });
            } else {
                getCinemaByFilmId(param.filmId).then((response) => {
                    setCinemaList(response.data.data);
                });
            }
        };
        getCinemas();
    }, [param.filmId]);

    return (<div className='Cinema'>
        {param.filmId ? <FilmIntroduction filmId={param.filmId} /> : ""}
        <CinemaList cinemaList={cinemaList} />
    </div>);
}


export default Cinema;