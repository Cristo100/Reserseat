import { useEffect, useState } from 'react';

/* ── utilidades localStorage ─────────────────────────── */
const LS_PROFILE  = 'rs_profile';
const LS_RESERVAS = 'rs_reservas';

const getProfile  = () => JSON.parse(localStorage.getItem(LS_PROFILE))  ?? {
  name: 'Cristóbal Pichara',
  email: 'cristobal@example.com',
  phone: '+56 9 1234 5678',
};
const getReservas = () => JSON.parse(localStorage.getItem(LS_RESERVAS)) ?? [
  { id: 1, fecha: '2025-05-03', hora: '13:30', mesa: 'A-12',  personas: 4, estado: 'Confirmada' },
  { id: 2, fecha: '2025-05-10', hora: '14:00', mesa: 'B-05',  personas: 2, estado: 'Pendiente'  },
];

export default function Profile() {
  /* — estado — */
  const [profile, setProfile]   = useState(getProfile());
  const [draft,   setDraft]     = useState(profile);
  const [editing, setEditing]   = useState(false);
  const [modal,   setModal]     = useState(false);
  const [reservas, setReservas] = useState(getReservas());

  /* — sync reservas desde localStorage — */
  useEffect(() => {
    const onStorage = () => setReservas(getReservas());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  /* — helpers — */
  const handleChange = e =>
    setDraft({ ...draft, [e.target.name]: e.target.value });

  const cancelEdit = () => { setDraft(profile); setEditing(false); };

  const saveEdit = () => {
    setProfile(draft);
    localStorage.setItem(LS_PROFILE, JSON.stringify(draft));
    setEditing(false);
    setModal(true);
  };

  return (
    <main className="page">
      <h1 className="title">Tu perfil</h1>

      {/* ─────────────────────────────────── Datos personales */}
      <section className="profile-section fade-in">
        <h2>Datos personales</h2>

        {['name','email','phone'].map(field => (
          <div className="field" key={field}>
            <label>{field === 'name' ? 'Nombre' : field === 'email' ? 'Correo' : 'Teléfono'}</label>
            <input
              type="text"
              name={field}
              value={draft[field]}
              disabled={!editing}
              onChange={handleChange}
            />
          </div>
        ))}

        {!editing && (
          <button className="btn btn-primary" onClick={() => setEditing(true)}>
            Editar perfil
          </button>
        )}

        {editing && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={saveEdit}>Guardar</button>
            <button className="btn btn-accent"  onClick={cancelEdit}>Cancelar</button>
          </div>
        )}
      </section>

      {/* ─────────────────────────────────── Historial de reservas */}
      <section className="profile-section fade-in">
        <h2>Tus reservas</h2>

        {reservas.length === 0 ? (
          <p>No tienes reservas registradas.</p>
        ) : (
          <ul className="reservas-grid">
            {reservas.map(r => (
              <li key={r.id} className="card">
                <h3>{r.fecha} · {r.hora}</h3>
                <p>Mesa <strong>{r.mesa}</strong> — {r.personas} pers.</p>
                <p className={`estado ${r.estado.toLowerCase()}`}>{r.estado}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* ─────────────────────────────────── Modal simple */}
      {modal && (
        <div
          style={{
            position:'fixed', inset:0, background:'rgba(0,0,0,.4)',
            display:'grid', placeItems:'center',
          }}
        >
          <div
            style={{
              background:'#fff', padding:'2rem', borderRadius:'1rem',
              textAlign:'center', maxWidth:'320px',
            }}
          >
            <p style={{ marginTop:0 }}>✅ Datos actualizados con éxito</p>
            <button className="btn btn-primary" onClick={() => setModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
