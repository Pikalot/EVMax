import styles from "./Testimonial.module.css";
import OwlCarousel from "react-owl-carousel";
import SectionHeader from "../../utilities/SectionHeader";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fadeInVariant from "../../utilities/fadeInVariant";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faUser } from "@fortawesome/free-solid-svg-icons";

const TestiItems = (props) => {
  return (
    <div className={`col-sm-3 col-xs-12 ${styles["testi-single-container"]}`}>
      <div className={styles["single-testimonial-box"]}>
        <div className={styles["testimonial-description"]}>
          <div className={styles["testimonial-info"]}>
            <div className={styles["testimonial-img"]}>
              {/* <img src={props.img} alt="image of clients person" /> */}
              <FontAwesomeIcon icon={faUser} size="2x" color="gray" />
            </div>
          </div>
          <div className={styles["testimonial-comment"]}>
            <p>{props.comment}</p>
          </div>
          <div className={styles["testimonial-person"]}>
            <div className={styles.rating}>
              <FontAwesomeIcon icon={faStar} color="#f7b763" />
              <FontAwesomeIcon icon={faStar} color="#f7b763" />
              <FontAwesomeIcon icon={faStar} color="#f7b763" />
              <FontAwesomeIcon icon={faStar} color="#f7b763" />
              <FontAwesomeIcon icon={faStarHalf} color="#f7b763" />
            </div>
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
    name: "Harry Potter",
    comment:
      "Switching to an electric car from EVMAX was a game-changer for me! The team made the process incredibly easy and enjoyable. They took the time to answer all my questions and helped me find a vehicle that perfectly suits my lifestyle. I'm saving money on fuel costs and feel great knowing I'm doing my part to reduce emissions.",
    location: "San Jose",
  },
  {
    name: "Draco Malfoy",
    comment:
      "I love my new electric car from EVMAX! The savings on fuel costs are fantastic, and the environmental benefits are even better. The team at EVMAX was so helpful and knowledgeable, guiding me through the entire buying process. I couldn't be happier with my decision to go electric!",
    location: "Cupertino",
  },
  {
    name: "Hermione Granger",
    comment:
      "The customer service at EVMAX was top-notch. From the moment I walked in, I felt welcomed and valued. The team helped me explore different electric car options and find the perfect fit for my needs. They made sure I was comfortable with all the features and even helped me set up my charging station at home. I highly recommend EVMAX to anyone considering making the switch to electric.",
    location: "San Francisco",
  },
  {
    name: "Ron Weasley",
    comment:
      "Making the switch to electric with EVMAX was one of the best decisions I've ever made. The team was friendly, professional, and extremely knowledgeable. They helped me navigate the world of electric vehicles and find a car that not only meets but exceeds my expectations. The savings on fuel costs and the peace of mind knowing I'm reducing my carbon footprint make me wish I had made the switch sooner!",
    location: "San Mateo",
  },
  {
    name: "Lord Voldemort",
    comment:
      "I was a bit skeptical about electric cars at first, but after visiting EVMAX, I'm a believer! The team was patient and informative, addressing all my concerns and helping me understand the benefits of going electric. Now, I couldn't imagine driving anything else. Thanks, EVMAX, for making the transition so seamless!",
    location: "Los Angeles",
  },
  {
    name: "Professor Albus Dumbledore",
    comment:
      "I had been thinking about going electric for a while, and I'm so glad I chose EVMAX for my purchase. The staff was incredibly helpful and made the entire process stress-free. They helped me find an electric car that fits my budget and has all the features I was looking for. I'm thrilled with my new car and the positive impact it's having on the environment.",
    location: "San Diego",
  },
  {
    name: "Professor Severus Snape",
    comment:
      "The experience I had at EVMAX was exceptional from start to finish. The team was friendly, knowledgeable, and genuinely passionate about electric vehicles. They took the time to understand my needs and preferences, ensuring that I found the perfect electric car. I'm loving the savings on fuel and the smooth, quiet ride of my new electric vehicle. Highly recommend EVMAX to anyone in the market for an electric car!",
    location: "Santa Cruz",
  },
];

const Testimonial = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="clients-say" className={styles["clients-say"]}>
      <div className="container">
        <SectionHeader
          title="What Our Clients Say"
          description="Checkout Our Reviews"
        />

        <motion.div
          className="row"
          variants={fadeInVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <OwlCarousel
            className={`${styles["testimonial-carousel"]} owl-theme`}
            {...options}
          >
            {DUMMY_CLIENTS.map((client, index) => (
              <TestiItems
                key={index}
                name={client.name}
                comment={client.comment}
                location={client.location}
              />
            ))}
          </OwlCarousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
