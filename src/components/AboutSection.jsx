import React, { useState, useRef, useEffect, useMemo } from "react";
import "../styles/aboutSection.scss";
import { Bounce } from "react-awesome-reveal";
import "animate.css";
import MY_DP from "../assets/imgs/undefined-transformed.png";

const AboutSection = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
    const timerIdRef = useRef(null);

    const programmingLanguages = useMemo(
        () => ["JavaScript", "HTML5", "SCSS", "CSS3", "ReactJs", "Node.js"],
        []
    );

    const languageColors = {
        JavaScript: "#edda42",
        HTML5: "#e34c26",
        SCSS: "#ed53a0",
        CSS3: "#1572b6",
        ReactJs: "#219dbf",
        "Node.js": "#48ab3f",
    };

    const currentLanguage = useMemo(
        () => programmingLanguages[currentLanguageIndex],
        [currentLanguageIndex, programmingLanguages]
    );

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        if (isHovering) {
            // Set a timeout to update the currentLanguageIndex every 1.2 seconds
            const interval = 1200;
            timerIdRef.current = setInterval(() => {
                setCurrentLanguageIndex(
                    (prevIndex) => (prevIndex + 1) % programmingLanguages.length
                );
            }, interval);
        } else {
            clearInterval(timerIdRef.current);
            setCurrentLanguageIndex(0);
        }

        return () => {
            clearInterval(timerIdRef.current);
        };
    }, [isHovering, programmingLanguages]);

    return (
        <div className="about_container">
            <Bounce>
                <h1>
                    Bringing ideas to life through <br />
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            color: isHovering
                                ? languageColors[currentLanguage]
                                : "#161616",
                            fontSize: isHovering ? "2.5rem" : "3rem",
                            transition: "all 0.5s ease",
                        }}>
                        {isHovering ? currentLanguage : "code"}
                    </span>{" "}
                    and design
                </h1>
            </Bounce>

            <div className="my_info_container">
                {/* <div className="image_container">
                    <img src={MY_DP} alt="my-profile" />
                </div> */}
            </div>
        </div>
    );
};

export default AboutSection;
