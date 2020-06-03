import React from 'react';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from "./components/Footer";
import JumbotronC from "./components/JumbotronC";
import LatestRelease from "./components/LatestRelease";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
      <NavBar title={"Book Store"}/>
      <JumbotronC title={"The best Book Shop ever! "} />
      <LatestRelease />
      <Footer/>
    </>
  );
}

export default App;