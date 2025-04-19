// src/components/SeatMap.jsx
const TABLES = [
  { id: 1, name: 'Mesa 1', seats: 6 },
  { id: 2, name: 'Mesa 2', seats: 4 },
  { id: 3, name: 'Mesa 3', seats: 8 },
];

export default function SeatMap({ selectedTable, onSelectTable }) {
  return (
    <div className="seat-map">
      <h2>Selecciona una mesa</h2>
      <div className="tables">
        {TABLES.map((t) => (
          <button
            key={t.id}
            className={`btn ${t.id === selectedTable?.id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => onSelectTable(t)}
          >
            {t.name} ({t.seats})
          </button>
        ))}
      </div>
    </div>
  );
}
