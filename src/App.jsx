import Router from "./Router/Router";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
