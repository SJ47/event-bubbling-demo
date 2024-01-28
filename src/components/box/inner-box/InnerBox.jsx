import { useState } from "react";
import STYLES from "./InnerBox.module.scss";
import { displayEventPhase, displayEvents } from "../../../utils/displayUtils";

const InnerBox = () => {
  const [enableStopPropagation, setEnableStopPropagation] = useState(false);

  const handleInnerBoxClick = (event) => {
    displayEvents(event);
    displayEventPhase(event);
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
        onClick={handleInnerBoxClick}
        onClickCapture={handleInnerBoxClick}
      >
        InnerBox
        {/* <button onClick={handleButtonClick} onClickCapture={handleInnerBoxClick}>
          {buttonText}
        </button> */}
      </div>
      {/* <button onClick={listAllEventListeners}>Get Listeners</button> */}
      {/* <div
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        onClickCapture={() => setCounter((prevCounter) => prevCounter + 1)}
      >
        <button
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
          onClickCapture={() => setCounter((prevCounter) => prevCounter + 1)}
        >
          Counter value is: {counter}
        </button>
      </div> */}
    </>
  );
};

export default InnerBox;
