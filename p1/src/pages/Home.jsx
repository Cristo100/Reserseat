import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Bienvenido al comedor empresarial</h1>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/reservation" className="btn btn-primary">Reservar asiento</Link>
        <Link to="/menu" className="btn btn-secondary">Ver menú</Link>
      </div>
    </section>
  );
}
