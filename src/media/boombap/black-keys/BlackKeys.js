import React, { useEffect } from "react";

import two from "../../../media/boombap/black-keys/2.mp3";
import three from "../../../media/boombap/black-keys/3.mp3";
import four from "../../../media/boombap/black-keys/4.mp3";
import six from "../../../media/boombap/black-keys/6.mp3";
import seven from "../../../media/boombap/black-keys/7.mp3";
import nine from "../../../media/boombap/black-keys/9.mp3";
import zero from "../../../media/boombap/black-keys/0.mp3";
import dash from "../../../media/boombap/black-keys/-.mp3";
import s from "../../../media/boombap/black-keys/S.mp3";
import d from "../../../media/boombap/black-keys/D.mp3";

console.log(two);

const blackKeyIds = [
  {
    id: "2",
    classOuter: "btn__base r4c4",
    classInner1: "btn",
    classInner2: "btn__base__left",
    sampleUrl: two 
  },
  {
    id: "3",
    classOuter: "btn__base r4c5",
    classInner1: "btn",
    classInner2: "btn__base__mid",
    sampleUrl: three
  },
  {
    id: "4",
    classOuter: "btn__base r4c6",
    classInner1: "btn",
    classInner2: "btn__base__right",
    sampleUrl: four
  },
  {
    id: "6",
    classOuter: "btn__base r4c7",
    classInner1: "btn",
    classInner2: "btn__base__left",
    sampleUrl: six
  },
  {
    id: "7",
    classOuter: "btn__base r4c8",
    classInner1: "btn",
    classInner2: "btn__base__right",
    sampleUrl: seven
  },
  {
    id: "9",
    classOuter: "btn__base r4c9",
    classInner1: "btn",
    classInner2: "btn__base__left",
    sampleUrl: nine
  },
  {
    id: "0",
    classOuter: "btn__base r4c10",
    classInner1: "btn",
    classInner2: "btn__base__mid",
    sampleUrl: zero
  },
  {
    id: "-",
    classOuter: "btn__base r4c11",
    classInner1: "btn",
    classInner2: "btn__base__right",
    sampleUrl: dash
  },
  {
    id: "S",
    classOuter: "btn__base r4c12",
    classInner1: "btn",
    classInner2: "btn__base__left",
    sampleUrl: s
  },
  {
    id: "D",
    classOuter: "btn__base r4c13",
    classInner1: "btn",
    classInner2: "btn__base__right",
    sampleUrl: d
  },
];

const BlackKeys = () => {
  const playSound = (url) => {
    var a = new Audio(url);
    a.currentTime = 0;
    a.play();
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!!blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]) {
        document.getElementById(e.key.toUpperCase()).className = "btn__pressed " + blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['classInner2'];
        playSound(blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['sampleUrl']);
      }
    };

    const onKeyUp = (e) => {
        if (!!blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]) {
            document.getElementById(e.key.toUpperCase()).className = "btn " + blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['classInner2'];
          }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  const pressOnHandlerBlack = (e) => {
      console.log(e);
    document.getElementById(e.target.id).className = "btn__pressed " + blackKeyIds.filter((el) => e.target.id === el.id)[0]['classInner2'];
    playSound(sound);
  };

  const pressOffHandlerBlack = (e) => {
    document.getElementById(e.target.id).className = "btn " + blackKeyIds.filter((el) => e.target.id === el.id)[0]['classInner2'];
};

  return (
    <React.Fragment>
      {/* Black Keys */}
      {blackKeyIds.map((el) => (
        <div className={el.classOuter}>
          <div
            id={el.id}
            className={el.classInner1 + " " + el.classInner2}
            onMouseDown={pressOnHandlerBlack}
            onMouseUp={pressOffHandlerBlack}
          ></div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default BlackKeys;
