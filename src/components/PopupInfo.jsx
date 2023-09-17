import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../styles/popupinfo.scss";

import myImg from "../assets/imgs/myImg.jpg";

const PopupInfo = ({ show }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        setVisible(show);
    }, [show]);

    // const handleClose = () => {
    //     setVisible(false);
    //     onClose();
    // };

    return (
        <div className={`popup-box ${visible ? "visible" : ""}`}>
            <div className="content">
                <div>
                    <img src={myImg} alt="mera-photo-hai" className="image" />
                </div>
                <h3>
                    alok-karn <span>__alokkarn__ . he/him</span>{" "}
                </h3>
                <p>
                    {`res.status(200).json({ greeting: 'Hello Peps', data: { desc: 'welcome to my profile', message: 'Meet a geeky guy!👨‍💻, Music lover🎵', } }); `}
                </p>
                {/* <button onClick={handleClose}>close</button> */}
            </div>
        </div>
    );
};

export default PopupInfo;
