import React from "react";
import "./ColorSlider.css"

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {

    return (
        <div className="sliders">
            <label htmlFor={baseColor}>{colorName}</label>
            <input
                type="range"
                className={`slider slider--${baseColor}`}
                id={`${baseColor}Slider`}
                min="0"
                max="255"
                defaultValue="0"
                onChange={(e) => onValueChange(e.target.value)}
            />
        </div>
    )
}

export default ColorSlider