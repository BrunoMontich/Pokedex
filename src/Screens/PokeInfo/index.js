import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./index.css";

const PokeInfo = () => {
  const { nome } = useParams();

  const [infoList, setInfoList] = useState([]);

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
        <h2 className="pokeinfo-name">{nome}</h2>
        <div>{infoList}</div>
      </div>
    </>
  );
};

export default PokeInfo;
