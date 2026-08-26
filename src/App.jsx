import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const NAV_LINKS = [
  { href: "#pilares", label: "Pilares" },
  { href: "#servicios", label: "Servicios" },
  { href: "#estudio", label: "Estudio" },
  { href: "#contacto", label: "Contacto" },
];

const PILLARS = [
  {
    n: "01",
    title: "Innovation.",
    sub: "Impulsamos ideas que transforman.",
    body: "Detectamos el problema real detrás del pedido y lo convertimos en una hipótesis técnica clara antes de escribir la primera línea de código.",
  },
  {
    n: "02",
    title: "Creation.",
    sub: "Creamos soluciones a medida.",
    body: "Construimos software propio, sin plantillas ni atajos genéricos: cada producto se diseña alrededor de tu operación, no al revés.",
  },
  {
    n: "03",
    title: "Transformation.",
    sub: "Transformamos tecnología en impacto real.",
    body: "Medimos lo que importa: adopción, velocidad y resultado de negocio. La tecnología que no cambia nada, no está terminada.",
  },
];

const SERVICES = [
  {
    title: "Software a medida",
    body: "Productos y sistemas internos diseñados desde cero para tu proceso, no adaptados de una plantilla ajena.",
  },
  {
    title: "Apps web y móviles",
    body: "Interfaces rápidas y cuidadas, pensadas para que las use tu equipo todos los días sin fricción.",
  },
  {
    title: "Automatización & IA",
    body: "Flujos que eliminan trabajo repetitivo e integran modelos de lenguaje donde generan valor real.",
  },
  {
    title: "Plataformas e integraciones",
    body: "Conectamos tus herramientas actuales en un solo ecosistema, sin islas de datos ni doble carga.",
  },
  {
    title: "Consultoría técnica",
    body: "Diagnóstico de arquitectura y stack antes de invertir, para decidir con información y no por moda.",
  },
  {
    title: "Producto digital",
    body: "De la idea al MVP: research, diseño de interacción y desarrollo bajo un mismo equipo.",
  },
];

const DIFFERENTIATORS = [
  { title: "Cero plantillas", body: "Cada proyecto arranca de un diagnóstico propio, no de un theme reciclado." },
  { title: "Un solo equipo", body: "Hablás directo con quien escribe el código. Sin capas comerciales en el medio." },
  { title: "Foco en impacto", body: "Diseñamos para métricas de negocio, no solo para que se vea bien en una demo." },
  { title: "Entregas visibles", body: "Ciclos cortos con avances tangibles, para decidir con evidencia en cada etapa." },
];

function HexMark({ size = 120, intro = false, assembled = true }) {
  return (
    <div
      className={`hexmark${intro ? " hexmark--intro" : ""}${assembled ? " is-assembled" : ""}`}
      style={{ "--hex-size": `${size}px` }}
      aria-hidden="true"
    >
      <span className="hexmark__half hexmark__half--blue" />
      <span className="hexmark__half hexmark__half--violet" />
      <span className="hexmark__core" />
    </div>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default function App() {
  const [heroReady, setHeroReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="page">
      <div className="bg-field" aria-hidden="true" />

      <header className="nav">
        <a className="nav__brand" href="#top">
          <HexMark size={28} />
          <span>InnovaX</span>
        </a>

        <nav className={`nav__links${menuOpen ? " is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href="https://www.innovax.com.ar" target="_blank" rel="noreferrer">
            innovax.com.ar
          </a>
        </nav>

        <button
          className={`nav__toggle${menuOpen ? " is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero__eyebrow">Córdoba, Argentina · Software studio</p>
          <h1 className={`hero__title${heroReady ? " is-ready" : ""}`}>
            Empowering ideas
            <br />
            with technology.
          </h1>
          <p className="hero__body">
            Diseñamos y construimos software a medida para empresas que necesitan
            que la tecnología funcione, no solo que se vea bien.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contacto">
              Iniciar un proyecto
            </a>
            <a className="btn btn--ghost" href="#servicios">
              Ver servicios
            </a>
          </div>

          <div className="hero__mark">
            <HexMark size={220} intro assembled={heroReady} />
          </div>
        </section>

        <section id="pilares" className="pillars">
          <Reveal as="p" className="section__eyebrow">
            Cómo trabajamos
          </Reveal>
          <Reveal as="h2" className="section__title" delay={60}>
            Tres movimientos, un mismo criterio.
          </Reveal>

          <div className="pillars__grid">
            {PILLARS.map((p, i) => (
              <Reveal as="article" className="pillar" key={p.n} delay={i * 90}>
                <span className="pillar__index">{p.n}</span>
                <h3>{p.title}</h3>
                <p className="pillar__sub">{p.sub}</p>
                <p className="pillar__body">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="servicios" className="services">
          <Reveal as="p" className="section__eyebrow">
            Lo que hacemos
          </Reveal>
          <Reveal as="h2" className="section__title" delay={60}>
            Servicios pensados para crecer con vos.
          </Reveal>

          <div className="services__grid">
            {SERVICES.map((s, i) => (
              <Reveal as="article" className="service" key={s.title} delay={i * 70}>
                <span className="service__glyph" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="estudio" className="studio">
          <div className="studio__copy">
            <Reveal as="p" className="section__eyebrow">
              El estudio
            </Reveal>
            <Reveal as="h2" className="section__title" delay={60}>
              Un equipo chico, con criterio técnico propio.
            </Reveal>
            <Reveal as="p" className="studio__lead" delay={120}>
              InnovaX es un estudio de desarrollo enfocado en potenciar ideas con
              tecnología real: sin intermediarios comerciales, sin procesos
              inflados. Definimos, construimos y medimos junto a vos.
            </Reveal>
          </div>

          <div className="studio__grid">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal as="article" className="diff" key={d.title} delay={i * 70}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact">
          <Reveal as="p" className="section__eyebrow">
            Hablemos
          </Reveal>
          <Reveal as="h2" className="section__title" delay={60}>
            ¿Tenés una idea? Démosle forma.
          </Reveal>
          <Reveal as="p" className="contact__lead" delay={120}>
            Contanos qué necesitás construir. Respondemos en menos de un día hábil.
          </Reveal>

          <Reveal className="contact__actions" delay={180}>
            <a className="btn btn--primary" href="mailto:hola@innovax.com.ar">
              Escribir un email
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.innovax.com.ar"
              target="_blank"
              rel="noreferrer"
            >
              www.innovax.com.ar
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <HexMark size={24} />
          <span>InnovaX</span>
        </div>
        <p>Empowering ideas with technology.</p>
        <p className="footer__meta">© {new Date().getFullYear()} InnovaX. Córdoba, Argentina.</p>
      </footer>
    </div>
  );
}