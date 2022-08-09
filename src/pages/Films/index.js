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
      {films.map((item, index) => (
        <img
          src={item.posterUrl}
          alt={item.filmName}
          key={index}
          onClick={() => clickFilm(item.id)}
          className="film-img"
        ></img>
      ))}
    </div>
  );
};

export default Films;
