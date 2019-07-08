import React, { useState } from 'react'
import Fetch from './Fetch';

export default function HomePage() {
  
  const [ title, setTitle ] = useState('');
  const handleOnClick= () => {
    setTitle('Welcome');
  }
  return (
    <div>
      <div>This is HomePage</div>
      <button onClick={handleOnClick}>Login</button>
      <div data-testid="title">{title}</div>

      <Fetch/>
    </div>
  )
}
