import React from 'react';
import Card from './Card';
import cars from './db.json';

function CarList() {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div key={car.id}>
          <Card
            make={car.make}
            model={car.model}
            year={car.year}
            price={car.price}
            image={car.image}
          />
        </div>
      ))}
    </div>
  );
}

export default CarList;
