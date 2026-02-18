// src/components/SeatSelector/index.jsx
import styles from './SeatSelector.module.css';

const SeatSelector = ({ seats, selectedSeats, onToggleSeat }) => {
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
              onClick={() => onToggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SeatSelector;
