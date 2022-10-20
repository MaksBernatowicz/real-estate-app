import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Best from "./components/best/Best";
import Featured from "./components/featured/Featured";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
    </div>
  );
}

export default App;
