import React, { useEffect } from "react";
import sound from "../../../media/its-a-very-nice.mp3";

const blackKeyIds = [
  {
    id: "2",
    classOuter: "btn__base r4c4",
    classInner1: "btn",
    classInner2: "btn__base__left",
  },
  {
    id: "3",
    classOuter: "btn__base r4c5",
    classInner1: "btn",
    classInner2: "btn__base__mid",
  },
  {
    id: "4",
    classOuter: "btn__base r4c6",
    classInner1: "btn",
    classInner2: "btn__base__right",
  },
  {
    id: "6",
    classOuter: "btn__base r4c7",
    classInner1: "btn",
    classInner2: "btn__base__left",
  },
  {
    id: "7",
    classOuter: "btn__base r4c8",
    classInner1: "btn",
    classInner2: "btn__base__right",
  },
  {
    id: "9",
    classOuter: "btn__base r4c9",
    classInner1: "btn",
    classInner2: "btn__base__left",
  },
  {
    id: "0",
    classOuter: "btn__base r4c10",
    classInner1: "btn",
    classInner2: "btn__base__mid",
  },
  {
    id: "-",
    classOuter: "btn__base r4c11",
    classInner1: "btn",
    classInner2: "btn__base__right",
  },
  {
    id: "S",
    classOuter: "btn__base r4c12",
    classInner1: "btn",
    classInner2: "btn__base__left",
  },
  {
    id: "D",
    classOuter: "btn__base r4c13",
    classInner1: "btn",
    classInner2: "btn__base__right",
  },
];

const BlackKeys = () => {
  const playBoratSound = (url) => {
    var a = new Audio(url);
    a.currentTime = 1.2;
    a.play();
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!!blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]) {
        document.getElementById(e.key.toUpperCase()).className = "btn__pressed " + blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['classInner2'];
        playBoratSound(sound);
      }
    };

    const onKeyUp = (e) => {
        if (!!blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]) {
            document.getElementById(e.key.toUpperCase()).className = "btn " + blackKeyIds.filter((el) => e.key.toUpperCase() === el.id)[0]['classInner2'];
            playBoratSound(sound);
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
    playBoratSound(sound);
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
