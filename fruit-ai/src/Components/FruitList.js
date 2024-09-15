import React from 'react';
import '../styles/FruitList.css';

const FruitList = ({ fruits, onSelect }) => {
  return (
    <div className="fruit-list">
      {fruits.map(fruit => (
        <div key={fruit.id} className="fruit-card" onClick={() => onSelect(fruit)}>
          <img src={`path_to_images/${fruit.image}`} alt={fruit.name} />
          <h3>{fruit.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FruitList;
