import React, { useState } from "react";
import styles from './Home.module.css'; 

const Home = ({ names }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % names.length);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{names[currentIndex]}</h1>
      <button className={styles.btn} onClick={handleClick}>Next</button>
    </div>
  );
};

export default Home;
