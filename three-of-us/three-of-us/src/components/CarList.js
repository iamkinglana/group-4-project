import React, { useState, useEffect } from "react";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/cars")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);



  const handleCardClick = (id) => {
    const index = cars.findIndex((cars) => cars.id === id);
    const clickedCar = cars[index];
    const updatedCars = [
      ...cars.slice(0, index),
      ...cars.slice(index + 1),
      clickedCar
    ];
    setCars(updatedCars);
  };

  return (
    <div className="car-collection">
      <h2>Car Collection</h2>
      <div className="card-list">
        {cars.map((cars) => (
          <div
            className="card"
            key={cars.id}
            onClick={() => handleCardClick(cars.id)}
          >
            <div className="card-image">
              <img src={cars.Image-1} alt={cars.Make} />
              <img src={cars.Image-2} alt={cars.Make} />
            </div>
            <div className="card-content">
              <h3>
                {cars.Make} {cars.Model}
              </h3>
              <p id="catchphrase">{cars.Engine}</p>
              <p>
                {cars.Origin} {cars.top} 
                {cars.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;