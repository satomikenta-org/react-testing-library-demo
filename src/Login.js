import React, { useState } from 'react'

export default function Login() {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
 
  const handleOnChangeEmail = e => { 
    setEmail(e.target.value);
  };

  const handleOnChangePassword = e => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    if (password.length < 5) {
      setError('Invalid Password');
      return;
    }
  };

  return (
    <div>
      <input data-testid="email" name="email" value={email} onChange={handleOnChangeEmail} />
      <input data-testid="password" name="password" value={password} onChange={handleOnChangePassword} />
      <button onClick={handleLogin}>Login</button>
      <div data-testid="error">{error}</div>
    </div>
  )
}
