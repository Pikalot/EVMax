import React from "react";
import styles from "./Banners.module.css";

const Banners = (props) => {
  return (
    <div className={styles.banner} id={props.id}>
      {props.images.map((image, index) => (
        <img
          src={image}
          alt="No Internet Connection"
          key={index}
          className={styles["banner-img"]}
          style={{ animationDelay: `${index * 15}s` }}
        />
      ))}
    </div>
  );
};

export default Banners;
