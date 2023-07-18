import React from "react";

const Card = ({ burger, handleClick }) => {
  const { title, price, img } = burger;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>

        <p>Price - Ksh. {price}</p>
        <button onClick={() => handleClick(burger)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
