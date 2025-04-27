import { NavLink } from 'react-router-dom';
import './Navbar.css';        // ⬅️ IMPORTA el estilo del navbar

export default function Navbar() {
  return (
    <header className="navbar">
      <h2 className="brand">RESERSEAT</h2>

      <nav className="nav-links">
        <NavLink to="/home"        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
        <NavLink to="/reservation" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Reservar</NavLink>
        <NavLink to="/menu"        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Menú</NavLink>
        <NavLink to="/profile"     className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Perfil</NavLink>
        <NavLink to="/about"       className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Sobre&nbsp;nosotros</NavLink>
      </nav>
    </header>
  );
}
