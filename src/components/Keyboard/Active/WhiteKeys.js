import React, { useEffect } from "react";
import sound from "../../../media/its-a-very-nice.mp3";

const whiteKeyIds = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "Z",
  "X",
  "C",
];

const WhiteKeys = () => {
  const playBoratSound = (url) => {
    var a = new Audio(url);
    console.log(a);
    a.currentTime = 1.2;
    a.play();
  };

  useEffect(() => {
    const onKeyDownWhite = (e) => {
      if (!!whiteKeyIds.filter((el) => e.key.toUpperCase() === el)[0]) {
        document.getElementById(e.key.toUpperCase()).className =
          "keys__white_pressed";
        playBoratSound(sound);
      }
    };

    const onKeyUpWhite = (e) => {
      if (!!whiteKeyIds.filter((el) => e.key.toUpperCase() === el)[0]) {
        document.getElementById(e.key.toUpperCase()).className = "keys__white";
      }
    };

    document.addEventListener("keydown", onKeyDownWhite);
    document.addEventListener("keyup", onKeyUpWhite);

    return () => {
      document.removeEventListener("keydown", onKeyDownWhite);
      document.removeEventListener("keyup", onKeyUpWhite);
    };
  }, []);

  const pressOnHandler = (e) => {
    document.getElementById(e.target.id).className = "keys__white_pressed";
    playBoratSound(sound);
  };

  const pressOffHandler = (e) => {
    document.getElementById(e.target.id).className = "keys__white";
  };

  return (
    <React.Fragment>
      {/* White Keys */}
      {whiteKeyIds.map((el, i) => (
        <div className="keys">
          <div
            key={i}
            id={el}
            className="keys__white"
            onMouseDown={pressOnHandler}
            onMouseUp={pressOffHandler}
          ></div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default WhiteKeys;
