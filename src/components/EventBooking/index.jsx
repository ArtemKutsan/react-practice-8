// src/components/EventBooking/index.jsx
import styles from './EventBooking.module.css';
import EventDetails from '../EventDetails';
import SeatSelector from '../SeatSelector';

const EventBooking = () => {
  return (
    <div style={{ backgroundColor: '#eee', padding: '1rem 2rem', borderRadius: '1rem' }}>
      <EventDetails title="Concert of the Year" date="2023-12-01" location="City Arena" />
      <SeatSelector />
    </div>
  );
};
export default EventBooking;
