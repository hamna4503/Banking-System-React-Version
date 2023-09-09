import React from "react";

function Card(props) {
  return (
    <div className="card mx-auto mb-5">
      <img src={props.src} className="card-img-top img-fluid img-thumbnail" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
