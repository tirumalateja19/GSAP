import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import NavBar from "./components/Navigation/NavBar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
const App = () => {
  return (
    <div className="text-white h-full w-full">
      <NavBar />
      {/* <FullScreenNav />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
