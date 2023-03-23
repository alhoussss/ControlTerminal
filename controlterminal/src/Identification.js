import React from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';
import Navbar from './Bootstrap/navbar';



function Accueil() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate('/Subscribe/LogIn');
  }

  const handleSurPlaceClick = () => {
    navigate('/Subscribe/Menu');
  }

  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="container"></div>
      <div className="container">
        <button className="card" onClick={handleEmporterClick}>
          <h2>S'identifier</h2>
        </button>
        <button className="card2" onClick={handleSurPlaceClick}>
          <h2>Ne pas s'identifier</h2>
        </button>
      </div>
    </>
  )
};

export default Accueil;
  