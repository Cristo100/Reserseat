// src/App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReservationPage from './pages/Reservation';
import MenuPage from './pages/Menu';
import Profile from './pages/Profile';
import Login from './pages/Login';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}
