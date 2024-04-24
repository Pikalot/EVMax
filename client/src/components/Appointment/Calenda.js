import styles from "./Calenda.module.css";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";

export default function Calendar() {
  return (
    <>
      <div className={styles["blank-top"]} />
      <div className={styles["Calendar"]}>
        <h1>EVMax</h1>
        <h2>Schedule your Test Drive!</h2>
        <ReactTimeslotCalendar
          initialDate={moment([2017, 3, 24]).format()}
          let
          timeslots={[
            ["1", "2"], // 1:00 AM - 2:00 AM
            ["2", "3"], // 2:00 AM - 3:00 AM
            ["4", "6"], // 4:00 AM - 6:00 AM
            "5", // 5:00 AM
            ["4"], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
          ]}
        />
      </div>
    </>
  );
}
