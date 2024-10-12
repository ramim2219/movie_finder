import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import SearchArea from './components/SearchArea/SearchArea';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <div className='AppDiv'>
      <Navbar />
      <SearchArea />
      <Footer />
    </div>
  );
};

export default App;