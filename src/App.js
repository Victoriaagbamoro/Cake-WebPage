import React from 'react';

import Navbar from './components/Layouts/Navbar/Navbar'

import Home from './components/Pages/Home'

import CakeCart from './components/Layouts/CakeCart/CakeCart';

import './App.css';
import Special from './components/Layouts/Specials/Special';

import GoogleMaps from './components/Layouts/GoogleMap/GoogleMaps';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <CakeCart/>
      <Special/>
      <GoogleMaps/>
      <Footer/>
    </div>
  );
}

export default App;
