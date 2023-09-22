import React from 'react';
import './Header.css'; // Importe um arquivo CSS separado para estilos

// Importe as imagens como módulos
import checkmark from '../../../public/fluent_checkmark-starburst-20-regular.svg';
import truck from '../../../public/ph_truck-light.svg';
import heart from '../../../public/mdi_cards-heart-outline.svg';
import arrow from '../../../public/fluent_arrow-sync-checkmark-20-regular.svg';

function Header() {
  return (
    <div className="header-container">
      {/* <div className="background"></div> */}

      <div className="item">
        <div className="icon">
          <img src={checkmark} alt="Checkmark Starburst" />
        </div>
        <div className="text">
          30-DAY SATISFACTION GUARANTEE
        </div>
      </div>

      <div className="item">
        <div className="icon">
          <img src={truck} alt="Truck" />
        </div>
        <div className="text">
          Free delivery on orders over $40.00
        </div>
      </div>

      <div className="item">
        <div className="icon">
          <img src={heart} alt="Heart" />
        </div>
        <div className="text">
          50,000+ HAPPY CUSTOMERS
        </div>
      </div>

      <div className="item">
        <div className="icon">
          <img src={arrow} alt="Arrow Sync Checkmark" />
        </div>
        <div className="text">
          100% Money Back Guarantee
        </div>
      </div>
    </div>
  );
}

export default Header;