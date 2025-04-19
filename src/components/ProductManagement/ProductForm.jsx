import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    // validaton;
    if (name.length === 0) {
      setError('please provide a product Name.');
      return;
    } else if (price.length === 0) {
      setError('please provide a product Price.');

      return;
    } else if (price < 0) {
      setError('Price can not be negative.');
      return;
    } else if (quantity.length === 0) {
      setError('please provide a product Quantity.');
      return;
    } else if (quantity < 0) {
      setError('Quantity can not be negative.');
      return;
    } else {
      setError(' ');
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct);

    handleAddProduct(newProduct);
  };
  return (
    <div>
      <h2>Product Management form:</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="product name" /> <br />
        <input type="text" name="price" placeholder="product price" /> <br />
        <input
          type="text"
          name="quantity"
          placeholder="product quantity"
        />{' '}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
