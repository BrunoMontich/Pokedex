import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./index.css";
import InfoContent from "../../components/InfoContent";

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
        <div>
          <InfoContent
            abilities={infoList.abilities}
            // base_experience={details.base_experience}
            // heights={details.heights}
            // id={details.id}
            // moves={details.moves}
          />
          ;
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
