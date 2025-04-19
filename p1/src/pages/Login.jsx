export default function Login() {
  return (
    <div style={{ maxWidth: 320, margin: '2rem auto' }}>
      <h1>Login</h1>
      <form className="reservation-form">
        <input className="input" placeholder="Correo corporativo" />
        <input className="input" placeholder="Contraseña" type="password" />
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
    </div>
  );
}
