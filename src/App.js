import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState('Monday');

  useEffect(() => {
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const filteredEvents = events.filter(event => event.Day === selectedDay);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Comedy Events in Chicago</h1>
        <label htmlFor="day-select">Choose a day:</label>
        <select id="day-select" onChange={handleDayChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <ul>
          {filteredEvents.map(event => (
            <li key={event['Mic Name']}>
              <h2>{event['Mic Name']}</h2>
              <p><strong>Location:</strong> {event.Location}</p>
              <p><strong>Address:</strong> {event.Address}</p>
              <p><strong>Start Time:</strong> {event['Start Time']}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
