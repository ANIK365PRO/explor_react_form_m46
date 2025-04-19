import React from 'react';
import UseInputField from '../../Hooks/UseInputField';

const HookForm = () => {
  const [email, setEmail] = UseInputField();
  const [password, setPassword] = UseInputField();

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log('submit', email, password);
  };

  return (
    <div>
      <h2>Hook:</h2>

      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          onChange={setEmail}
          defaultValue={email}
          name="email"
          placeholder="email"
        />{' '}
        <br />
        <input
          type="password"
          onChange={setPassword}
          defaultValue={password}
          name="password"
          placeholder="password"
        />{' '}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
