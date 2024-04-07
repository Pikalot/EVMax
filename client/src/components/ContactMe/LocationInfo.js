import React from 'react';
import styles from './ContactMe.module.css'; // assuming CSS Modules

const LocationInfo = () => {
  return (
    <div className={styles.locationInfo}> {/* Use styles.locationInfo if using CSS Modules */}
        <div className={styles.locationText}> {/* Use styles.locationText if using CSS Modules */}
            <h2>Location</h2>
            <p>Engineering Building Room 337</p>
            <p>One Washington Square</p>
            <p>San Jose, CA 95192-0180</p>
        </div>

    <div className={styles.mapContainer}> {/* Use styles.mapContainer if using CSS Modules */}
      <a href="https://maps.app.goo.gl/btjKgvbnSNouDvQT6" target="_blank" rel="noopener noreferrer">
        <iframe 
        title="Google Map location of Engineering Building"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.240876574952!2d-121.88600214984808!3d37.3368056655613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbf9c49ae69%3A0x33714fc7762af269!2sCharles%20W.%20Davidson%20College%20of%20Engineering!5e0!3m2!1sen!2sus!4v1710748144249!5m2!1sen!2sus" 
          width="300" 
          height="250" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </div>
  </div>
  );
}

export default LocationInfo;
