import React from 'react';
import '../styles/FruitDetail.css';


const FruitDetail = ({ fruit, onBack }) => {
  return (
    <div className="fruit-detail">
      <button onClick={onBack} className="back-button">Back</button>
      <img src={`path_to_images/${fruit.image}`} alt={fruit.name} />
      <h2>{fruit.name}</h2>
      <p>{fruit.description}</p>
    </div>
  );
};

export default FruitDetail;
