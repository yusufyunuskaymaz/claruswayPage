import React from "react";
import { useNavigate } from "react-router-dom";
import person from "../../data";

const Card = ({ src, url, title }) => {
  const navigate = useNavigate();

  return (
    <div>
      {person.map((item) => {
        const { desc, title, img } = item;
        return (
          <div className="box" onClick={() => navigate(title.toLowerCase())} style={{cursor:"pointer"}}>
            <img src={Object.values(img)} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
