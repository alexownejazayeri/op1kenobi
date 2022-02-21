import React from "react";

const SoundKeys = () => {
  return (
    <React.Fragment>
      {/* Start SoundKeys */}
      <div className="btn__base r3c9">
        <div className="btn">
          <div className="numbox">
            <div className="num">1</div>
            <div className="btm">IN</div>
          </div>
        </div>
      </div>
      <div className="btn__base r3c10">
        <div className="btn">
          <div className="numbox">
            <div className="num">2</div>
            <div className="btm">OUT</div>
          </div>
        </div>
      </div>

      <div className="btn__base r3c11">
        <div className="btn">
          <div className="numbox">
            <div className="num">3</div>
            <div className="btm">
              <div className="rect"></div>
              <div className="rect2"></div>
              <div className="tri"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn__base r3c12">
        <div className="btn">
          <div className="numbox">
            <div className="num">4</div>
            <div className="btm">
              {" "}
              <div className="tape">
                <div className="tape__circle"></div>
                <div className="tape__line"></div>
                <div className="tape__circle__right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn__base r3c13">
        <div className="btn">
          <div className="numbox">
            <div className="num">5</div>
            <div className="btm">Я</div>
          </div>
        </div>
      </div>
      <div className="btn__base r3c14">
        <div className="btn">
          <div className="numbox">
            <div className="num">6</div>
            <div className="btm">
              <div className="orange__dots">
                <div className="orange__dots__dot"></div>
                <div className="orange__dots__dot"></div>
                <div className="orange__dots__dot"></div>
                <div className="orange__dots__dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn__base r3c15">
        <div className="btn">
          <div className="numbox">
            <div className="num">7</div>
            <div className="btm">M1</div>
          </div>
        </div>
      </div>
      <div className="btn__base r3c16">
        <div className="btn">
          <div className="numbox">
            <div className="num">8</div>
            <div className="btm">M2</div>
          </div>
        </div>
      </div>
      {/* End SoundKeys */}
    </React.Fragment>
  );
};

export default SoundKeys;
