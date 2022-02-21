import React from 'react';

const Display = () => {
    return( 
        <div className="display">
        <div className="rect__num"></div>
        <div className="time">0:05:13</div>

        <div className="line__tapes">
          <div className="line__tapes__line1"></div>
          <div className="line__tapes__line2"></div>
          <div className="line__tapes__line3"></div>
          <div className="line__tapes__line4"></div>
          <div className="line__tapes__line5"></div>
          <div className="line__tapes__line6"></div>
        </div>

        <div className="center__line"></div>

        <div className="line__btm">
          <div className="line__btm__line"></div>
          <div className="line__btm__line"></div>
          <div className="line__btm__line"></div>
          <div className="line__btm__line"></div>
          <div className="line__btm__line"></div>
          <div className="line__btm__line"></div>
        </div>

        <div className="btm__color__line">
          <div className="btm__color__line__red"></div>
          <div className="btm__color__line__blue"></div>
          <div className="btm__color__line__green"></div>
        </div>

        <div className="line__right">
          <div className="line__right__circle"></div>
          <div className="line__right__line__top"></div>
          <div className="line__right__line__btm"></div>
        </div>

        <div className="repeat">
          <div className="rect"></div>
          <div className="rect2"></div>
          <div className="tri"></div>
        </div>
        <div className="mid__lines">
          <div className="mid__line"></div>
          <div className="mid__line"></div>
          <div className="mid__line"></div>
          <div className="mid__line"></div>
          <div className="mid__line"></div>
        </div>

        <div className="center__box"></div>
        <div className="left__circle">
          <div className="left__circle__dot"></div>
        </div>
        <div className="right__circle">
          <div className="right__circle__line"></div>
        </div>
        <div className="side__circle"></div>
        <div className="side__circle2"></div>

        <div className="tapes">
          <div className="tapes__tape">
            <div className="three__circles">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
            <div className="three__lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <div className="tapes__tape__right">
            <div className="three__circles">
              <div className="circle__tape"></div>
              <div className="circle1"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
            </div>
            <div className="three__lines">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>

          <div className="glare"></div>
        </div>
      </div>
    )
}

export default Display;