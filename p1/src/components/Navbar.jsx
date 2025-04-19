import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navClass = ({ isActive }) =>
  `nav-link ${isActive ? 'active' : ''}`;

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/home" className={navClass}>Inicio</NavLink>
        <NavLink to="/reservation" className={navClass}>Reservación</NavLink>
        <NavLink to="/menu" className={navClass}>Menú</NavLink>
        <NavLink to="/profile" className={navClass}>Perfil</NavLink>
      </nav>
    </header>
  );
}
