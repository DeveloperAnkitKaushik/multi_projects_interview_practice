import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const ImageSlider = ({ limit = 5 }) => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async (limit) => {
    setLoading(true);
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`);
      const d = await response.json();
      if (d) {
        setData(d);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(limit);
  }, []);
  const dotclick = (ind) => {
    setCurrentSlide(ind);
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className="maincontainer">
        <div className={styles.innercontainer}>
          <div className={`${styles.heading} text-gradient`}>Image Slider</div>
          <div className={styles.imagecontainer}>
            <button className={styles.prevButton} onClick={prevSlide}><IoIosArrowBack size={30} /></button>
            {data && data.length > 0 && (
              <img
                src={data[currentSlide].download_url}
                alt={`Slide ${currentSlide}`}
                className={styles.image}
              />
            )}
            <button className={styles.nextButton} onClick={nextSlide}><IoIosArrowForward size={30} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
