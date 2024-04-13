import React from 'react';
import styles from './Banners.module.css';

const Banners = ({ images }) => {
  const navigateToModelSearch = () => {
    // Logic to navigate to model search or execute search action
    // For example, using React Router's `useNavigate` hook:
    // let navigate = useNavigate();
    // navigate('/model-search');
  };

  return (
    <div className={styles.banner}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.fadeEffect} // Ensure this class has the necessary CSS for the fade effect
          style={{
            backgroundImage: `url(${image})`,
            animationDelay: `${index * 15}s` // This delay will space out your animations
          }}
        />
      ))}
    </div>
  );
}

export default Banners;
