import React from 'react';
import Card from './Card';
import cars from './db.json';

function CarList() {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <Card
          key={car.id}
          make={car.make}
          model={car.model}
          year={car.year}
          price={car.price}
          image={car.image}
        />
      ))}
    </div>
  );
}

export default CarList;
