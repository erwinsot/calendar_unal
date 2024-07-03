import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

const localizer = dayjsLocalizer(dayjs);

function App() {
  const initialEvents = [
    {
      start: dayjs('2024-05-18T12:00:00').toDate(),
      end: dayjs('2024-05-18T13:00:00').toDate(),
      title: "Deportes",
    },
    {
      start: dayjs('2024-07-02T12:00:00').toDate(),
      end: dayjs('2024-07-02T13:00:00').toDate(),
      title: "Deportes",
    },
    {
      start: dayjs('2024-07-18T15:00:00').toDate(),
      end: dayjs('2024-07-18T18:00:00').toDate(),
      title: "Arte",
    },
    {
      start: dayjs('2024-07-12T12:00:00').toDate(),
      end: dayjs('2024-07-12T13:00:00').toDate(),
      title: "Arte",
    },
    {
      start: dayjs('2024-07-22T12:00:00').toDate(),
      end: dayjs('2024-07-22T13:00:00').toDate(),
      title: "Salud",
    },
    {
      start: dayjs('2024-07-30T12:00:00').toDate(),
      end: dayjs('2024-07-30T13:00:00').toDate(),
      title: "Salud",
    },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filteredTitle, setFilteredTitle] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleFilterChange = (e) => {
    setFilteredTitle(e.target.value);
  };

  const handleApplyFilter = () => {
    if (filteredTitle.trim() === '') {
      setEvents(initialEvents); // Mostrar todos los eventos si el filtro está vacío
    } else {
      const filteredEvents = initialEvents.filter(event =>
        event.title.toLowerCase().includes(filteredTitle.toLowerCase())
      );
      setEvents(filteredEvents);
    }
  };

  const handleClearFilter = () => {
    setFilteredTitle('');
    setEvents(initialEvents);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseCard = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className='calendar' style={{ width: "90vh", height: "50vw" }}>
        <input
          type="text"
          placeholder="Filtrar por título de evento..."
          value={filteredTitle}
          onChange={handleFilterChange}
        />
        <button onClick={handleApplyFilter}>Aplicar Filtro</button>
        <button onClick={handleClearFilter}>Limpiar Filtro</button>
        <Calendar
          localizer={localizer}
          events={events}
          onSelectEvent={handleSelectEvent}
        />
      </div>

      {selectedEvent && (
        <div className='event-card'>
          <h3>{selectedEvent.title}</h3>
          <p>Start: {selectedEvent.start.toString()}</p>
          <p>End: {selectedEvent.end.toString()}</p>
          <button onClick={handleCloseCard}>Cerrar</button>
        </div>
      )}
    </>
  );
}

export default App;
