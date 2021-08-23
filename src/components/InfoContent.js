import React from "react";

const InfoContent = ({ abilities, base_experience, heights, id, moves }) => {
  return (
    <>
      <div>{abilities.map((elm) => elm.ability)}</div>
      console.log(abilities)
    </>
  );
};

export default InfoContent;
