import Box from "../components/box/Box";
import { displayEvents, displayEventPhase } from "../utils/displayUtils";
import STYLES from "./AppContainer.module.scss";

const AppContainer = () => {
  const handleClick = (event) => {
    // console.log(`Event ${event.eventPhase} at ${event.currentTarget.id}`);
    displayEvents(event);
    displayEventPhase(event);

    // event.stopPropagation();
  };
  return (
    <div id='app-container' className={STYLES.appContainer}>
      <div className={STYLES.title}>APP CONTAINER</div>
      <div className={STYLES.boxOuter}>
        <div className={STYLES.title}>OUTER BOX</div>
        <div className={STYLES.boxInner}>
          <div className={STYLES.title}>INNER BOX</div>
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
