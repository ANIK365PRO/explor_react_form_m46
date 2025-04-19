import React from 'react';

const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <h2>Simple:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="your name" /> <br />
        <input type="email" name="email" placeholder="your email" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
