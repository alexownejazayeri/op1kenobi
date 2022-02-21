import React from "react";

import Speaker from "./UiGroup1/Speaker";
import VolumeHelpMetronome from "./UiGroup1/VolumeHelpMetronome";
import Display from "./UiGroup1/Display";
import ParamKnobs from "./UiGroup1/ParamKnobs";
import MicInput from "./UiGroup1/MicInput";
import AlbumUsb from "./UiGroup1/AlbumUsb";
import TrackSelectors from "./UiGroup1/TrackSelectors";
import Synthesizer from "./UiGroup1/Synthesizer";
import Drums from "./UiGroup1/Drums";
import Mixer from "./UiGroup1/Mixer";
import FourTrack from "./UiGroup1/FourTrack";

const UiGroup1 = () => {
  return (
    <React.Fragment>
      <Speaker />
      <VolumeHelpMetronome />
      <Display />
      <ParamKnobs />
      <MicInput />
      <AlbumUsb />
      <Synthesizer />
      <Drums />
      <FourTrack />
      <Mixer />
      <TrackSelectors />
    </React.Fragment>
  );
};

export default UiGroup1;