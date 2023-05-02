import React, { useState, useEffect } from "react";

function CarCollection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ULTRA-RARE-SUPERCARS")
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
              <img src={cars.avatar_url} alt={cars.name} />
            </div>
            <div className="card-content">
              <h3>
                {cars.name} {cars.car_class}
              </h3>
              <p id="catchphrase">{cars.catchphrase}</p>
              <p>
                {cars.health} {cars.damage} {cars.armor}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarCollection;