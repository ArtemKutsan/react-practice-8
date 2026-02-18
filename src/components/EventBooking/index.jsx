// src/components/EventBooking/index.jsx
import styles from './EventBooking.module.css';
import { useState } from 'react';
import EventDetails from '../EventDetails';
import SeatSelector from '../SeatSelector';

const seats = ['1A', '1B', '1C', '1D', '1E', '1F', '1G'];

const EventBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  return (
    <div style={{ backgroundColor: '#eee', padding: '1rem 2rem', borderRadius: '1rem' }}>
      <EventDetails title="Concert of the Year" date="2023-12-01" location="City Arena" />
      <SeatSelector seats={seats} selectedSeats={selectedSeats} onToggleSeat={toggleSeat} />

      <h3>Выбранные места:</h3>
      {selectedSeats.length > 0 ? (
        <p>
          {selectedSeats
            .map((seat) => seats.indexOf(seat) + 1)
            .sort()
            .join(', ')}
        </p>
      ) : (
        <p>Нет выбранных мест</p>
      )}
    </div>
  );
};
export default EventBooking;
