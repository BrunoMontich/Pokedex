import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import analyze from "rgbaster";

import "./index.css";
import InfoContent from "../../components/InfoContent";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoArrowUndoCircle } from "react-icons/io5";

const PokeInfo = () => {
  const { id } = useParams();

  const [infoList, setInfoList] = useState();
  const [imgBackground, setImgBackground] = useState();

  const moreInfo = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setInfoList(data);
    imgResult(data);
  };

  const imgResult = async (data) => {
    const result = await analyze(
      data.sprites.other["official-artwork"].front_default,
      { ignore: ["rgb(255,255,255)", "rgb(0,0,0)"], scale: 1 }
    );
    setImgBackground(result);
    console.log(result);
  };
  useEffect(() => {
    moreInfo();
  }, [id]);

  return (
    <>
      <div
        className="pokeinfo-container"
        style={{
          backgroundColor: imgBackground ? imgBackground[0].color : "white",
        }}
      >
        <div className="pokeinfo-header">
          <Link to="/">
            <IoArrowUndoCircle className="pokeinfo-back-button" />
          </Link>
        </div>
        <div className="pokeinfo-main-container">
          <div className="pokeinfo-left-arrow-container">
            {id > 1 ? (
              <Link to={`/info/${id - 1}`}>
                <IoIosArrowDropleftCircle className="pokeinfo-left-arrow" />
              </Link>
            ) : (
              <IoIosArrowDropleftCircle className="pokeinfo-left-arrow opacity" />
            )}
          </div>
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
              {infoList ? (
                infoList.name.substring(0, 1).toUpperCase() +
                infoList.name.substring(1)
              ) : (
                <span>Loading...</span>
              )}
            </h2>
            <div className="pokeinfo-main-stats">
              {infoList ? (
                <InfoContent stats={infoList.stats} />
              ) : (
                <span>Loading...</span>
              )}
            </div>
          </div>

          <div className="pokeinfo-right-arrow-container">
            {id < 898 ? (
              <Link to={`/info/${parseInt(id) + 1}`}>
                <IoIosArrowDroprightCircle className="pokeinfo-right-arrow" />
              </Link>
            ) : (
              <IoIosArrowDroprightCircle className="pokeinfo-right-arrow opacity" />
            )}
          </div>
        </div>
        <span className="pokeinfo-footer"></span>
      </div>
    </>
  );
};

export default PokeInfo;
