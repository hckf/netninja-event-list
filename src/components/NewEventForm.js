import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000), // Risk duplicate events
    };

    console.log(newEvent);

    addEvent(newEvent);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="cardiff">Cardiff</option>
          <option value="london">London</option>
          <option value="manchester">Manchester</option>
          <option value="middlesbrough">Middlesbrough</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
