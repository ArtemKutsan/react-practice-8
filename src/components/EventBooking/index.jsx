// src/components/EventBooking/index.jsx
import styles from './EventBooking.module.css';
import { useContext, useState } from 'react';
import EventsContext from '../../context/events-context';

const EventBooking = () => {
  const { data } = useContext(EventsContext);

  return (
    <div style={{ backgroundColor: '#eee', padding: '2rem', borderRadius: '1rem' }}>
      <form style={{ display: 'flex', gap: '1rem' }}>
        <select className={styles.select}>
          <option value="" disabled hidden>
            Выберите дату
          </option>

          {data.map((day) => (
            <option key={day.id} value={day.id}>
              {day.date.toLocaleDateString()}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default EventBooking;
