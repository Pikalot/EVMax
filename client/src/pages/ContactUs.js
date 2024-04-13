import BusinessHours from '../components/ContactMe/BusinessHours';
import LocationInfo from '../components/ContactMe/LocationInfo';
import ContactMe from '../components/Home/ContactMe';
import Banners from '../components/ContactMe/Banners';
import styles from '../components/ContactMe/ContactMe.module.css';
import Service from "../components/Home/Service";
import ev1 from '../assets/images/banners/EV1.jpg';
import ev2 from '../assets/images/banners/EV2.jpg';
import ev3 from '../assets/images/banners/EV3.jpg';
import ev4 from '../assets/images/banners/EV4.jpg';
import ev5 from '../assets/images/banners/EV5.jpg';

const bannerImages = [ev1, ev2, ev3, ev4, ev5];

function ContactUs() {
  return (
    <>
        <Banners images={bannerImages} />   
        <div id="contact-me" className="contact">
          <div className={styles.infoContainer}>
              <BusinessHours />
              <LocationInfo />
              </div>
          <Service />
          <ContactMe />
        </div>
    </>
  );
}

export default ContactUs;
