import BusinessHours from "../components/ContactMe/BusinessHours";
import LocationInfo from "../components/ContactMe/LocationInfo";
import Footer from "../components/Home/Footer";
import Banners from "../components/ContactMe/Banners";
import { ev1, ev2, ev3, ev4, ev5 } from "../assets";
import styles from "./Contact.module.css";

const bannerImages = [ev1, ev2, ev3, ev4, ev5];

function Contact() {
  return (
    <>
      <Banners images={bannerImages} id="contact-us" />
      <div className={styles.contact}>
        <BusinessHours />
        <LocationInfo />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
