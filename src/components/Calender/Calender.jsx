import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import styles from "./Calender.module.css";

function Calender() {
  const [date, setDate] = useState(new Date());
  return <Calendar value={date} className={styles.calender} />;
}

export default Calender;
