import { useState } from 'react';
import styles from './index.module.css';
import { FaStar } from "react-icons/fa";

const StarRating = ({ num }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(0);

  return (
    <div className={styles.container}>
      <div className="maincontainer">
        <div className={styles.innercontainer}>
          <div className={`${styles.heading} text-gradient`}>Star Rating</div>
          <div className={styles.stars}>
            {[...Array(num)].map((_, index) => {
              const starValue = index + 1;
              return (
                <FaStar
                  key={starValue}
                  onClick={() => handleClick(starValue)}
                  onMouseEnter={() => handleMouseEnter(starValue)}
                  onMouseLeave={handleMouseLeave}
                  className={`${styles.icon} ${hover >= starValue || rating >= starValue ? styles.active : styles.inactive}`}
                  size={40}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarRating;
