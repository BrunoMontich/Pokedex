import React from "react";
import "./InfoContent.css";

const InfoContent = ({ stats }) => {
  return (
    <>
      <div className="info-content-container">
        {stats.map((elm) => (
          <div className="info-content--stats-name-number-container">
            <div className="info-content-stats-name">
              {elm.stat.name.includes("-")
                ? elm.stat.name.split("-")[0].substring(0, 1).toUpperCase() +
                  elm.stat.name.split("-")[0].substring(1) +
                  "-" +
                  elm.stat.name.split("-")[1].substring(0, 1).toUpperCase() +
                  elm.stat.name.split("-")[1].substring(1)
                : elm.stat.name.substring(0, 1).toUpperCase() +
                  elm.stat.name.substring(1)}
            </div>
            <div className="info-content-stats-number">{elm.base_stat}</div>
          </div>
        ))}

        {/* <div className="info-content-stats-number-container">
          {stats.map((elm) => (
          ))}
        </div> */}
      </div>
    </>
  );
};

export default InfoContent;
