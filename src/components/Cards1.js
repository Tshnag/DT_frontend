import React from "react";

const Cards1 = ({ cardTitle, cardDesc, cardVid }) => {
  return (
    <div className="card-tech-management">
      <div className="title">
        <h3>{cardTitle}</h3>
        <a href="http://">
          <img
            className="info-icon"
            src="https://i.etsystatic.com/36262552/r/il/d01382/4153357339/il_fullxfull.4153357339_sf4p.jpg"
            alt="info"
          />
        </a>
      </div>
      <div className="video-container">
        <p>{cardDesc}</p>
        <div className="video-tag">
          
          <iframe
            width="100%"
            height="300"
            src={cardVid}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards1;
