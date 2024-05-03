import { getDatabase, ref, set, push } from "firebase/database";
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
    databaseURL: "https://evmax-97c93-default-rtdb.firebaseio.com/",
};

// Initialize Firebase App only if it hasn't been initialized
if (!getApps().length) {
    initializeApp(firebaseConfig);
}

const db = getDatabase(); // Define db after Firebase app initialization

// Function to generate a new appointment key
function newAppointmentKey(userId) {
    const appointmentsRef = ref(db, `appointments/${userId}`);
    const newRef = push(appointmentsRef); // push returns a reference for a new child location
    return newRef.key; // return the key of the newly created child
}

const submit = (selectedTimeSlot, currentUser) => {
    const appointmentKey = newAppointmentKey(currentUser.uid);
    const appointmentRef = ref(db, `appointments/${currentUser.uid}/${appointmentKey}`);

    const appointmentData = {
    date: selectedTimeSlot.date,
    time: selectedTimeSlot.time
    };

    set(appointmentRef, appointmentData)
    .then(() => {
        alert(`Appointment booked: ${appointmentData.date} at ${appointmentData.time}`);
    })
    .catch(error => {
        alert(`Failed to book appointment. Error: ${error.message}`);
    });
  };

export default submit;
