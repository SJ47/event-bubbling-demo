import { displayEvent } from "../utils/displayUtils";
import STYLES from "./AppContainer.module.scss";

const AppContainer = () => {
  const handleAppContainerClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
  };

  const handleOuterBoxClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
  };

  const handleInnerBoxClick = (event) => {
    displayEvent(event);
    // event.stopPropagation();
  };

  return (
    <div
      id='app-container'
      className={STYLES.appContainer}
      onClick={handleAppContainerClick}
      onClickCapture={handleAppContainerClick}
    >
      <div className={STYLES.title}>APP CONTAINER</div>
      <div
        id='outer-box'
        className={STYLES.boxOuter}
        onClick={handleOuterBoxClick}
        onClickCapture={handleOuterBoxClick}
      >
        <div className={STYLES.title}>OUTER BOX</div>
        <div
          id='inner-box'
          className={STYLES.boxInner}
          onClick={handleInnerBoxClick}
          onClickCapture={handleInnerBoxClick}
        >
          <div className={STYLES.title}>INNER BOX</div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
