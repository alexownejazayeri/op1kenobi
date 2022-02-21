import React from 'react';

// General components
import Mic from "./General/Mic";
import LedIndicator from "./General/LedIndicator";

// Aesthetic components
import UiGroup1 from './Keyboard/Aesthetic/UiGroup1';
import UiGroup2 from './Keyboard/Aesthetic/UiGroup2';




// Active components
import SoundKeys from "./Keyboard/Active/SoundKeys";
import Keys from "./Keyboard/Active/Keys";

const OP1 = () => {
    return (
      <div className="op">
        <Mic />
        <LedIndicator />
        <div className="name">OP-1</div>
        {/* Start Keyboard component */}
        <div className="keyboard">
         <UiGroup1 />                   
          <SoundKeys />
          {/* KeyboardUiGroup2 */}
         <UiGroup2 />
          {/* KeyboardUiGroup2 */}

          <Keys />
        </div>
      </div>
    );
  };

  export default OP1;