import React, { useState, useContext } from 'react';
import { format, startOfWeek, addWeeks, endOfWeek, eachDayOfInterval } from 'date-fns';
import styles from "./Calenda.module.css";
import submit from "./Submission.js";
import AuthContext from '../../store/auth-context';
import ShowAppointments from './BookedAppointment.js';

const timeslots = [
  '9:00 AM - 10:00 AM', 
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  ' ',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  ' ',
  '5:00 PM - 6:00 PM',
  '6:00 PM - 7:00 PM',
];

const isBreakTime = (slot) => slot === ' ';

const Calendar = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  const start = addWeeks(startOfWeek(new Date(), { weekStartsOn: 1 }), currentWeek);
  const end = endOfWeek(start, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start, end });

  // const isSelected = (day, slot) => {
  //   const slotStr = format(day, 'EEEE (MM/dd)') + slot;
  //   return selectedTimeSlot === slotStr;
  // };

  const isSelected = (day, slot) => {
    if (!selectedTimeSlot) return false;  // Return false if nothing is selected
  
    // Format the day to match the format stored in selectedTimeSlot
    const date = format(day, 'MM/dd/yyyy');
    
    // Compare both the date and the time
    return selectedTimeSlot.date === date && selectedTimeSlot.time === slot;
  };
  
  const { currentUser } = useContext(AuthContext); // Correctly access currentUser from context

  const selectTimeSlot = (day, slot) => {
    const slotStr = {
      date: format(day, 'MM/dd/yyyy'),
      time: slot
    };
    
    // Check if the current slot is already selected to toggle the selection
    if (selectedTimeSlot && selectedTimeSlot.date === slotStr.date && selectedTimeSlot.time === slotStr.time) {
      setSelectedTimeSlot(null);  // Deselect the slot
    } else {
      setSelectedTimeSlot(slotStr);  // Select the new slot
    }
  };
  
  // const selectTimeSlot = (day, slot) => {
  //   const slotStr = {
  //     date: format(day, 'MM/dd/yyyy'), // Adjust format as needed
  //     time: slot
  //   };
    
  //   // Check if the current slot is already selected to toggle the selection
  //   if (selectedTimeSlot === slotStr) {
  //     setSelectedTimeSlot(null); // Deselect the slot
  //   } else {
  //     setSelectedTimeSlot(slotStr); // Select the new slot
  //   }
  // };


//   const handleSubmit = () => {
//     if (selectedTimeSlot) {
//       alert(`You have selected the time slot: ${selectedTimeSlot}`);
//     } else {
//       alert('Please select a time slot before submitting.');
//     }
//   };

// const handleSubmit = () => {
//   submit(selectedTimeSlot, currentUser);
//   };

const handleSubmit = () => {
  if (selectedTimeSlot && currentUser) {
    console.log("Submitting:", selectedTimeSlot);
    submit(selectedTimeSlot, currentUser);
  } else {
    if (!selectedTimeSlot) {
      alert('Please select a time slot before submitting.');
    }
    if (!currentUser) {
      alert('Please log in to book an appointment.');
    }
  }
};


  return (
    
    <div>
      
      <div className={styles["blank-top"]} />
      
      <div className={styles["Calendar"]}>
        <h1>EVMax</h1>
        <h2>Schedule your Test Drive!</h2>
      </div>
      <div className={styles.controls}>
        <button className={styles['paginationButton']} onClick={() => setCurrentWeek(currentWeek - 1)} disabled={currentWeek === 0}>
          Previous Week
        </button>
        <button className={styles['paginationButton']} onClick={() => setCurrentWeek(currentWeek + 1)}>
          Next Week
        </button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.header}>
          {days.map(day => (
            <div key={day} className={styles.headerCell}>
              {format(day, 'EEEE (MM/dd)')}
            </div>
          ))}
        </div>
        {timeslots.map(slot => (
          <div key={slot} className={styles.timeRow}>
            {days.map(day => (
              <button
                key={`${day}-${slot}`}
                className={`${styles.timeslotButton} ${isBreakTime(slot) ? styles.breakTime :''} ${
                  isSelected(day, slot) ? styles.timeslotButtonSelected : ''
                }`}
                onClick={() => selectTimeSlot(day, slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        ))}
      </div>
      <ShowAppointments />

      <div className={styles['container']} >
        <button onClick={handleSubmit} className={styles['submitButton']}><b>Book new Appointment</b></button>
      </div>
    </div>
  );
};

export default Calendar;
