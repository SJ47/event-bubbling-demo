import { displayEvent } from "../utils/displayUtils";
import STYLES from "./AppContainer.module.scss";

const AppContainer = () => {
  const handleAppContainerClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    alert("App Container Clicked");
  };
  const handleAppContainerCapturedClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    // alert("App Container Clicked");
  };

  const handleOuterBoxClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    alert("Outer Box Clicked");
  };
  const handleOuterBoxCaptureClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    // alert("Outer Box Clicked");
  };

  const handleInnerBoxClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    alert("Inner Box Clicked");
  };
  const handleInnerBoxCaptureClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
    // alert("Inner Box Clicked");
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
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
