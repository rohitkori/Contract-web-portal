import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/*" element={<Error />} /> */}
          </Routes>
        </div>
        {/* <Toaster /> */}
      </Router>
    </>
  );
}

export default App;
