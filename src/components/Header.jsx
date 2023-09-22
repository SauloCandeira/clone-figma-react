import React from 'react';
import ClarifionLogo from '../../public/clarifion-logo.png';
import McafeeLogo from '../../public/Mcafee.svg';
import NortonLogo from '../../public/Norton.svg';

function Header() {
  return (
    <div
      style={{
        width: '1500px',
        paddingLeft: '127px',
        paddingRight: '127px',
        paddingTop: '30px',
        paddingBottom: '30px',
        left: '0px',
        top: '50px',
        position: 'absolute',
        background: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'inline-flex',
      }}
    >
      <img style={{ width: '192px', height: '36px' }} src={ClarifionLogo} alt="Clarifion logo" />

      <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex' }}>
        <div style={{ width: '88px', height: '32px', position: 'relative' }}>
          <img src={McafeeLogo} style={{ width: '88px', height: '32px', left: '0px', top: '0px', position: 'absolute' }} alt="Mcafee logo" />
        </div>

        <div style={{ width: '82px', height: '32px', position: 'relative' }}>
          <img src={NortonLogo} style={{ width: '88px', height: '32px', left: '0px', top: '0px', position: 'absolute' }} alt="Norton logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;