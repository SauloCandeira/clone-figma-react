import React from 'react';

function Status2() {
  const stepStyles = {
    container: {
      width: '1245px',
      left: '128px',
      top: '271px',
      position: 'absolute',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'inline-flex',
    },
    step: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '20px',
      display: 'flex',
    },
    circle: {
      width: '40px',
      height: '40px',
      position: 'relative',
    },
    innerCircle: {
      width: '40px',
      height: '40px',
      left: '0px',
      top: '0px',
      position: 'absolute',
      borderRadius: '9999px',
      border: '2px #85BF55 solid',
    },
    checkmark: {
      width: '16px',
      height: '16px',
      left: '12px',
      top: '12px',
      position: 'absolute',
    },
    checkmarkIcon: {
      width: '20px',
      height: '16px',
      left: '-2px',
      top: '0px',
      position: 'absolute',
    },
    checkmarkLine1: {
      width: '20px',
      height: '14px',
      left: '0px',
      top: '1px',
      position: 'absolute',
      border: '2.50px white solid',
    },
    checkmarkLine2: {
      width: '16px',
      height: '16px',
      left: '2px',
      top: '0px',
      position: 'absolute',
      opacity: '0',
    },
    stepNumber: {
      width: '40px',
      height: '40px',
      position: 'relative',
      background: '#2C7EF8',
      borderRadius: '9999px',
      border: '2px #2C7EF8 solid',
    },
    stepNumberText: {
      left: '14px',
      top: '13px',
      position: 'absolute',
      color: 'white',
      fontSize: '20px',
      fontFamily: 'Manrope',
      fontWeight: '400',
      textTransform: 'capitalize',
      lineHeight: '22px',
      wordWrap: 'break-word',
    },
    stepText: {
      color: 'black',
      fontSize: '20px',
      fontFamily: 'Manrope',
      fontWeight: '400',
      textTransform: 'capitalize',
      lineHeight: '22px',
      wordWrap: 'break-word',
    },
    specialStepText: {
      color: 'black',
      fontSize: '20px',
      fontFamily: 'Manrope',
      fontWeight: '700',
      textTransform: 'capitalize',
      lineHeight: '22px',
      wordWrap: 'break-word',
    },
  };

  return (
    <div style={stepStyles.container}>
      <div style={stepStyles.step}>
        <div style={stepStyles.circle}>
          <div style={stepStyles.innerCircle}></div>
          <div style={stepStyles.checkmark}>
            <div style={stepStyles.checkmarkIcon}>
              <div style={stepStyles.checkmarkLine1}></div>
              <div style={stepStyles.checkmarkLine2}></div>
            </div>
          </div>
        </div>
        <div style={stepStyles.stepText}>Step 1 : Cart Review</div>
      </div>
      <div style={stepStyles.step}>
        <div style={stepStyles.circle}>
          <div style={stepStyles.innerCircle}></div>
          <div style={stepStyles.checkmark}>
            <div style={stepStyles.checkmarkIcon}>
              <div style={stepStyles.checkmarkLine1}></div>
              <div style={stepStyles.checkmarkLine2}></div>
            </div>
          </div>
        </div>
        <div style={stepStyles.stepText}>Step 2 : Checkout</div>
      </div>
      <div style={stepStyles.step}>
        <div style={stepStyles.stepNumber}>
          <div style={stepStyles.stepNumberText}>3</div>
        </div>
        <div style={stepStyles.specialStepText}>Step 3 : Special Offer</div>
      </div>
      <div style={stepStyles.step}>
        <div style={stepStyles.stepNumber}>
          <div style={stepStyles.stepNumberText}>4</div>
        </div>
        <div style={stepStyles.stepText}>Step 4 : Confirmation</div>
      </div>
    </div>
  );
}

export default Status2;
