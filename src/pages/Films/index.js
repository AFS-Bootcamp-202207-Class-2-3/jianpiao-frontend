import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllFilms } from "../../api/film";
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
        {showingFilms.map((item) => (
          <div
            className="file-item"
            onClick={() => clickFilm(item.id)}
            key={item.id}
          >
            <img
              src={item.posterUrl}
              alt={item.filmName}
              className="film-img"
            ></img>
            <div className="file-filmName">{item.filmName}</div>
            <div className="file-score">{item.score}</div>
          </div>
        ))}
      </div>
      <div className={chooseShowing ? "display" : ""}>
        {comingFilms.map((item) => (
          <div
            className="file-item"
            onClick={() => clickFilm(item.id)}
            key={item.id}
          >
            <img
              src={item.posterUrl}
              alt={item.filmName}
              className="film-img"
            ></img>
            <div className="file-filmName">{item.filmName}</div>
            <div className="file-score">{item.score}</div>
            <div style={{color:'#999',textAlign:'center' }}>上映时间{item.releasedTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
