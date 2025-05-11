/**
 * Lista compacta y SIN duplicados de mesas ocupadas:
 *  • Si la hora está vacía        → muestra todas las reservas del día, agrupadas.
 *  • Si la hora está seleccionada → muestra las que chocan en esa hora (ya agrupadas).
 *
 *  Ejemplo de salida:
 *    A04 · 12:00
 *    B12 · 12:30, 13:00
 */
export default function ReservedList({ reservas }) {
    /* sin reservas */
    if (!reservas.length) {
      return (
        <section className="card reserved-list fade-in">
          <h2>Mesas ocupadas</h2>
          <p>No hay reservas en este horario.</p>
        </section>
      );
    }
  
    /* agrupar por mesa */
    const grouped = reservas.reduce((acc, r) => {
      (acc[r.mesa] = acc[r.mesa] || []).push(r.hora);
      return acc;
    }, {});
  
    /* ordenar alfabéticamente A01, A02, B01, … */
    const ordenadas = Object.entries(grouped).sort(([a], [b]) =>
      a.localeCompare(b)
    );
  
    return (
      <section className="card reserved-list fade-in">
        <h2>Mesas ocupadas</h2>
        <ul className="reserved-seats-grid">
          {ordenadas.map(([mesa, horas]) => (
            <li key={mesa} className="badge">
              <strong>{mesa}</strong>
              {horas.length > 0 && ' · ' + horas.sort().join(', ')}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  