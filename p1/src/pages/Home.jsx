import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="page">
      <h1 className="title">RESERSEAT, reserve ya</h1>

      <div className="actions column">
        <Link to="/reservation" className="btn btn-primary">Reservar asiento</Link>
        <Link to="/menu"        className="btn btn-accent">Ver menú</Link>
        <Link to="/profile"     className="btn btn-accent">Tu perfil</Link>
        <Link to="/about"       className="btn btn-accent">Sobre nosotros</Link>
      </div>
    </main>
  );
}
