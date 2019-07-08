import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [data, setData] = useState(null);
  
  useEffect(
    () => {
      const loadData = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(result.data);
      };
      loadData();
    },
    []
  );

  if (!data) {
    return <span data-testid="loading">Loading data...</span>;
  }
  return (
    <div>
      { data.map( (user, i) => (
        <span data-testid={`user${i}`}>{user.name}</span>
      ))}
    </div>
  );
}
