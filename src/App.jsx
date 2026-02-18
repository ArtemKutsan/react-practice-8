// src/App.jsx
import './App.css';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <>
      <main>
        <h1 className="container">React Practice 8</h1>

        <section>
          <div className="container">
            <h2>Задача 1: Бронирование билетов</h2>
            <EventDetails title="Concert of the Year" date="2023-12-01" location="City Arena" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
