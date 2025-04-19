import React from 'react';

const FormActon = () => {
  const handleFormAction = formData => {
    console.log(formData.get('name'));
    console.log(formData.get('email'));
  };
  return (
    <div>
      <h2>Action:</h2>

      <form action={handleFormAction}>
        <input type="text" placeholder="your name" name="name" />
        <br />
        <input type="email" placeholder="your email" name="email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormActon;
