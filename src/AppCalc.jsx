import { useState } from "react";
import STYLES from "./AppCalc.module.scss";
const AppCalc = () => {
  const [counter, setCounter] = useState(0);
  const [enableStopPropagation, setEnableStopPropagation] = useState(false);

  const handleWhiteScore = (event) => {
    enableStopPropagation && event.stopPropagation();
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleBlackScore = (event) => {
    enableStopPropagation && event.stopPropagation();
    setCounter((prevCounter) => prevCounter + 2);
  };

  const handleBlueScore = (event) => {
    enableStopPropagation && event.stopPropagation();
    setCounter((prevCounter) => prevCounter + 3);
  };

  const handleRedScore = (event) => {
    enableStopPropagation && event.stopPropagation();
    setCounter((prevCounter) => prevCounter + 5);
  };

  const handleYellowScore = (event) => {
    enableStopPropagation && event.stopPropagation();
    setCounter((prevCounter) => prevCounter + 10);
  };

  return (
    <>
      <div className={STYLES.container}>
        <div className={STYLES.whiteCircle} onClick={handleWhiteScore}>
          <span className={STYLES.outerScoreWhite}>1</span>
          <div className={STYLES.blackCircle} onClick={handleBlackScore}>
            <span className={STYLES.outerScoreBlack}>2</span>
            <div className={STYLES.blueCircle} onClick={handleBlueScore}>
              <span className={STYLES.outerScoreBlue}>3</span>
              <div className={STYLES.redCircle} onClick={handleRedScore}>
                <span className={STYLES.outerScoreRed}>5</span>
                <div className={STYLES.yellowCircle} onClick={handleYellowScore}>
                  <span className={STYLES.score}>10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Score total is: {counter}</div>
      <div>
        <button
          className={STYLES.resetScore}
          onClick={() => {
            setCounter(0);
          }}
        >
          RESET Score
        </button>
        <button
          className={STYLES.resetScore}
          onClick={() => {
            setEnableStopPropagation(!enableStopPropagation);
          }}
        >
          stopPropagation: {enableStopPropagation.toString()}
        </button>
      </div>
    </>
  );
};

export default AppCalc;
