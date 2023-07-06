import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Why from "./components/Why";
import Contract from "./components/Contract";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/why" element={<Why />} />
            <Route path="/contract" element={<Contract/>}/>
            {/* <Route path="/*" element={<Error />} /> */}
          </Routes>
        </div>
        {/* <Toaster /> */}
      </Router>
    </>
  );
}

export default App;
