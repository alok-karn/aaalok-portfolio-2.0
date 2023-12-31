import React from "react";
import "./blob.css";
import "animate.css";
const Blob = () => {
    return (
        <div>
            <svg
                className="blob_1 animate__animated animate__headShake animate__repeat-3"
                id="generatedsvg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path
                    d="M150.9534435556729,99.99999999999999C150.9534435556729,114.67644590156172,115.21485577925974,144.70599491854705,100,144.70599491854705C84.78514422074026,144.70599491854705,59.664308880114476,114.67644590156173,59.664308880114476,100C59.664308880114476,85.32355409843827,84.78514422074025,56.647319509176654,99.99999999999999,56.647319509176654C115.21485577925972,56.647319509176654,150.9534435556729,85.32355409843825,150.9534435556729,99.99999999999999C150.9534435556729,114.67644590156172,115.21485577925974,144.70599491854705,100,144.70599491854705"
                    className="generate-path"
                    fill="#acd7fc"></path>
            </svg>
        </div>
    );
};

export default Blob;
