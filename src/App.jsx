"use client";

import Contact from "../src/components/Contact";
import HeroSection from "../src/components/HeroSection";
import NavBar from "../src/components/NavBar";
import { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import colors from "../src/assets/colors";
import AboutSection from "../src/components/AboutSection";
import "./App.scss";

const App = () => {
    const homeRef = useRef(null); // eslint-disable-line
    // const navBarRef = useRef(null);
    const [showContact, setShowContact] = useState(false);

    const handleContactClick = () => {
        setShowContact(true);
    };

    const handleCloseContact = () => {
        setShowContact(false);
    };

    const [selectColor, setSelectedColors] = useState(colors[0]); // eslint-disable-line

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColors = colors[randomIndex];
        setSelectedColors(randomColors);
    }, []);

    return (
        <div className="main">
            <div className="cursor__dot">
                <AnimatedCursor
                    innerSize={15}
                    outerSize={35}
                    color="36, 36, 36"
                    outerAlpha={0.4}
                    innerScale={0.7}
                    outerScale={3}
                    // outerAlpha={0}
                    // hasBlendMode={false}
                    innerStyle={{
                        backgroundColor: "rgb(255,205,109)",
                        zIndex: 100000,
                    }}
                    outerStyle={{
                        // backgroundColor: 'rgba(193, 11, 111, 0.4)',
                        // border: '3px solid rgba(255, 255, 255, 0.4)',
                        zIndex: 100000,
                    }}
                    clickables={["p", "a", "span"]}
                    showSystemCursor={false}

                    // blend mode cursor

                    // color="#fff"
                    // innerSize={8}
                    // outerSize={35}
                />
            </div>

            <NavBar onContactClick={handleContactClick} />
            {showContact && <Contact onClose={handleCloseContact} />}
            <HeroSection />
            <AboutSection />
        </div>
    );
};

export default App;
