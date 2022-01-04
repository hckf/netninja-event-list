import React from "react";
import styles from "./EventList.module.css";
export default function EventList({ events, deleteEvent }) {
  return (
    <div className="eventList">
      {events.map((event, index) => (
        <div key={event.id} className={styles.card}>
          <h2>
            {index} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => deleteEvent(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}
