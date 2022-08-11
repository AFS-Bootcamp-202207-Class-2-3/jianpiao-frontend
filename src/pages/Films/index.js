import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllFilms } from "../../api/film";
import "./films.css";

const Films = () => {
  const navigate = useNavigate();
  const [films, setfilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const res = await getAllFilms();
      setfilms(res.data.films);
    };
    getFilms();
  }, []);

  const clickFilm = (id) => {
    navigate("/films/" + id);
  };
  return (
    <div className="film-list">
      <div className="title">正在热映</div>
      {films.map((item, index) => (
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
  );
};

export default Films;
