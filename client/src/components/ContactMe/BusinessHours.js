import styles from "../../pages/Contact.module.css" // All Contact page styles are here
import { Link } from "react-router-dom";

const BusinessHours = () => {
  return (
    <div className={styles.businessHour}>
      <h1>Business Hour</h1>
      <p>Mon - Fri: 9:00 am - 8:00 pm</p>
      <p>Sat & Sun: 10:00 am - 4:00 pm</p>

      <Link to="/appointment">
        <h2>Schedule a Test Drive</h2>
      </Link>
    </div>
  );
};

export default BusinessHours;
