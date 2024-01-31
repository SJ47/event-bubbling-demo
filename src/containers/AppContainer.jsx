import { useState } from "react";
import { displayEvent } from "../utils/displayUtils";
import STYLES from "./AppContainer.module.scss";

const AppContainer = () => {
  const [enableStopPropagationInnerBox, setEnableStopPropagationInnerBox] =
    useState(false);

  const handleAppContainerClick = (event) => {
    displayEvent(event);
    alert("App Container Clicked");
  };
  const handleAppContainerCapturedClick = (event) => {
    displayEvent(event);
  };

  const handleOuterBoxClick = (event) => {
    displayEvent(event);
    alert("Outer Box Clicked");
  };
  const handleOuterBoxCaptureClick = (event) => {
    displayEvent(event);
  };

  const handleInnerBoxClick = (event) => {
    enableStopPropagationInnerBox && event.stopPropagation();
    displayEvent(event);
    alert("Inner Box Clicked");
  };

  const handleInnerBoxCaptureClick = (event) => {
    displayEvent(event);
  };

  const handleStopPropagationInnerBox = (event) => {
    event.stopPropagation();
    setEnableStopPropagationInnerBox(!enableStopPropagationInnerBox);
    event.stopImmediatePropagation;
  };

  return (
    <div
      id='app-container'
      className={STYLES.appContainer}
      onClick={handleAppContainerClick}
      onClickCapture={handleAppContainerCapturedClick}
    >
      <div className={STYLES.title}>APP CONTAINER</div>
      <div
        id='outer-box'
        className={STYLES.boxOuter}
        onClick={handleOuterBoxClick}
        onClickCapture={handleOuterBoxCaptureClick}
      >
        <div className={STYLES.title}>OUTER BOX</div>
        <div
          id='inner-box'
          className={STYLES.boxInner}
          onClick={handleInnerBoxClick}
          onClickCapture={handleInnerBoxCaptureClick}
        >
          <div className={STYLES.title}>INNER BOX</div>
          <label>
            <input
              type='checkbox'
              checked={enableStopPropagationInnerBox}
              onMouseLeave={handleStopPropagationInnerBox}
              onChange={handleStopPropagationInnerBox}
              id='checkbox-id'
            />
            stopPropagation
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
