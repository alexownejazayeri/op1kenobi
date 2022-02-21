import React from "react";

import Sequencer from "./UiGroup2/Sequencer";
import LiftErase from "./UiGroup2/LiftErase";
import Drop from "./UiGroup2/Drop";
import Split from "./UiGroup2/Split";
import Record from "./UiGroup2/Record";
import Play from "./UiGroup2/Play";
import Stop from "./UiGroup2/Stop";
import OctaveDown from "./UiGroup2/OctaveDown";
import OctaveUp from "./UiGroup2/OctaveUp";
import Shift from "./UiGroup2/Shift";

const UiGroup2 = () => {
  return (
    <React.Fragment>
      <Sequencer />
      <LiftErase />
      <Drop />
      <Split />
      <Record />
      <Play />
      <Stop />
      <OctaveDown />
      <OctaveUp />
      <Shift />
    </React.Fragment>
  );
};

export default UiGroup2;
