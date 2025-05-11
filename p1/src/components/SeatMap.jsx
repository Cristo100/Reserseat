/**
 * Mapa simple de asientos.
 * Recibe:
 *   selectedTable  → string  (ej. 'B02')
 *   reservedList   → string[] (mesas ocupadas en la fecha elegida)
 *   onSelectTable  → fn
 */
const TABLES = [
  { id:'A01', seats:4 }, { id:'A02', seats:4 }, { id:'A03', seats:4 },
  { id:'B01', seats:6 }, { id:'B02', seats:6 },
  { id:'C01', seats:8 },
];

export default function SeatMap({ selectedTable, reservedList = [], onSelectTable }) {
  return (
    <section className="card fade-in seatmap-card">
      <h2>Selecciona una mesa</h2>
      <div className="tables-grid">
        {TABLES.map(t=>{
          const busy = reservedList.includes(t.id);
          return (
            <button
              key={t.id}
              className={`tbl-btn ${t.id===selectedTable?'active':''} ${busy?'busy':''}`}
              onClick={()=>!busy && onSelectTable(t.id)}
              disabled={busy}
              title={busy ? 'Ocupado' : `Capacidad ${t.seats}`}
            >
              {t.id}
            </button>
          );
        })}
      </div>
    </section>
  );
}
