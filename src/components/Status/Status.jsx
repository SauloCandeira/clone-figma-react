import React from 'react';
// Importe as imagens como módulos
import checkmark from '../../../public/fluent_checkmark-starburst-20-regular.svg';
import removebag from '../../../public/remove-bag.png';
import image4 from '../../../public/image-4.png';

// import image4 from '../../../public/image-4.png';
// import arrow from '../../../public/fluent_arrow-sync-checkmark-20-regular.svg';



function Status() {
  return (
    <div style={{ width: '1245px', height: '879px', left: '128px', top: '351px', position: 'absolute', background: '#FAFAFA', borderRadius: '10px', overflow: 'hidden' }}>
      <img style={{ width: '575px', height: '591px', left: '40px', top: '40px', position: 'absolute', borderRadius: '10px' }} src={image4} />
      <div style={{ left: '655px', top: '40px', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'inline-flex' }}>
        <div style={{ alignSelf: 'stretch' }}>
          <span style={{ color: '#2C7EF8', fontSize: '32px', fontFamily: 'Manrope', fontWeight: 400, textTransform: 'capitalize', lineHeight: '44.80px', wordWrap: 'break-word' }}>
            ONE TIME ONLY
          </span>
          <span style={{ color: 'black', fontSize: '32px', fontFamily: 'Manrope', fontWeight: 400, textTransform: 'capitalize', lineHeight: '44.80px', wordWrap: 'break-word' }}>
            special price for 6 extra Clarifion for only
          </span>
          <span style={{ color: '#2C7EF8', fontSize: '32px', fontFamily: 'Manrope', fontWeight: 400, textTransform: 'capitalize', lineHeight: '44.80px', wordWrap: 'break-word' }}>
            $14 each
          </span>
          <span style={{ color: 'black', fontSize: '32px', fontFamily: 'Manrope', fontWeight: 400, textTransform: 'capitalize', lineHeight: '44.80px', wordWrap: 'break-word' }}>
            ($84.00 total!)
          </span>
        </div>
        <div id="description" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '24px', display: 'inline-flex' }}>
          <div style={{ width: '134px', height: '134px', position: 'relative' }}>
            <img style={{ width: '134px', height: '134px', left: '0px', top: '0px', position: 'absolute', borderRadius: '10px' }} src={removebag} />
          </div>
          <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '15px', display: 'inline-flex' }}>
            <div id="teste-2" style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
              <div style={{ color: 'black', fontSize: '20px', fontFamily: 'Manrope', fontWeight: 400, textTransform: 'capitalize', lineHeight: '28px', wordWrap: 'break-word' }}>Clarifion Air Ionizer</div>
              <div style={{ justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex' }}>
                <div style={{ color: '#969696', fontSize: '16px', fontFamily: 'Manrope', fontWeight: 600, textDecoration: 'line-through', textTransform: 'capitalize', wordWrap: 'break-word' }}>$180</div>
                <div style={{ color: '#2C7EF8', fontSize: '22px', fontFamily: 'Manrope', fontWeight: 600, textTransform: 'capitalize', lineHeight: '30.80px', wordWrap: 'break-word' }}>$84</div>
              </div>
            </div>
            <div id="teste" style={{ width: '98px', height: '18px', position: 'relative' }}>
              <div style={{ width: '18px', height: '18px', left: '0px', top: '0px', position: 'absolute', borderRadius: '16px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: '14.89px', height: '14.22px' }} src="./assets/images/ant-design-star-filled.svg" />
              </div>
              <div style={{ width: '18px', height: '18px', left: '20px', top: '0px', position: 'absolute', borderRadius: '16px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: '14.89px', height: '14.22px' }} src="./assets/images/ant-design-star-filled.svg" />
              </div>
              <div style={{ width: '18px', height: '18px', left: '40px', top: '0px', position: 'absolute', borderRadius: '16px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: '14.89px', height: '14.22px' }} src="./assets/images/ant-design-star-filled.svg" />
              </div>
              <div style={{ width: '18px', height: '18px', left: '60px', top: '0px', position: 'absolute', borderRadius: '16px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: '14.89px', height: '14.22px' }} src="./assets/images/ant-design-star-filled.svg" />
              </div>
              <div style={{ width: '18px', height: '18px', left: '80px', top: '0px', position: 'absolute', borderRadius: '16px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                <img style={{ width: '14.89px', height: '14.22px' }} src="./assets/images/ant-design-star-filled.svg" />
              </div>
            </div>
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '16px', display: 'inline-flex' }}>
              <div style={{ width: '16px', height: '16px', position: 'relative' }}>
                <div style={{ width: '16px', height: '16px', left: '0px', top: '0px', position: 'absolute', background: '#E3EEFF', borderRadius: '9999px' }}></div>
                <div style={{ width: '8.53px', height: '8.53px', left: '3.79px', top: '3.79px', position: 'absolute', background: '#2C7EF8', borderRadius: '9999px' }}></div>
              </div>
              <div style={{ color: '#37465A', fontSize: '16px', fontFamily: 'Manrope', fontWeight: 300, wordWrap: 'break-word' }}>12 left in Stock</div>
            </div>
            <div style={{ width: '398px', color: '#4D5254', fontSize: '16px', fontFamily: 'Manrope', fontWeight: 400, lineHeight: '22.40px', wordWrap: 'break-word' }}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
