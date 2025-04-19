const MENU = [
  { id: 1, dish: 'Pollo grillé con verduras', price: '$7.900' },
  { id: 2, dish: 'Ensalada César', price: '$5.500' },
  { id: 3, dish: 'Pastel de choclo', price: '$6.800' },
];

export default function MenuPage() {
  return (
    <div style={{ maxWidth: 480, margin: '2rem auto' }}>
      <h1>Menú de hoy</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {MENU.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
            <span>{item.dish}</span>
            <span style={{ fontWeight: 600 }}>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
