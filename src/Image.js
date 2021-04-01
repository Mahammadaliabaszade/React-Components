import React from "react";
import "./image.css";
const Image = (props) => {
  return (
    <div className="allel ">
      <div>
        <img src={props.image} className="sekil" />
      </div>
      <div>
        <h4>{props.name}</h4>
        <h4>{props.value}</h4>
        <h4>{props.descript}</h4>
        <h4>{props.category}</h4>
        <h4>{props.brand}</h4>
      </div>
    </div>
  );
};

export default Image;
