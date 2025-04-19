import React, { useState } from 'react';

const ControlledField = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormControlled = e => {
    e.preventDefault();
    console.log(email, password);

    if (password.length < 6) {
      setError('6 characters or longer password needed.');
    } else {
      setError(' ');
    }
  };

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handelPasswordOnChange = e => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError('password must be  6 characters or longer.');
    } else {
      setError('');
    }
  };
  return (
    <div>
      <h2>Controlled field:</h2>

      <form onSubmit={handleFormControlled}>
        <input
          type="email"
          name="email"
          onChange={handleEmailOnChange}
          defaultValue={email}
          placeholder="your email"
          required
        />
        <br />

        <input
          type="password"
          name="password"
          onChange={handelPasswordOnChange}
          defaultValue={password}
          placeholder="your password"
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
