"use client";
import { Presentation } from "lucide-react";
import "../styles/herosection.scss";
import UseAnimations from "react-useanimations";
import download from "react-useanimations/lib/download";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import { useState, useEffect, useMemo } from "react";
import Blob from "../assets/Blob";
import "animate.css";
import HeroParticle from "./Particles/HeroParticle";

const HeroSection = () => {
    //   const jsonData = `res.status(200).json({
    //     greeting: 'Hello Peps!👋',
    //     data: {
    //       desc: 'welcome to my profile',
    //       message: 'Meet a geeky guy!👨 and tech enthusiast 🧑‍💻',
    //     },
    //   })`;

    const [content, setContent] = useState({
        span1: "Web",
        span2: "App",
    });

    const handleHover = (span) => {
        if (span === "span1") {
            setContent({ span1: "App", span2: "Web" });
        } else if (span === "span2") {
            setContent({ span1: "Web", span2: "App" });
        }
    };

    const contentArray = useMemo(
        () => ["Hello", "Holla", "Ciao", "Bonjour", "Namaste", "Salam"],
        []
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentContent, setCurrentContent] = useState(
        contentArray[currentIndex]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % contentArray.length
            );
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [contentArray.length]);

    useEffect(() => {
        setCurrentContent(contentArray[currentIndex]);
    }, [currentIndex, contentArray]);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id="hero" className="container">
            {/* <HeroParticle /> */}
            <Blob />
            <Jump>
                <p className="sub-heading">
                    <span className="font-bold text-gray-700">
                        {currentContent}
                    </span>
                    {`👋, I'm Alok Karn and I'm a`}
                </p>
            </Jump>
            <h1 className="main_line animate__animated animate__tada">
                <span
                    className="span-1"
                    onMouseEnter={() => handleHover("span1")}>
                    {content.span1}
                </span>{" "}
                /{" "}
                <span
                    className="span-2"
                    onMouseEnter={() => handleHover("span2")}
                    // onMouseLeave={handleHover}
                >
                    {content.span2}
                </span>{" "}
                Developer <br />
                Building Digital Fantasies
            </h1>
            <Zoom bottom>
                <p className="desc">
                    I love designing and building beautiful and highly
                    functional applications. <br /> I am a self-taught developer
                    and I am always looking for new opportunities to learn and
                    grow. <br />
                    Love bringing ideas to life through code and design.{" "}
                    {`Let's`}
                    create something extraordinary together! 🛠️
                </p>
            </Zoom>

            <div className="button_section">
                <a
                    href="/src/assets/docs/Resume_ALOK.pdf"
                    className="download-btn"
                    download="Resume_ALOK.pdf"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    Resume
                    <UseAnimations
                        animation={download}
                        size={24}
                        autoplay={true}
                        loop={true}
                        fillColor={!isHovered ? "#242424" : "#f0c371"}
                        strokeColor={!isHovered ? "#242424" : "#f0c371"}
                    />
                </a>
                {/* eslint-disable-next-line*/}
                <a href="#" className="my-work-btn">
                    {" "}
                    My Work <Presentation />
                </a>
            </div>
            <div className="pattern-img"></div>
        </div>
    );
};

export default HeroSection;
