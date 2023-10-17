'use client'
import React from 'react';

const AddtoCart = () => {
  const handleButton = () => {
    console.log('button-clicked');
  };
  return (
    <div>
      <button className="btn btn-accent" onClick={handleButton}>Add to Cart</button>
    </div>
  );
};

export default AddtoCart;
