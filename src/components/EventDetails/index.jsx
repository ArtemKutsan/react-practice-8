// src/components/EventDetails/index.jsx
import styles from './EventDetails.module.css';

const EventDetails = ({ title, date }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>Дата: {date.toLocaleDateString()}</p>
    </>
  );
};

export default EventDetails;
