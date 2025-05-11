import { useEffect, useState } from 'react';

/* ────────────────────────── claves LocalStorage */
const LS_USERS         = 'rs_users';
const LS_CURRENT_USER  = 'rs_currentUser';
const LS_RESERVAS      = 'rs_reservas';

/* usuarios por defecto */
const defaultUsers = [
  { id:0, name:'Cristóbal Pichara', email:'cristobal@example.com', phone:'+56 9 1234 5678' },
  { id:1, name:'Usuario 2',        email:'user2@example.com',    phone:'+56 9 8888 0000' },
  { id:2, name:'Usuario 3',        email:'user3@example.com',    phone:'+56 9 7777 1111' },
];
const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));

export default function Profile() {
  /* ─────────── usuarios y activo ─────────── */
  const [users, setUsers] = useState(()=>JSON.parse(localStorage.getItem(LS_USERS))||defaultUsers);
  useEffect(()=>save(LS_USERS,users),[users]);

  const [uid, setUid]   = useState(()=>JSON.parse(localStorage.getItem(LS_CURRENT_USER))??0);
  useEffect(()=>save(LS_CURRENT_USER,uid),[uid]);

  const [draft , setDraft ] = useState(()=>users.find(u=>u.id===uid));
  const [editing,setEditing] = useState(false);
  const [modal  , setModal  ] = useState(null);            // 'update' | 'deleted' | {type:'confirmDelete',id}

  /* ─────────── reservas ─────────── */
  const getAll = () => JSON.parse(localStorage.getItem(LS_RESERVAS))||[];
  const reservasBy = id => getAll().filter(r=>r.uid===id);
  const [reservas, setReservas] = useState(reservasBy(uid));

  /* refrescar listado al cambiar uid o storage */
  useEffect(()=>setReservas(reservasBy(uid)), [uid]);
  useEffect(()=>{
    const onStorage=()=>setReservas(reservasBy(uid));
    window.addEventListener('storage', onStorage);
    return ()=>window.removeEventListener('storage', onStorage);
  }, [uid]);

  /* ─────────── cambiar usuario ─────────── */
  const changeUser = id=>{
    setUid(id);
    setDraft(users.find(u=>u.id===id));
    setEditing(false);
    setReservas(reservasBy(id));          // refresco inmediato
  };

  /* ─────────── editar datos ─────────── */
  const handle   = e=>setDraft({...draft,[e.target.name]:e.target.value});
  const saveEdit = ()=>{
    setUsers(users.map(u=>u.id===uid?draft:u));
    setEditing(false);
    setModal('update');
  };

  /* ─────────── eliminar reserva ─────────── */
  const deleteReserva = id=>{
    const after = getAll().filter(r=>r.id!==id);
    save(LS_RESERVAS, after);
    window.dispatchEvent(new Event('storage'));
    setModal('deleted');
  };

  /* ─────────── UI ─────────── */
  return (
    <main className="page">
      <h1 className="title">Tu perfil</h1>

      {/* selector de usuario */}
      <section className="profile-section fade-in">
        <h2>Usuarios</h2>
        <div className="field">
          <label>Usuario activo</label>
          <select value={uid} onChange={e=>changeUser(Number(e.target.value))}>
            {users.map(u=><option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
      </section>

      {/* datos personales */}
      <section className="profile-section fade-in">
        <h2>Datos personales</h2>
        {['name','email','phone'].map(f=>(
          <div className="field" key={f}>
            <label>{f==='name'?'Nombre':f==='email'?'Correo':'Teléfono'}</label>
            <input type="text" name={f} value={draft[f]} disabled={!editing} onChange={handle}/>
          </div>
        ))}
        {editing?(
          <div className="actions">
            <button className="btn btn-accent" onClick={()=>setEditing(false)}>Cancelar</button>
            <button className="btn btn-primary" onClick={saveEdit}>Guardar</button>
          </div>
        ):(
          <button className="btn btn-primary" onClick={()=>setEditing(true)}>Editar</button>
        )}
      </section>

      {/* historial de reservas */}
      <section className="profile-section fade-in">
        <h2>Tus reservas</h2>
        {reservas.length===0?(
          <p>No tienes reservas registradas.</p>
        ):(
          <ul className="reservas-grid">
            {reservas.map(r=>(
              <li key={r.id} className="card">
                <h3>{r.fecha} · {r.hora}</h3>
                <p>Asiento <strong>{r.mesa}</strong> — {r.personas} pers.</p>
                <p className={`estado ${r.estado.toLowerCase()}`}>{r.estado}</p>
                <button className="btn btn-danger"
                        onClick={()=>setModal({type:'confirmDelete',id:r.id})}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* modales */}
      {modal==='update'   && <Modal onClose={()=>setModal(null)}>✅ Datos actualizados con éxito.</Modal>}
      {modal==='deleted'  && <Modal onClose={()=>setModal(null)}>✅ Reserva eliminada con éxito.</Modal>}
      {modal?.type==='confirmDelete' && (
        <Modal onClose={()=>setModal(null)}>
          <p>¿Eliminar esta reserva?</p>
          <div className="actions">
            <button className="btn btn-accent" onClick={()=>setModal(null)}>Cancelar</button>
            <button className="btn btn-danger"
                    onClick={()=>{deleteReserva(modal.id);setModal(null);}}>
              Eliminar
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}

/* ────────────────────────── modal reutilizable */
function Modal({children,onClose}){
  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.4)',display:'grid',placeItems:'center'}}>
      <div style={{background:'#fff',padding:'2rem',borderRadius:'1rem',textAlign:'center',maxWidth:320}}>
        <div>{children}</div>
        <button className="btn btn-primary" style={{marginTop:'1rem'}} onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
