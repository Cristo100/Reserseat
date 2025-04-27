import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LS_RESERVAS = 'rs_reservas';

export default function Reservation() {
  const navigate = useNavigate();

  /* formulario local */
  const [form, setForm] = useState({
    fecha: '',
    hora: '',
    mesa: '',
    personas: 1,
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const guardarReserva = () => {
    /* 1 ▪️ lee reservas previas */
    const prev = JSON.parse(localStorage.getItem(LS_RESERVAS)) || [];
    /* 2 ▪️ crea registro */
    const nueva = { id: Date.now(), ...form, estado: 'Pendiente' };
    /* 3 ▪️ guarda y notifica perfil */
    localStorage.setItem(LS_RESERVAS, JSON.stringify([...prev, nueva]));
    window.dispatchEvent(new Event('storage'));
    /* 4 ▪️ redirige */
    navigate('/profile');
  };

  return (
    <main className="page">
      <h1 className="title">Reservar asiento</h1>

      {/* ── Tarjeta principal ───────────────────────── */}
      <section className="profile-section fade-in">
        <h2 style={{ color: 'var(--c-primary)', marginTop: 0 }}>
          Datos de tu reserva
        </h2>

        {/* grid responsivo */}
        <div className="reservation-grid">
          <div className="field">
            <label>Fecha</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Hora</label>
            <input
              type="time"
              name="hora"
              value={form.hora}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Mesa (ej. A-12)</label>
            <input
              type="text"
              name="mesa"
              value={form.mesa}
              onChange={handleChange}
              placeholder="A-12"
            />
          </div>

          <div className="field">
            <label>Nº personas</label>
            <input
              type="number"
              name="personas"
              min="1"
              max="12"
              value={form.personas}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="btn btn-primary"
          style={{ marginTop: 'var(--space-4)' }}
          onClick={guardarReserva}
        >
          Guardar reserva
        </button>
      </section>
    </main>
  );
}
