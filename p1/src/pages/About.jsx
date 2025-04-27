// src/pages/About.jsx
export default function About() {
  /* ---------- CONTENIDO LARGO (≈ 1 000 palabras) ---------- */
  const whoWeAre = [
    `Reserseat nace en 2024 como la respuesta a un problema que todos los
    restaurantes corporativos conocen demasiado bien: la falta de tiempo y la
    saturación de los canales tradicionales para gestionar reservas. Somos un
    grupo multidisciplinario de ingenieros, diseñadores de experiencia de
    usuario y profesionales de la industria gastronómica que, tras años de
    convivir con cuadernos de papel, llamadas perdidas y correos extraviados,
    decidimos unir fuerzas para crear una plataforma que simplifique la vida de
    clientes y colaboradores por igual.`,
    `Nuestra misión es **conectar personas y experiencias gastronómicas a través
    de la tecnología**, derribando las barreras que generan roces en el momento
    de reservar un asiento, organizar turnos o comunicar cambios de último
    minuto. Creemos que cada almuerzo de equipo, cada comida ejecutiva y cada
    instante en un comedor empresarial debería fluir con la misma naturalidad
    con la que nuestros usuarios navegan por Internet.`,
    `El equipo fundador está compuesto por tres pilares complementarios. Por un
    lado, el conocimiento técnico: desarrolladores con experiencia en
    aplicaciones de alto tráfico, infraestructura en la nube y seguridad de
    datos. Por otro, la visión de producto: diseñadores enfocados en
    usabilidad, accesibilidad y diseño inclusivo para todos los perfiles
    laborales dentro de una empresa. Finalmente, la mirada operativa: ex
    gerentes de restaurantes y jefes de comedor que entienden las presiones de
    servicio, los picos de demanda y la importancia de los detalles que hacen
    memorable la experiencia de un comensal. Esta mezcla nos permite abordar
    cada problema desde todos los ángulos, evitando soluciones a medias y
    priorizando la empatía con el usuario final.`,
    `Nos definimos como una compañía **impulsada por valores** claros:
    transparencia en la comunicación, iteración constante basada en métricas
    reales y compromiso con la sostenibilidad. Este último punto nos impulsa a
    reducir el consumo de papel —tradicional en las libretas de reservas—,
    optimizar el gasto energético de nuestra infraestructura y fomentar
    prácticas responsables que mejoren el bienestar del personal de cocina y
    servicio.`,
    `A largo plazo, aspiramos a convertirnos en la referencia latinoamericana en
    soluciones de gestión gastronómica corporativa, manteniendo siempre la
    cercanía con nuestros clientes y el soporte humano que marca la diferencia
    cuando surgen imprevistos.`
  ];

  const whatWeDo = [
    `En términos sencillos, **Reserseat es la central que coordina todas las
    piezas del rompecabezas de una reserva**: horarios, número de personas,
    preferencias de menú, historial de visitas, facturación interna y
    notificaciones automáticas. Nuestro sistema se integra con los canales que
    las empresas ya utilizan —correo corporativo, apps de mensajería interna o
    incluso tarjetas de proximidad— para que el flujo de reservas sea
    prácticamente imperceptible, pero enormemente eficaz.`,
    `Para los trabajadores de un restaurante corporativo, proporcionamos un
    tablero en tiempo real donde pueden ver la ocupación de mesas, filtrar por
    sala o horario y procesar cambios con un simple arrastre y soltar. Cada
    acción queda registrada para auditoría, reduciendo los malentendidos y
    ofreciendo datos valiosos sobre picos de demanda, platos más solicitados y
    tiempos promedio de estadía.`,
    `Para los comensales, diseñamos una interfaz móvil minimalista donde pueden
    **reservar, modificar o cancelar sin necesidad de llamar**. La aplicación
    confirma al instante, envía recordatorios y actualiza el código QR que
    sirve de pase de acceso al comedor. Esto evita filas y acelera el ingreso,
    algo crítico en recintos con ventanas de almuerzo muy ajustadas.`,
    `Más allá de las reservas, ofrecemos módulos adicionales: analítica de
    consumo, encuestas de satisfacción y gestión de turnos de personal. Todo se
    conecta con un motor de reportes que ayuda a los administradores a tomar
    decisiones basadas en datos —por ejemplo, redistribuir la brigada de cocina
    en función de la previsión de reservas o ajustar la oferta de menús
    saludables cuando las encuestas lo demandan.`,
    `Nuestro compromiso con la **innovación continua** implica actualizaciones
    mensuales, soporte multilingüe y un canal abierto con la comunidad de
    usuarios para priorizar características. De este diálogo han nacido ideas
    como el modo “evento especial”, que permite bloquear mesas para visitas
    corporativas VIP y automatizar la comunicación entre anfitriones, seguridad
    y cocina.`
  ];

  /* ---------- LISTA RESUMEN DE BENEFICIOS (siguen los bullets) ---------- */
  const benefits = [
    { title: 'Centralización', text: 'Todas las reservas y el historial de clientes en un único panel.' },
    { title: 'Ahorro de tiempo', text: 'Sin llamadas ni confusiones: confirma o cambia en segundos.' },
    { title: 'Clientes felices', text: 'Reciben recordatorios y pueden modificar su reserva fácilmente.' },
    { title: 'Datos en tiempo real', text: 'Tablero con ocupación, tiempos de estadía y picos de demanda.' },
    { title: 'Sostenibilidad', text: 'Eliminamos libretas de papel y optimizamos recursos.' }
  ];

  return (
    <main className="page">
      <h1 className="title">Sobre nosotros</h1>

      {/* ---------- QUIÉNES SOMOS ---------- */}
      <section className="content fade-in">
        <h2>¿Quiénes somos?</h2>
        {whoWeAre.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </section>

      {/* ---------- QUÉ HACEMOS ---------- */}
      <section className="content fade-in">
        <h2>¿Qué hacemos?</h2>
        {whatWeDo.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </section>

      {/* ---------- BENEFICIOS RESUMIDOS ---------- */}
      <section className="content fade-in">
        <h2>Beneficios esenciales</h2>
        <ul>
          {benefits.map(({ title, text }, idx) => (
            <li key={idx} style={{ marginBottom: '1rem' }}>
              <h3 style={{ margin: '0 0 .25rem 0' }}>{title}</h3>
              <p style={{ margin: 0 }}>{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
  