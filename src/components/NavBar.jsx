import { HeartHandshake } from "lucide-react";
import "../styles/navbar.scss";
import { useEffect, useRef } from "react";
const NavBar = ({ onContactClick }) => {
    // const homeRef = useRef(null);

    // const scrollToRef = (ref) => {
    //     if (ref.current) {
    //         ref.current.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    // useEffect(() => {
    //     scrollToRef(homeRef);
    // }, []);

    return (
        <nav>
            <p className="icon">ALOK</p>
            <ul>
                <li className="link">
                    <a href="#">Home</a>
                </li>
                <li className="link">
                    <a href="#">About</a>
                </li>
                <li className="link">
                    <a href="#">Projects</a>
                </li>
                <li className="link">
                    <a href="#">Services</a>
                </li>
                <li className="link" onClick={onContactClick}>
                    <a href="#">
                        Contact <HeartHandshake />
                    </a>
                </li>
                <div className="line"></div>
            </ul>
        </nav>
    );
};

export default NavBar;
