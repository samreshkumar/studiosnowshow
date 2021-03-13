import React, {useEffect, useState} from 'react'
import './App.css';
import { HashRouter  } from "react-router-dom";
import Routing from './routing/Routing';
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  return (
   <>
    <HashRouter basename="/">
        <Header/>
      <Routing/>
      <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
