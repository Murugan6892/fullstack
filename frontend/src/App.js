import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://backend:5000/api')
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(() => setData('Error connecting to backend'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🚀 Full Stack App</h1>
      <h3>Backend says: {data}</h3>
    </div>
  );
}

export default App;
