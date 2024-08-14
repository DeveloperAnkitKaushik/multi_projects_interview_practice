import { useState } from 'react';
import styles from './index.module.css';
import { AiFillOpenAI } from "react-icons/ai";

const ColorFinder = () => {
  const [color, setColor] = useState('#000000');

  const getRandomValue = (limit) => Math.floor(Math.random() * limit);

  const generateHexColor = () => {
    const hex = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomValue(16)];
    }
    return hexColor;
  }

  const generateRgbColor = () => {
    return `rgb(${getRandomValue(256)}, ${getRandomValue(256)}, ${getRandomValue(256)})`;
  }

  const handleRandomColor = (type) => {
    const newColor = type === 'hex' ? generateHexColor() : generateRgbColor();
    setColor(newColor);
  }

  return (
    <div className={styles.container}>
      <div className="maincontainer">
        <div className={styles.innercontainer}>
          <div className={`${styles.heading} text-gradient`}>Color Finder</div>
          <div className={styles.btncontainer}>
            <button className={styles.btn} onClick={() => handleRandomColor('hex')}>Hex Color</button>
            <button className={styles.btn} onClick={() => handleRandomColor('rgb')}>RGB Color</button>
            <button className={styles.btn} onClick={() => handleRandomColor(color.startsWith('#') ? 'hex' : 'rgb')}>Random Color</button>
          </div>
          <div className={styles.subheading}>{color}</div>
          <div className={`${styles.icon}`}>
            <AiFillOpenAI size={500} color={color} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorFinder;
