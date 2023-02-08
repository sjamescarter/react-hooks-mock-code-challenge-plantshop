import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {    
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function onSubmit(formData) {
    console.log(formData)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <main>
      <NewPlantForm onSubmit={onSubmit} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={search === "" ? plants : filterPlants} />
    </main>
  );
}

export default PlantPage;
