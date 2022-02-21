import React, { useEffect } from "react";

import q from "../../../media/boombap/white-keys/Q.mp3";
import w from "../../../media/boombap/white-keys/W.mp3";
import e from "../../../media/boombap/white-keys/E.mp3";
import r from "../../../media/boombap/white-keys/R.mp3";
import t from "../../../media/boombap/white-keys/T.mp3";
import y from "../../../media/boombap/white-keys/Y.mp3";
import u from "../../../media/boombap/white-keys/U.mp3";
import i from "../../../media/boombap/white-keys/I.mp3";
import o from "../../../media/boombap/white-keys/O.mp3";
import p from "../../../media/boombap/white-keys/P.mp3";
import brack from "../../../media/boombap/white-keys/[.mp3";
import z from "../../../media/boombap/white-keys/Z.mp3";
import x from "../../../media/boombap/white-keys/X.mp3";
import c from "../../../media/boombap/white-keys/C.mp3";



const whiteKeyIds = [
  { id: "Q", sampleUrl: q },
  { id: "W", sampleUrl: w },
  { id: "E", sampleUrl: e },
  { id: "R", sampleUrl: r },
  { id: "T", sampleUrl: t },
  { id: "Y", sampleUrl: y },
  { id: "U", sampleUrl: u },
  { id: "I", sampleUrl: i },
  { id: "O", sampleUrl: o },
  { id: "P", sampleUrl: p },
  { id: "[", sampleUrl: brack },
  { id: "Z", sampleUrl: z },
  { id: "X", sampleUrl: x },
  { id: "C", sampleUrl: c },
];

const WhiteKeys = () => {
  const playSound = (url) => {
    var a = new Audio(url);
    a.currentTime = 0;
    a.play();
  };

  useEffect(() => {
    const onKeyDownWhite = (e) => {
      if (!!whiteKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['id']) { // This line is repetitive and can be DRY'd
        document.getElementById(e.key.toUpperCase()).className =
          "keys__white_pressed";
        playSound(whiteKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['sampleUrl']);
      }
    };

    const onKeyUpWhite = (e) => {
      if (!!whiteKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]) {
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
    playSound(whiteKeyIds.filter((el) => e.target.id.toUpperCase() === el.id)[0]['sampleUrl']);
  };

  const pressOffHandler = (e) => {
    document.getElementById(e.target.id.toUpperCase()).className = "keys__white";
  };

  return (
    <React.Fragment>
      {/* White Keys */}
      {whiteKeyIds.map((el, i) => (
        <div className="keys">
          <div
            key={i}
            id={el.id}
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
