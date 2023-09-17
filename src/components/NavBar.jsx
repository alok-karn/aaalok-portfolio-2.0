import { HeartHandshake } from "lucide-react";
import "../styles/navbar.scss";
import { useState, useEffect, useRef } from "react";

import PopupInfo from "./PopupInfo";

const NavBar = ({ onContactClick, onMenuClick }) => {
    // const homeRef = useRef(null);

    // const scrollToRef = (ref) => {
    //     if (ref.current) {
    //         ref.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    // useEffect(() => {
    //     scrollToRef(homeRef);
    // }, []);

    const [showPopup, setShowPopup] = useState(false);

    return (
        <nav>
            <p
                className="icon"
                onClick={() => onMenuClick("ALOK | PORTFOLIO")}
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}>
                ALOK
            </p>
            <ul>
                <li className="link" onClick={() => onMenuClick("HOME")}>
                    <a href="/#">Home</a>
                </li>
                <li className="link" onClick={() => onMenuClick("ABOUT")}>
                    <a href="/#">About</a>
                </li>
                <li className="link" onClick={() => onMenuClick("PROJECTS")}>
                    <a href="/#">Projects</a>
                </li>
                <li className="link" onClick={() => onMenuClick("SERVICES")}>
                    <a href="/#">Services</a>
                </li>
                <li className="link" onClick={onContactClick}>
                    <a href="#">
                        Contact <HeartHandshake />
                    </a>
                </li>
                {showPopup && (
                    <PopupInfo
                        show={showPopup}
                        // info=""
                        // onClose={() => setShowPopup(false)}
                    />
                )}
                <div className="line"></div>
            </ul>
        </nav>
    );
};

export default NavBar;
