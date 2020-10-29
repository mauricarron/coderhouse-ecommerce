import React from "react";

const Item = ({ item }) => {
  const { title, price, pictureUrl } = item;

  return (
    <div className="card col-sm-12 col-md-6">
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h2 className="card-text">{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
