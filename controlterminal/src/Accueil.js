import React from 'react';
import "./CssFiles/App.css";
import { useNavigate } from 'react-router-dom';



function Accueil() {
  let navigate = useNavigate();

  const handleEmporterClick = () => {
    navigate('/Subscribe');
  }

  const handleSurPlaceClick = () => {
    navigate('/Subscribe');
  }

  return (
    <>
      <div className="container">
        <button className="card" onClick={handleEmporterClick}>
          <h2>A emporter</h2>
        </button>
        <button className="card2" onClick={handleSurPlaceClick}>
          <h2>Sur place</h2>
        </button>
      </div>
    </>
  )
};

export default Accueil;
  