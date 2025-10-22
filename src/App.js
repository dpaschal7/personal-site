// import logo from './logo.svg';
// import React, {Component, Fragment} from "react";

// import './App.css';

// function App() {
//   return (

    
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch from your Go API
    axios.get('/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <div class="header-logo-section"><img data-src="https://quartersnacks.com/wp-content/uploads/2025/01/QS-JOURNAL-LOGO-BLACK.png" alt="Quartersnacks logo">
        </img>
      </div>
      <h1>My Go + React App</h1>
      <p>Message from Go: {message}</p>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <p>Data: {data}</p>}
    </div>
  );
}

export default App;