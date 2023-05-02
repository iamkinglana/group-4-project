import React, { useState } from "react";


function SearchCars({ cars }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredcars = cars.filter((cars) => {
    return (
      cars.description.toLowerCase().includes(query.toLowerCase()) ||
      cars.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  

  return (
    <div>
      
      <input type="text" placeholder="Search cars" onChange={handleInputChange} />
      {/* carlist goes here */}
      
  
    </div>
  );
}

export default SearchCars;