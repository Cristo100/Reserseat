export default function Menu() {
  /* ———————————————————————————
     Catálogo básico (40 ítems)
     ——————————————————————————— */
  const menu = [
    {
      categoria: 'Entradas',
      items: [
        { nombre: 'Empanada de queso', precio: 3_500 },
        { nombre: 'Bruschettas mixtas', precio: 4_200 },
        { nombre: 'Sopa del día', precio: 3_000 },
        { nombre: 'Ensalada Caprese', precio: 4_800 },
        { nombre: 'Ceviche clásico', precio: 6_900 },
        { nombre: 'Rollitos primavera', precio: 3_900 },
      ],
    },
    {
      categoria: 'Platos principales',
      items: [
        { nombre: 'Filete a la plancha', precio: 9_900 },
        { nombre: 'Salmón al limón', precio: 11_500 },
        { nombre: 'Pollo grillado BBQ', precio: 8_700 },
        { nombre: 'Lasagna boloñesa', precio: 8_900 },
        { nombre: 'Risotto de champiñones', precio: 8_400 },
        { nombre: 'Tacos de carnitas (3 u.)', precio: 7_200 },
        { nombre: 'Sándwich club', precio: 6_800 },
        { nombre: 'Hamburguesa gourmet', precio: 9_200 },
      ],
    },
    {
      categoria: 'Pastas',
      items: [
        { nombre: 'Spaghetti Carbonara', precio: 7_900 },
        { nombre: 'Fettuccine Alfredo', precio: 7_800 },
        { nombre: 'Penne Arrabbiata', precio: 7_400 },
        { nombre: 'Ravioles de espinaca', precio: 8_100 },
        { nombre: 'Gnocchi al pesto', precio: 7_600 },
      ],
    },
    {
      categoria: 'Ensaladas',
      items: [
        { nombre: 'Ensalada César', precio: 5_900 },
        { nombre: 'Ensalada Griega', precio: 5_800 },
        { nombre: 'Quinoa mediterránea', precio: 6_300 },
        { nombre: 'Ensalada mixta', precio: 4_900 },
      ],
    },
    {
      categoria: 'Bebidas',
      items: [
        { nombre: 'Agua mineral', precio: 1_500 },
        { nombre: 'Jugo natural naranja', precio: 2_800 },
        { nombre: 'Limonada menta · jengibre', precio: 2_900 },
        { nombre: 'Coca-Cola 350 ml', precio: 2_000 },
        { nombre: 'Té helado', precio: 1_900 },
        { nombre: 'Café americano', precio: 2_100 },
        { nombre: 'Cerveza artesanal', precio: 3_200 },
      ],
    },
    {
      categoria: 'Postres',
      items: [
        { nombre: 'Brownie con helado', precio: 4_500 },
        { nombre: 'Cheesecake frutilla', precio: 4_800 },
        { nombre: 'Tiramisú', precio: 4_700 },
        { nombre: 'Mousse de chocolate', precio: 4_200 },
        { nombre: 'Pie de limón', precio: 4_300 },
        { nombre: 'Helado artesanal (2 bolas)', precio: 3_900 },
      ],
    },
    {
      categoria: 'Extras',
      items: [
        { nombre: 'Pan de ajo', precio: 2_100 },
        { nombre: 'Papas fritas', precio: 3_200 },
        { nombre: 'Vegetales salteados', precio: 3_400 },
        { nombre: 'Arroz blanco', precio: 1_800 },
      ],
    },
  ];

  /* ———————————————————————————
     Render
     ——————————————————————————— */
  return (
    <main className="page">
      <h1 className="title">Menú</h1>

      {menu.map(({ categoria, items }) => (
        <section key={categoria} className="fade-in" style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--c-primary)', marginBottom: '1rem' }}>{categoria}</h2>

          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {items.map(({ nombre, precio }) => (
              <li key={nombre} className="card" style={{ gap: '.25rem' }}>
                <span style={{ fontWeight: 600 }}>{nombre}</span>
                <span style={{ color: 'var(--c-accent)', fontSize: '1.05rem' }}>
                  ${precio.toLocaleString('es-CL')}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
