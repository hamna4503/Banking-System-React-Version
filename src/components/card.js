import React from "react";

function Card(props) {
  return (
      <div className="card mr-auto ml-auto">
        <img src={props.src} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.text}
          </p>
        </div>
        </div>
  );
}

export default Card;
