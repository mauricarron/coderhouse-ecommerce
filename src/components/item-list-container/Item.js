import React from "react";

const Item = ({ item }) => {
  const { title, price, pictureUrl } = item;

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card mb-4">
        <img src={pictureUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h3 className="card-text">{title}</h3>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
