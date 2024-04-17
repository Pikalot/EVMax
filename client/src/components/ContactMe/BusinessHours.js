import styles from './ContactMe.module.css'
import { useNavigate } from 'react-router-dom'; 



const BusinessHours = () => {

  let navigate = useNavigate();

  const handleScheduleClick = () => {
    // Show a modal or message to the user
    navigate("/Appointment");
  };

  return (
    <div className={styles.businessHour}>
      <h1>Business Hour</h1>
      <p>Mon - Fri: 9:00 am - 8:00 pm</p>
      <p>Sat & Sun: 10:00 am - 4:00 pm</p>

      <a href="javascript:void(0)" onClick={handleScheduleClick}> 
        <h2>Schedule a Test Drive</h2>
      </a>
    </div>
  );
}

export default BusinessHours;
