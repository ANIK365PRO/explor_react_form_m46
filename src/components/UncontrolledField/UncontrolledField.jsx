import React, { useRef } from 'react';

const UncontrolledField = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('sub-mite');
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Field:</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" ref={emailRef} />
        <br />
        <input type="password" name="password" ref={passwordRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UncontrolledField;
