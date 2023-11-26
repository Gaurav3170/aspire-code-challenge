import React, { useEffect, useState } from "react";
import "./App.css";
import MobileComponent from "./components/MobileComponent/MobileComponent";
import DesktopComponent from "./components/DesktopComponent/DesktopComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="home">
        {windowWidth < 768 ? <MobileComponent /> : <DesktopComponent />}
      </div>
      <div>
        <Routes>
          <Route path="/" />
          <Route path="/card" />
          <Route path="/credit" />
          <Route path="/payments" />
          <Route path="/settings" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
