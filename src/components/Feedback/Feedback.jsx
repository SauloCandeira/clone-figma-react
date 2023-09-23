import React from 'react';
// import './Title.css'; // Importe um arquivo CSS separado para estilos

// Importe as imagens como módulos
import ClarifionLogo from '../../../public/clarifion-logo.png';
import McafeeLogo from '../../../public/Mcafee.svg';
import selo from '../../../public/image-6.png';

function Feedback() {
  const containerStyle = {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '16px',
    display: 'inline-flex',
  };

  const imgStyle = {
    width: '88px',
    height: '88px',
  };

  const textContainerStyle = {
    width: '446px',
  };

  const textStyle = {
    color: '#4D5254',
    fontSize: '16px',
    fontFamily: 'Manrope',
    fontWeight: 400,
    lineHeight: '22.40px',
    wordWrap: 'break-word',
  };

  const boldTextStyle = {
    ...textStyle,
    fontWeight: 700,
  };

  return (
    <div id="teste-4" style={containerStyle}>
      <img style={imgStyle} src={selo} alt="Selo" />
      <div style={textContainerStyle}>
        <span style={textStyle}>
          If you are not completely thrilled with your Clarifion - We have a
        </span>
        <span style={boldTextStyle}>30 day satisfaction guarantee</span>
        <span style={textStyle}>
          . Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </span>
      </div>
    </div>
  );
}

export default Feedback;
