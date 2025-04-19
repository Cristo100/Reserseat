import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';
import SeatMap from '../components/SeatMap';

export default function ReservationPage() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservations, setReservations] = useState([]);

  const handleReserve = (newRes) => {
    setReservations((prev) => [...prev, newRes]);
  };

  return (
    <div>
      <SeatMap selectedTable={selectedTable} onSelectTable={setSelectedTable} />
      <ReservationForm selectedTable={selectedTable} onReserve={handleReserve} />

      <section style={{ marginTop: '2rem' }}>
        <h2>Reservas de hoy</h2>
        <ul>
          {reservations.map((r, idx) => (
            <li key={idx}>
              Mesa {r.table} – {r.name} ({r.people} pers.) {r.time}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
