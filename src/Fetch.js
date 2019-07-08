import React, { useState, useEffect } from 'react'
import { fetchUsers } from './AsyncCall';

export default function Fetch() {

  const [users, setUsers] = useState(null)
  
  useEffect(() => {
    const handleFetchUsers = async () => {
      const users  = await fetchUsers();
      setUsers(users);
    };
    handleFetchUsers();
  }, [])
  
  if (!users) {
    return <span data-testid="loading">Loading</span>
  } else {
    return <span data-testid="user">{users[0].name}</span>
  }

}
