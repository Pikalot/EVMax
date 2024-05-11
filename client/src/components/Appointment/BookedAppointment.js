import React, { useState, useEffect, useContext } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import AuthContext from "../../store/auth-context";
import styles from "./Calenda.module.css";

const ShowAppointments = () => {
  const { currentUser } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      console.log("No user logged in!");
      return;
    }

    const db = getDatabase();
    const appointmentsRef = ref(db, `appointments/${currentUser.uid}`);

    // Listen for data updates
    const unsubscribe = onValue(
      appointmentsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert object to array if the data is stored as an object
          const loadedAppointments = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setAppointments(loadedAppointments);
        } else {
          setAppointments([]); // No data available
        }
      },
      (error) => {
        console.error("Error fetching data: ", error);
      }
    );

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [currentUser]); // Re-run effect if currentUser changes

  return (
    <div className={styles["appointment"]}>
      <h2>Existing Appointments</h2>
      {appointments.length > 0 && currentUser ? (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
              Date: {appt.date}, Time: {appt.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found!</p>
      )}
    </div>
  );
};

export default ShowAppointments;
