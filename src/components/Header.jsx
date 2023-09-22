import React from 'react';
import checkmark from '../../public/fluent_checkmark-starburst-20-regular.svg';
import truck from '../../public/ph_truck-light.svg';
import heart from '../../public/mdi_cards-heart-outline.svg';
import arrow from '../../public/fluent_arrow-sync-checkmark-20-regular.svg';



function Header() {
  return (
    <div
      style={{
        // width: '1200px',
        width: '100%',
        height: '50px',
        left: '0px',
        top: '0px',
        position: 'absolute',
      }}>
      <div
        style={{
          // width: '1500px',
          width: '100%',
          height: '50px',
          left: '0px',
          top: '0px',
          position: 'absolute',
          background: '#252F3D',
        }}
      ></div>

      <div
        style={{
          width: '227px',
          height: '22px',
          left: '127px',
          top: '15px',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            left: '0px',
            top: '0px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
          }}
        >
          <img
            style={{
              width: '18.20px',
              height: '18.20px',
            }}
            src={checkmark}
            alt="Checkmark Starburst"
          />
        </div>
        <div
          style={{
            left: '30px',
            top: '7px',
            position: 'absolute',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'Manrope',
            fontWeight: '500',
            textTransform: 'capitalize',
            lineHeight: '12px',
            wordWrap: 'break-word',
          }}
        >
          30-DAY SATISFACTION GUARANTEE
        </div>
      </div>

      <div
        style={{
          width: '257px',
          height: '22px',
          left: '468px',
          top: '15px',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            left: '0px',
            top: '0px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
          }}
        >
          <img
            style={{
              width: '18.20px',
              height: '18.20px',
            }}
            src={truck}
            alt="Truck"
          />
        </div>
        <div
          style={{
            left: '30px',
            top: '7px',
            position: 'absolute',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'Manrope',
            fontWeight: '500',
            textTransform: 'uppercase',
            lineHeight: '12px',
            wordWrap: 'break-word',
          }}
        >
          Free delivery on orders over $40.00
        </div>
      </div>

      <div
        style={{
          width: '192px',
          height: '22px',
          left: '847px',
          top: '15px',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            left: '0px',
            top: '0px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
          }}
        >
          <img
            style={{
              width: '18.20px',
              height: '18.20px',
            }}
            src={heart}
            alt="Heart"
          />
        </div>
        <div
          style={{
            left: '30px',
            top: '7px',
            position: 'absolute',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'Manrope',
            fontWeight: '500',
            textTransform: 'capitalize',
            lineHeight: '12px',
            wordWrap: 'break-word',
          }}
        >
          50,000+ HAPPY CUSTOMERS
        </div>
      </div>

      <div
        style={{
          width: '209px',
          height: '22px',
          left: '1154px',
          top: '15px',
          position: 'absolute',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '22px',
            left: '0px',
            top: '0px',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex',
          }}
        >
          <img
            style={{
              width: '18.20px',
              height: '18.20px',
            }}
            src={arrow}
            alt="Arrow Sync Checkmark"
          />
        </div>
        <div
          style={{
            left: '30px',
            top: '7px',
            position: 'absolute',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'Manrope',
            fontWeight: '500',
            textTransform: 'uppercase',
            lineHeight: '12px',
            wordWrap: 'break-word',
          }}
        >
          100% Money Back Guarantee
        </div>
      </div>
    </div>
  );
}

export default Header;
