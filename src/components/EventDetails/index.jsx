// src/components/EventDetails/index.jsx
import styles from './EventDetails.module.css';

const EventDetails = ({ title, date, location }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>Дата: {date}</p>
      <p>Место: {location}</p>
    </>
  );
};

export default EventDetails;
