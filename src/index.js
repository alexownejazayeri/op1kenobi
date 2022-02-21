import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import OP1 from "./components/OP1";

const App = () => {
  return (
    <div>
      <div className="base">
        <OP1 />
      </div>{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));