import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { name, img } = expert;
    return <div className="card col-" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
        </div>
  </div>;
};

export default Expert;
