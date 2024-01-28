import { useEffect } from "react";
import STYLES from "./App.module.scss";
import AppContainer from "./containers/AppContainer";
import { displayEventPhase, displayEvents } from "./utils/displayUtils";

function App() {
  const handleWindowClick = (event) => {
    console.log(`CurrentTarget: ${event.currentTarget.Window.name}`);
    switch (event.eventPhase) {
      case 1:
        console.log(`Event CAPTURE PHASE at ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
        break;
      case 2:
        console.log(
          `Event TARGET PHASE reached at ${event.currentTarget.Window.name}`
        );
        console.log(`target: ${event.target.id}`);
        break;
      case 3:
        console.log(`Event BUBBLING PHASE at ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
        break;
      default:
        console.log(
          `Event doing NOTHING at ${event.currentTarget.iWindow.named}`
        );
        console.log(`target: ${event.target.id}`);
    }
  };

  const handleDocumentClick = (event) => {
    console.log(`CurrentTarget: ${event.currentTarget.nodeName}`);
    switch (event.eventPhase) {
      case 1:
        console.log(`Event CAPTURE PHASE at ${event.currentTarget.nodeName}`);
        break;
      case 2:
        console.log(
          `Event TARGET PHASE reached at ${event.currentTarget.nodeName}`
        );
        break;
      case 3:
        console.log(`Event BUBBLING PHASE at ${event.currentTarget.nodeName}`);

        break;
      default:
        console.log(`Event doing NOTHING at ${event.currentTarget.nodeName}`);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("click", handleWindowClick);
    window.addEventListener("click", handleWindowClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("click", handleWindowClick);
      window.removeEventListener("click", handleWindowClick, true);
    };
  }, []);

  return (
    <div className={STYLES.container}>
      <AppContainer />
    </div>
  );
}

export default App;
