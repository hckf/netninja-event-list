import "./App.css";
import EventList from "./components/EventList";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => {
      return [...prevEvents, newEvent];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      console.log(events);
      return setEvents(prevEvents.filter((event) => id !== event.id));
    });
  };

  // const handleClose = () => {
  //   setShowModal(false);
  // };
  const subtitle = "All the latest events";

  return (
    <div className="App">
      <Title title="Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && <EventList deleteEvent={handleClick} events={events} />}

      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
