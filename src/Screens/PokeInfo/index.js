import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./index.css";
import InfoContent from "../../components/InfoContent";

import { BsArrowReturnLeft } from "react-icons/bs";

const PokeInfo = () => {
  const { nome } = useParams();
  const { id } = useParams();

  const [infoList, setInfoList] = useState();

  useEffect(() => {
    const moreInfo = async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nome}`
      );
      setInfoList(data);
    };
    moreInfo();
  }, []);

  return (
    <>
      <div className="pokeinfo-container">
        <div className="pokeinfo-header">
          <Link to="/">
            <BsArrowReturnLeft className="pokeinfo-back-button" />
          </Link>
        </div>
        <div className="pokeinfo-main-container">
          <div className="pokeinfo-left-arrow"></div>
          <div className="pokeinfo-main">
            <img
              src={
                infoList ? (
                  infoList.sprites.other["official-artwork"].front_default
                ) : (
                  <span>Loading...</span>
                )
              }
              className="pokeinfo-img"
            />
            <h2 className="pokeinfo-name">
              {nome.substring(0, 1).toUpperCase() + nome.substring(1)}
            </h2>
            <div className="pokeinfo-main-stats">
              {infoList ? (
                <InfoContent
                  abilities={infoList.abilities}
                  base_experience={infoList.base_experience}
                  height={infoList.height}
                  id={infoList.id}
                  location_area_encounters={infoList.location_area_encounters}
                />
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>

          <div className="pokeinfo-right-arrow"></div>
        </div>
        <span className="pokeinfo-footer"></span>
      </div>
    </>
  );
};

export default PokeInfo;
