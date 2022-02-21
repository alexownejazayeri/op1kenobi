import React, { useEffect } from "react";
import sound from "../../../media/its-a-very-nice.mp3";

const Keys = () => {
  
  const playSound = (url) => {
    var a = new Audio(url);
    console.log(a);
    a.currentTime = 1.2;
    a.play();
  };

  useEffect(() => {
    const onKeyDown = ((e) => {
      document.getElementById(e.key.toUpperCase()).className = "keys__white_pressed";
      playSound(sound);
    });

    const onKeyUp = ((e) => {
      document.getElementById(e.key.toUpperCase()).className = "keys__white";
    })

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    }
  }, []);

  const pressOnHandler = (e) => {
    document.getElementById(e.target.id).className = "keys__white_pressed";
    playSound(sound);
  };

  const pressOffHandler = (e) => {
    document.getElementById(e.target.id).className = "keys__white";
  };

  return (
    <React.Fragment>
      <div className="keys">
        <div
          id="Q"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="W"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="E"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="R"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="T"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="Y"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="U"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="I"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="O"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="P"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="["
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="Z"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="X"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>
      <div className="keys">
        <div
          id="C"
          className="keys__white"
          onMouseDown={pressOnHandler}
          onMouseUp={pressOffHandler}
        ></div>
      </div>

      <div className="btn__base r4c4">
        <div className="btn btn__base__left"></div>
      </div>
      <div className="btn__base r4c5">
        <div className="btn btn__base__mid"></div>
      </div>
      <div className="btn__base r4c6">
        <div className="btn btn__base__right"></div>
      </div>
      <div className="btn__base r4c7">
        <div className="btn btn__base__left"></div>
      </div>
      <div className="btn__base r4c8">
        <div className="btn btn__base__right"></div>
      </div>
      <div className="btn__base r4c9">
        <div className="btn btn__base__left"></div>
      </div>
      <div className="btn__base r4c10">
        <div className="btn btn__base__mid"></div>
      </div>
      <div className="btn__base r4c11">
        <div className="btn btn__base__right"></div>
      </div>
      <div className="btn__base r4c12">
        <div className="btn btn__base__left"></div>
      </div>
      <div className="btn__base r4c13">
        <div className="btn btn__base__right"></div>
      </div>
    </React.Fragment>
  );
};

export default Keys;
