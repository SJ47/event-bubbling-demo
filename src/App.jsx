import { useEffect } from "react";
import STYLES from "./App.module.scss";
import AppContainer from "./containers/AppContainer";

function App() {
  const handleWindowClick = (event) => {
    console.log("------------");

    console.log(`CurrentTarget: ${event.currentTarget.Window.name}`);
    switch (event.eventPhase) {
      case 1:
        console.log(`Event CAPTURE Phase: ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
        break;
      case 2:
        console.log(`Event TARGET Phase: ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
        break;
      case 3:
        console.log(`Event BUBBLING Phase: ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
        break;
      default:
        console.log(`Event doing NOTHING: ${event.currentTarget.Window.name}`);
        console.log(`target: ${event.target.id}`);
    }
  };

  const handleDocumentClick = (event) => {
    console.log("------------");

    console.log(`CurrentTarget: ${event.currentTarget.nodeName.slice(1)}`);
    switch (event.eventPhase) {
      case 1:
        console.log(
          `Event CAPTURE Phase: ${event.currentTarget.nodeName.slice(1)}`
        );
        console.log(`target: ${event.target.id}`);
        // alert("CAPTURE PHASE: Logging that an element was clicked!");

        break;
      case 2:
        console.log(
          `Event TARGET Phase: ${event.currentTarget.nodeName.slice(1)}`
        );
        console.log(`target: ${event.target.id}`);
        break;
      case 3:
        console.log(
          `Event BUBBLING Phase: ${event.currentTarget.nodeName.slice(1)}`
        );
        console.log(`target: ${event.target.id}`);
        alert("BUBBLE PHASE: Logging that an element was clicked!");
        break;
      default:
        console.log(
          `Event doing NOTHING: ${event.currentTarget.nodeName.slice(1)}`
        );
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
