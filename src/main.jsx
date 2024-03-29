import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AppCalc from "./AppCalc.jsx";
import STYLES from "./Main.module.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id='document' className={STYLES.container}>
      <span className={STYLES.title}>DOCUMENT</span>
    </div>
    {/* App = console logs and AppCalc is the target counter demo - uncomment the one you want and comment out the other */}
    {/* <App /> */} 
    <AppCalc />
  </React.StrictMode>
);
