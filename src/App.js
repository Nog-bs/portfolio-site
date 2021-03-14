import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Hero, Navbar, About, Showcase } from "./components";

const App = () => {
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 10000);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero load={load} />
      <About load={load} />
      <Showcase id="showcase" load={load} />
    </>
  );
};

export default App;
