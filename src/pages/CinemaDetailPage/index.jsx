import React from 'react';
import { useState, useEffect } from 'react';
import CinemaHeader from './CinemaHeader';
import FilmsList from './FilmsList';
import FilmSessions from './FilmSessions';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Col, Row } from "antd";
import "./cinemaDetailPage.css";
import { getCinemaById, getFilmsByCinemaId } from '../../api/cinemas';
import { getSessions } from '../../api/sessions';
import { disassembleString } from '../../utils/utils';

const CinemaDetailPage = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [cinemaInfo, setCinemaInfo] = useState({})
    const [currentFilm, setCurrentFilm] = useState({});
    const [films, setFilms] = useState([]);
    const [sessions, setSessions] = useState({});
    const [activeIndex, setActiveIndex] = useState(0);
    const cinemaId = params.cinemaId;
    const urlParams = disassembleString(location.search);

    useEffect(() => {
        (async () => {
            const res = await getCinemaById(cinemaId);
            setCinemaInfo(res.data.data)
        })();
        (async () => {
            const res = await getFilmsByCinemaId(cinemaId);
            const films = res.data.data;
            setFilms(films);
            let currentIndex = films.findIndex(item => item.id === urlParams.filmId);
            if (currentIndex === -1) {
                setCurrentFilm(res.data.data[0]);
                setActiveIndex(0);
            } else {
                setCurrentFilm(res.data.data[currentIndex]);
                setActiveIndex(currentIndex);
            }
        })();
    }, [cinemaId, urlParams.filmId]);

    useEffect(() => {
        (async () => {
            const res = await getSessions(cinemaId, currentFilm.id);
            setSessions(res.data.data);
        })();
    }, [cinemaId, currentFilm])

    const getActiveItemIndex = (index) => {
        setCurrentFilm(films[index]);
    }

    const buyTicket = (session) => {
        navigate("/pick-seat", {state: {session, cinemaInfo, filmInfo: currentFilm, }})
    }

    return (
        <div>
            <CinemaHeader cinemaInfo={cinemaInfo}></CinemaHeader>
            <FilmsList films={films} getActiveItemIndex={getActiveItemIndex} activeIndex={activeIndex}></FilmsList>
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
            <FilmSessions sessions={sessions} clickBuyButton={buyTicket}></FilmSessions>
        </div>
    );
}


export default CinemaDetailPage;