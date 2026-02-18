// src/components/SeatSelector/index.jsx
import { useState } from 'react';
import styles from './SeatSelector.module.css';

const seats = ['1A', '1B', '1C', '1D', '1E', '1F', '1G'];

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  return (
    <>
      <h3>Выберите места</h3>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              className={isSelected ? `${styles.seat} ${styles.selected}` : styles.seat}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <h3>Выбранные места:</h3>
      {selectedSeats.length > 0 ? (
        <p>
          {selectedSeats
            .map((seat) => seats.indexOf(seat) + 1)
            .sort((a, b) => a - b)
            .join(', ')}
        </p>
      ) : (
        <p>Нет выбранных мест</p>
      )}
    </>
  );
};

export default SeatSelector;
