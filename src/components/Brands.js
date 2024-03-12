import styles from "./Brands.module.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import jQuery from "jquery";
import { useEffect } from "react";

const BrandsDisplay = (props) => {
  return (
    <div className={`item ${styles["item"]}`}>
      <a href="#">
        <img src={props.url} alt="brand-image" />
      </a>
    </div>
  );
};

const Brands = () => {
  useEffect(() => {
    window.jQuery = jQuery;
  }, []);

  const options = {
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2300,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  };

  const DUMMY_BRANDS = [
    { url: "x" },
    { url: "x" },
    { url: "x" },
    { url: "x" },
    { url: "x" },
    { url: "x" },
    { url: "x" },
  ];

  return (
    <section id="brands" className={styles.brand}>
      <div className="container">
        <div className={styles["brand-area"]}>
          <OwlCarousel className={`${styles["brand-item"]}`} {...options}>
            {DUMMY_BRANDS.map((brand, index) => (
              <BrandsDisplay url={brand.url} key={index} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Brands;
