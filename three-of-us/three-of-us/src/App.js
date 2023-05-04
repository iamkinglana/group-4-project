import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import CarsContainer from "./components/CarsContainer";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import Navbar from "./components/NavBar";
import SearchCars from "./components/SearchCars";
import Card from "./components/Card";

function App() {
  const [cars, setCars] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const res = await fetch(
        `http://localhost:3006/cars?description_like=${searchTerm}`
      );
      const jsonRes = await res.json();
      setCars(jsonRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await fetch("http://localhost:3006/cars");
      const jsonRes = await res.json();
      setCars(jsonRes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCars = (newCar) => {
    setCars([...cars, newCar]);
  };

  const handleDeleteCars = (carId) => {
    const filteredCars = cars.filter((car) => car.id !== carId);
    setCars(filteredCars);

  };

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Three - Of - US</h2>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <CarsContainer
                handleAddCars={handleAddCars}
                cars={cars}
                handleSearch={handleSearch}
                handleDeleteCars={handleDeleteCars}
              />
            }
          />
          <Route
            path="/carsearch"
            element={<CarSearch handleSearch={handleSearch} />}
          />
          
          <Route path="/carlist" element={<CarList cars={cars} />} />
          
          <Route path="/searchcars" element={<SearchCars />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
