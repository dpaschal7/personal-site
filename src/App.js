// import logo from './logo.svg';
// import React, {Component, Fragment} from "react";


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
    
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {

//   const [message, setMessage] = useState('');
//   const [data, setData] = useState('');

//   useEffect(() => {
//     // Fetch from your Go API
//     axios.get('/api/hello')
//       .then(response => setMessage(response.data.message))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data');
//       setData(response.data.data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (

//       <><Link to="/personal" /><Link to="/tech" /></>
//     // <div className="App">
//     //   <div class="header-logo-section"><img src="/assets/images/drew_paschal_logo.png" />
//     //   </div>
//     //   <h1>My Go + React App</h1>
//     //   <p>Message from Go: {message}</p>
//     //   <button onClick={fetchData}>Fetch Data</button>
//     //   {data && <p>Data: {data}</p>}
//     // </div>
//   );
// }

// export default App;

import { Header } from './components/Header';
import { BlogGrid } from './components/BlogGrid';
import { FeaturedPost } from './components/FeaturedPost';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Featured Post */}
      <FeaturedPost />

      {/* Recent Posts */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold mb-8 tracking-tight">RECENT POSTS</h3>
          <BlogGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">NAVIGATE</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Archive</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">TOPICS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Skateboarding</a></li>
                <li><a href="#" className="hover:underline">Street Culture</a></li>
                <li><a href="#" className="hover:underline">Photography</a></li>
                <li><a href="#" className="hover:underline">Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">SUBSCRIBE</h4>
              <p className="text-sm mb-4">Get updates on new posts</p>
              <div className="flex border border-black">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="flex-1 px-4 py-2 outline-none"
                />
                <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm border-t border-black pt-8">
            © 2026 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}