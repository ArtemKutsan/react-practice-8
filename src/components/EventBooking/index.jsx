// src/components/EventBooking/index.jsx
import styles from './EventBooking.module.css';
import { useContext, useState } from 'react';
import EventsContext from '../../context/events-context';
import EventDetails from '../EventDetails';
import SeatSelector from '../SeatSelector';

const EventBooking = () => {
  const { data } = useContext(EventsContext);

  const [dayId, setDayId] = useState(null);
  const [eventId, setEventId] = useState(null);

  const eventsDay = data.find((day) => day.id === dayId);
  const event = eventsDay?.events.find((event) => event.id === eventId);

  const handleDateChange = (e) => {
    setDayId(Number(e.target.value));
    setEventId(null);
  };

  const handleEventChange = (e) => {
    setEventId(Number(e.target.value));
  };

  return (
    <div style={{ backgroundColor: '#eee', padding: '2rem', borderRadius: '1rem' }}>
      <form style={{ display: 'flex', gap: '1rem' }}>
        <select onChange={handleDateChange} value={dayId ?? ''} className={styles.select}>
          <option value="" disabled hidden>
            Выберите дату
          </option>

          {data.map((day) => (
            <option key={day.id} value={day.id}>
              {day.date.toLocaleDateString()}
            </option>
          ))}
        </select>

        {eventsDay && (
          <select onChange={handleEventChange} value={eventId ?? ''} className={styles.select}>
            <option value="" disabled hidden>
              Выберите событие
            </option>

            {eventsDay.events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>
        )}
      </form>

      {event && (
        <>
          <EventDetails title={event.title} date={eventsDay.date} />
          <SeatSelector event={event} />
        </>
      )}
    </div>
  );
};

export default EventBooking;
