import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservedList from '../components/ReservedList';

/* ────────────────────────── claves LocalStorage */
const LS_RESERVAS     = 'rs_reservas';
const LS_CURRENT_USER = 'rs_currentUser';

/* ────────────────────────── utilidades */
const seatRegex  = /^[A-Z][0-9]{2}$/;                     // Ej. A44
const toDateTime = (f, h) => new Date(`${f}T${h}:00`);
const overlap    = (aIni, aFin, bIni, bFin) => aIni < bFin && bIni < aFin;

export default function Reservation() {
  const navigate   = useNavigate();
  const currentUid = JSON.parse(localStorage.getItem(LS_CURRENT_USER)) ?? 0;

  const [form , setForm ] = useState({ fecha:'', hora:'', mesa:'', personas:1 });
  const [modal, setModal] = useState(null);              // 'invalid' | 'conflict'

  /* ─────────── reservas ocupadas dinámicas ─────────── */
  const ocupadas = useMemo(()=>{
    if (!form.fecha) return [];

    // siempre leemos localStorage *en cada render* para mantenerlo fresco
    const todas = JSON.parse(localStorage.getItem(LS_RESERVAS)) || [];

    // 1) Si no hay hora, devolvemos todo el día
    if (!form.hora) {
      return todas.filter(r => r.fecha === form.fecha);
    }

    // 2) Con hora: sólo las que se solapan en la hora seleccionada
    const ini = toDateTime(form.fecha, form.hora);
    const fin = new Date(ini.getTime() + 60*60*1000);
    return todas.filter(r =>
      r.fecha === form.fecha &&
      overlap(
        ini, fin,
        toDateTime(r.fecha, r.hora),
        new Date(toDateTime(r.fecha, r.hora).getTime()+60*60*1000)
      )
    );
  }, [form.fecha, form.hora]);

  /* ─────────── inputs ─────────── */
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name==='mesa' ? value.toUpperCase() : value });
  };

  /* ─────────── guardar ─────────── */
  const guardarReserva = () => {
    const mesa = form.mesa.trim().toUpperCase();

    /* 1 ▪️ validar formato */
    if (!seatRegex.test(mesa)) { setModal('invalid'); return; }

    /* 2 ▪️ conflicto hora‑mesa */
    const choque = ocupadas.find(r => r.mesa === mesa);
    if (choque) { setModal('conflict'); return; }

    /* 3 ▪️ guardar */
    const todas = JSON.parse(localStorage.getItem(LS_RESERVAS)) || [];
    const nuevo = { id: Date.now(), uid: currentUid, ...form, mesa, estado:'Pendiente' };
    localStorage.setItem(LS_RESERVAS, JSON.stringify([...todas, nuevo]));
    window.dispatchEvent(new Event('storage'));
    navigate('/profile');
  };

  /* ─────────── interfaz ─────────── */
  return (
    <main className="page">
      <h1 className="title">Reservar asiento</h1>

      <section className="card fade-in">
        <div className="reservation-form-grid">
          <Input label="Fecha"  type="date" name="fecha" value={form.fecha} onChange={handleChange} />
          <Input label="Hora"   type="time" name="hora"  value={form.hora}  onChange={handleChange} />
          <Input label="Mesa (A44)" type="text" name="mesa" value={form.mesa}
                 maxLength={3} placeholder="A44" onChange={handleChange}
                 style={{ textTransform:'uppercase' }}/>
          <Input label="Personas" type="number" name="personas" min={1} max={8}
                 value={form.personas} onChange={handleChange}/>
        </div>

        <button className="btn btn-primary" style={{ marginTop:'var(--space-4)' }}
                onClick={guardarReserva}>
          Guardar reserva
        </button>
      </section>

      {/* listado de ocupadas */}
      <ReservedList reservas={ocupadas} horaSeleccionada={form.hora}/>

      {/* ─────────── modales ─────────── */}
      {modal==='invalid' && (
        <Modal onClose={()=>setModal(null)}>
          ❌ Código de mesa inválido.<br/>Debe ser <strong>letra + dos cifras</strong>.
        </Modal>
      )}
      {modal==='conflict' && (
        <Modal onClose={()=>setModal(null)}>
          ⚠️ Ese asiento está reservado durante la hora seleccionada.
        </Modal>
      )}
    </main>
  );
}

/* ────────────────────────── componentes auxiliares */
const Input = props => (
  <div className="field">
    <label>{props.label}</label>
    <input {...props}/>
  </div>
);

function Modal({ children, onClose }) {
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.4)',display:'grid',placeItems:'center'}}>
      <div style={{background:'#fff',padding:'2rem',borderRadius:'1rem',textAlign:'center',maxWidth:320}}>
        <p style={{marginTop:0}}>{children}</p>
        <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
