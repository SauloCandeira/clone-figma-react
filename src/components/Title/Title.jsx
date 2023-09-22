import React from 'react';
import './Title.css'; // Importe um arquivo CSS separado para estilos

// Importe as imagens como módulos
function Title() {
  return (
    <>
      <div className="left: 432.50px; top: 135px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: center; gap: 24px; display: inline-flex">
        <div className="color: black; font-size: 48px; font-family: Manrope; font-weight: 400; text-transform: capitalize; line-height: 48px; word-wrap: break-word">Wait ! your order in progress.</div>
        <div className="color: #4D5254; font-size: 24px; font-family: Manrope; font-weight: 400; text-transform: capitalize; line-height: 24px; word-wrap: break-word">Lorem ipsum dolor sit amet, consectetur adipiscing </div>
      </div>
    </>
  );
}

export default Title;