// src/App.jsx
import './App.css';
import EventBooking from './components/EventBooking';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React Practice 8</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Бронирование билетов</h2>
            <EventBooking />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
