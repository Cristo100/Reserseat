import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import MenuPage from './pages/Menu'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </main>
    </div>
  )
} 