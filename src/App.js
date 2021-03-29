import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Hero, Navbar, About, Showcase, Footer } from "./components";

const App = () => {
    const [load, setLoad] = useState(false);

    setTimeout(() => {
        setLoad(true);
    }, 14000);

    const handleSkip = () => setLoad(true);

    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Hero handleSkip={handleSkip} load={load} />
            <About load={load} />
            <Showcase load={load} />
            <Footer load={load} />
        </>
    );
};

export default App;
