import React from 'react';

function Card({ make, model, year, price, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={`${make} ${model}`} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{`${make} ${model}`}</h3>
          <div className="card-subtitle">{year}</div>
        </div>
        <div className="card-details">
          <div className="card-price">{`$${price}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
