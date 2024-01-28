import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import STYLES from "./Main.module.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id='document' className={STYLES.container}>
      {/* <div id='document' onClick={handleClick}> */}
      <span className={STYLES.title}>DOCUMENT</span>
    </div>
    <App />
  </React.StrictMode>
);
