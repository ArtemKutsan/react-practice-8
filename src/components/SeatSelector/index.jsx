// src/components/SeatSelector/index.jsx
import { useContext } from 'react';
import EventsContext from '../../context/events-context';
import styles from './SeatSelector.module.css';

// Переключаем одно место
const toggleSeat = (seats, seatId) =>
  seats.map((seat) => (seat.id === seatId ? { ...seat, isSelected: !seat.isSelected } : seat));

// Обновляем одно событие
const updateEvent = (event, seatId) => ({
  ...event,
  seats: toggleSeat(event.seats, seatId),
});

// Обновляем массив событий
const updateEvents = (events, eventId, seatId) =>
  events.map((event) => (event.id === eventId ? updateEvent(event, seatId) : event));

// Обновляем один день
const updateDay = (day, eventId, seatId) => {
  const hasEvent = day.events.some((event) => event.id === eventId);
  if (!hasEvent) return day;

  return {
    ...day,
    events: updateEvents(day.events, eventId, seatId),
  };
};

// Обновить все данные data
const updateData = (data, eventId, seatId) => data.map((day) => updateDay(day, eventId, seatId));

const SeatSelector = ({ event }) => {
  const { data, setData } = useContext(EventsContext);

  const handleToggleSeat = (seatId) => {
    setData((prev) => updateData(prev, event.id, seatId));
  };

  return (
    <>
      <h3>Выберите места</h3>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {event.seats.map((seat) => (
          <button
            key={seat.id}
            type="button"
            className={seat.isSelected ? `${styles.seat} ${styles.selected}` : styles.seat}
            onClick={() => handleToggleSeat(seat.id)}
          >
            {seat.label}
          </button>
        ))}
      </div>

      <h3>Выбранные места:</h3>
      {event.seats.some((seat) => seat.isSelected) ? (
        <p>
          {event.seats
            .filter((seat) => seat.isSelected)
            .map((seat) => event.seats.indexOf(seat) + 1)
            .join(', ')}
        </p>
      ) : (
        <p>Нет выбранных мест</p>
      )}
    </>
  );
};

export default SeatSelector;
