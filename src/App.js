import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Hero, Navbar, Showcase } from "./components";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Showcase />
    </>
  );
};

export default App;
