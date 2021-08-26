import React from "react";
import "./InfoContent.css";

const InfoContent = ({
  abilities,
  base_experience,
  height,
  id,
  location_area_encounters,
}) => {
  return (
    <>
      <div className="info-content-container">
        <div className="info-content-abilities-title">Habilidades:</div>
        {abilities.map((elm) => (
          <li className="info-content-abilities">{elm.ability.name}</li>
        ))}
        <div className="info-content-exp-title">
          Exp Base:
          <span className="info-content-exp"> {base_experience}</span>
        </div>

        <div className="info-content-height-title">
          Altura:
          <span className="info-content-height"> {height}</span>
        </div>

        <div className="info-content-id-title">
          Id:
          <span className="info-content-id">{id}</span>
        </div>

        <div className="info-content-local-title">Local:</div>
        <a className="info-content-local" href={location_area_encounters}>
          {location_area_encounters}
        </a>
      </div>
    </>
  );
};

export default InfoContent;
