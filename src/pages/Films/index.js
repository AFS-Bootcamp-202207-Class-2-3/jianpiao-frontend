import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllFilms } from "../../api/film";
import FilmList from "../../components/FilmList/FilmList";
import "./films.css";

const Films = () => {
  const [chooseShowing, setChooseShowing] = useState(true);
  const navigate = useNavigate();
  const [showingFilms, setShowingFilms] = useState([]);
  const [comingFilms, setComingFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const res = await getAllFilms();
      const films = res.data.films;
      const comingTime = new Date();
      comingTime.setDate(comingTime.getDate() + 5);
      const formatComingTime = Date.parse(
        comingTime.getFullYear() +
          "-" +
          (comingTime.getMonth() + 1) +
          "-" +
          comingTime.getDate()
      );
      const tmpShowingFilms = [];
      const tmpComingFilms = [];
      films.forEach((film) => {
        if (
          film.releasedTime &&
          Date.parse(film.releasedTime) > formatComingTime
        ) {
          tmpComingFilms.push(film);
        } else {
          tmpShowingFilms.push(film);
        }
      });
      setShowingFilms(tmpShowingFilms);
      setComingFilms(tmpComingFilms);
    };
    getFilms();
  }, []);

  const clickFilm = (id) => {
    navigate("/films/" + id);
  };
  const onclickShowing = () => {
    setChooseShowing(true);
  };
  const onclickComing = () => {
    setChooseShowing(false);
  };

  return (
    <div className="film-list">
      <div className="top">
        <span
          className={chooseShowing ? "chooseTitle" : "title"}
          onClick={onclickShowing}
        >
          正在热映
        </span>
        <span
          className={!chooseShowing ? "chooseTitle" : "title"}
          onClick={onclickComing}
        >
          即将上映
        </span>
      </div>
      <div className={chooseShowing ? "" : "display"}>
        <FilmList films={showingFilms} clickFilm={clickFilm}></FilmList>
      </div>
      <div className={chooseShowing ? "display" : ""}>
        <FilmList
          films={comingFilms}
          clickFilm={clickFilm}
          isNotShowing={true}
        ></FilmList>
      </div>
    </div>
  );
};

export default Films;
