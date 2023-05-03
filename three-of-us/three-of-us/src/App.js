
import React from "react";
import CarsContainer from "./components/CarsContainer";
import CarList from "./components/CarList";
import Card from "./components/Card";
import CarSearch from "./components/CarSearch.js";


function App() {
	const [cars, setCars] = React.useState([]);
	React.useEffect(() => {
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
	const handleAddCars = (cars) => {
		setCars([...cars, cars]);
	};
	const handleDeleteCars = (carsId) => {
		const filterCars = cars.filter(
      //check check
			(cars) => cars.id !== carsId
		);
		setCars(filterCars);
	};
	const handleSearch = (searchTerm) => {
		if (searchTerm) {
			const filteredCars = cars.filter((cars) => {
				if (cars.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setCars(filteredCars);
		} else {
			fetchCars();
		}
	};
	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
				<h2>Three-Of-US</h2>
			</div>
			
			
			<CarsContainer
				handleAddCars={handleAddCars}
				cars={cars}
				handleSearch={handleSearch}
				handleDeleteCars={handleDeleteCars}
			/>
			<CarSearch/>
			<Card/>
			
			<CarList cars={cars}/>
			

		</div>
		// <div>ddd</div>
	);
}

export default App;