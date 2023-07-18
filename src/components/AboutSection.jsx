import React, { useState, useRef, useEffect, useMemo } from "react";
import "../styles/aboutSection.scss";

const AboutSection = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
    const timerIdRef = useRef(null);

    const programmingLanguages = useMemo(
        () => ["JS", "HTML5", "SCSS", "CSS3", "ReactJs", "Node.js"],
        []
    );

    const languageColors = {
        JS: "#f7df1e",
        HTML5: "#e34c26",
        SCSS: "#c69",
        CSS3: "#1572b6",
        ReactJs: "#61dafb",
        "Node.js": "#68a063",
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
            <h1>
                Bringing ideas to life through{" "}
                <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        cursor: "pointer",
                        color: isHovering
                            ? languageColors[currentLanguage]
                            : "transparent",
                    }}>
                    {isHovering ? currentLanguage : "code"}
                </span>{" "}
                and design
            </h1>
        </div>
    );
};

export default AboutSection;
