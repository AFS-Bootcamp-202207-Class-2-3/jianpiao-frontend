import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCinema, getCinemaByFilmId } from "../../api/cinema";
import "./cinema.css";
import CinemaList from "../../components/Cinema/CinemaList";
import FilmIntroduction from "./FilmIntroduction";
import { disassembleString } from "../../utils/utils";

const Cinema = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cinemaList, setCinemaList] = useState([]);

  const params = disassembleString(location.search);
  const filmId = params.filmId;

  useEffect(() => {
    const getCinemas = async () => {
      if (filmId === undefined) {
        getAllCinema().then((response) => {
          setCinemaList(response.data.data);
        });
      } else {
        getCinemaByFilmId(filmId).then((response) => {
          setCinemaList(response.data.data);
        });
      }
    };
    getCinemas();
  }, [filmId]);

  const toBuyTicket = (cinemaId) => {
    if (filmId === undefined) {
      navigate("/cinemas/" + cinemaId);
    } else {
      navigate("/cinemas/" + cinemaId + "?filmId=" + filmId);
    }
  };

  return (
    <div className="Cinema">
      {filmId ? <FilmIntroduction filmId={filmId} /> : ""}
      <CinemaList
        cinemaList={cinemaList}
        className="cinema-list"
        toBuyTicket={toBuyTicket}
      />
    </div>
  );
};

export default Cinema;
