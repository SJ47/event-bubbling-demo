import { useState } from "react";
import STYLES from "./Box.module.scss";
// import { displayEventPhase, displayEvents } from "../../utils/displayUtils";
import InnerBox from "./inner-box/InnerBox";
const Box = () => {
  const [enableStopPropagation, setEnableStopPropagation] = useState(false);

  const handleBoxClick = (event) => {
    // displayEvents(event);
    // displayEventPhase(event);
    enableStopPropagation && event.stopPropagation();
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setEnableStopPropagation(!enableStopPropagation);
  };

  const buttonText = enableStopPropagation
    ? "stopPropogation Enabled"
    : "stopPropogation Disabled";

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div
        id='box'
        className={STYLES.container}
        onClick={handleBoxClick}
        onClickCapture={handleBoxClick}
      >
        BOX
        <div>
          <InnerBox />
        </div>
      </div>
    </>
  );
};

export default Box;
