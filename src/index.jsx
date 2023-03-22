import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider/ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0)
  const [greenValue, setGreenValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)


  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>

      <ColorSlider baseColor="red" colorName="Červená" onValueChange={(value) => { setRedValue(value) }} />
      <ColorSlider baseColor="green" colorName="Zelená" onValueChange={(value) => { setGreenValue(value) }} />
      <ColorSlider baseColor="blue" colorName="Modrá" onValueChange={(value) => { setBlueValue(value) }} />

      <div style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}
        className="color-box" id="color-box"></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
