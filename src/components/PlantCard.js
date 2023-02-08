import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stocked, setStocked] = useState(true)
  const { image, name, price } = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button className="primary" onClick={() => setStocked(false)}>In Stock</button>
      ) : (
        <button onClick={() => setStocked(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
