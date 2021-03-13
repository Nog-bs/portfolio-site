import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { Hero, Navbar, About, Showcase } from "./components";

const App = () => {
  const [load, setLoad] = useState(false);
  const [height] = useState(50);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  setTimeout(() => {
    setLoad(true);
  }, 10000);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero load={load} />
      <About load={load} height={height + offsetY / 50} />
      {/* <Showcase load={load} height={height + offsetY / 50} /> */}
    </>
  );
};

export default App;
