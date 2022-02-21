import React from 'react';

const VolumeHelpMetronome = () => {
    return (
      <React.Fragment>
        <div className="sw2">
          <div className="switch">
            <div className="circle"></div>
          </div>
        </div>
        <div className="btn__base r2c3">
          <div className="btn">
            <div className="talk"></div>
            <div className="talkrect"></div>
          </div>
        </div>
        <div className="btn__base r2c4">
          <div className="btn">
            <div className="met">
              <div className="met__tri"></div>
              <div className="met__pin">
                <div className="pin-line"></div>
                <div className="pin-top"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

export default VolumeHelpMetronome;