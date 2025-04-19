// src/components/ReservationForm.jsx
import { useState } from 'react';

export default function ReservationForm({ selectedTable, onReserve }) {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(1);
  const [time, setTime] = useState('13:00');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) return alert('Selecciona una mesa primero');
    onReserve({ table: selectedTable.name, name, people, time, phone });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="reservation-form">
      <label>
        Nombre
        <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Teléfono
        <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <label>
        Hora
        <input type="time" className="input" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Personas (máx 5)
        <input
          type="number"
          className="input"
          min="1"
          max="5"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-primary">Confirmar reserva</button>
    </form>
  );
}
