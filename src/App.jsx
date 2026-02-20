// src/App.jsx
import './App.css';
import EventsProvider from './components/EventsProvider';
import EventBooking from './components/EventBooking';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React Summary 4</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Бронирование билетов V2</h2>
            <EventsProvider>
              <EventBooking />
            </EventsProvider>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
