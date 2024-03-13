import styles from "./Testimonial.module.css";
import OwlCarousel from "react-owl-carousel";
import SectionHeader from "../utilities/SectionHeader";

const TestiItems = (props) => {
  return (
    <div className={`col-sm-3 col-xs-12 ${styles["testi-single-container"]}`}>
      <div className={styles["single-testimonial-box"]}>
        <div className={styles["testimonial-description"]}>
          <div className={styles["testimonial-info"]}>
            <div className={styles["testimonial-img"]}>
              <img src={props.img} alt="image of clients person" />
            </div>
          </div>
          <div className={styles["testimonial-comment"]}>
            <p>{props.comment}</p>
          </div>
          <div className={styles["testimonial-person"]}>
            <h2>
              <a href="#">{props.name}</a>
            </h2>
            <h4>{props.location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const DUMMY_CLIENTS = [
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
  {
    name: "abcxyz",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    location: "San Jose",
  },
];

const Testimonial = () => {
  const options = {
    dots: true,
    loop: true,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 3500,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <section id="clients-say" className={styles["clients-say"]}>
      <div className="container">
        <SectionHeader
          title="What Our Clients Say"
          description="Checkout Our Reviews"
        />

        <div className="row">
          <OwlCarousel
            className={`${styles["testimonial-carousel"]} owl-theme`}
            {...options}
          >
            {DUMMY_CLIENTS.map((client, index) => (
              <TestiItems
                key={index}
                name={client.name}
                comment={client.comment}
                location={DUMMY_CLIENTS.location}
              />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
