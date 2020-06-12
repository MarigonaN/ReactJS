import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
  
      <Footer/>
    </div>
     
  );
}

export default App;
