import React from 'react';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Profile from './component/Landing pages/Profile/Profile';
import About from './component/Landing pages/About';
// import Project from './component/Landing pages/Project';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Footer />
    </div>
  );
}

export default App;

