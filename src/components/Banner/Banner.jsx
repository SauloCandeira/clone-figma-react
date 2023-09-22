import React from 'react';
import './Banner.css'; // Importe um arquivo CSS separado para estilos

// Importe as imagens como módulos
import ClarifionLogo from '../../../public/clarifion-logo.png';
import McafeeLogo from '../../../public/Mcafee.svg';
import NortonLogo from '../../../public/Norton.svg';

function Banner() {
  return (
    <div className="banner-container">
      <img className="logo" src={ClarifionLogo} alt="Clarifion logo" />
      <div className="logo-container">
        <img className="logo" src={McafeeLogo} alt="Mcafee logo" />
        <img className="logo" src={NortonLogo} alt="Norton logo" />
      </div>
    </div>
  );
}

export default Banner;