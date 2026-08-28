import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const CONTACT = {
  instagramHandle: "innovax.team",
  instagramUrl: "https://instagram.com/innovax.team",
  email: "innovax.devs@gmail.com",
  whatsappUrl: "https://wa.me/5490000000000",
  phoneHref: "tel:+5490000000000",
};

const services = [
  { tag: "software.build()", title: "Desarrollo de software", description: "Soluciones a medida para optimizar procesos, resolver problemas y convertir ideas en productos reales.", status: "en producción" },
  { tag: "web.deploy()", title: "Desarrollo web", description: "Experiencias web rápidas, responsive y modernas, diseñadas para representar marcas y generar resultados.", status: "en producción" },
  { tag: "shop.launch()", title: "E-commerce", description: "Tiendas online a medida, con pasarelas de pago, gestión de stock y checkout pensado para vender sin fricción.", status: "en producción" },
  { tag: "system.scale()", title: "Sistemas a medida", description: "Plataformas construidas alrededor de la forma real de trabajar de cada empresa.", status: "activo" },
  { tag: "api.connect()", title: "Integraciones & APIs", description: "Conectamos servicios y sistemas para eliminar tareas manuales y automatizar procesos.", status: "activo" },
];

const projects = [
  {
    number: "01",
    category: "Full-Stack / ERP",
    technologies: "Next.js 16 · TypeScript · Tailwind CSS · Prisma · PostgreSQL · NextAuth v5 · Vercel Blob",
    title: "KJ Importados — ERP a medida",
    description:
      "Sistema de gestión a medida para un negocio real de venta de perfumes: productos y fraccionamiento en decants, ventas, compras, presupuestos, finanzas y dashboard en un solo lugar.",
    highlights: [
      "Precios con fórmula configurable u override manual, con historial de auditoría",
      "Costeo promedio ponderado en compras a proveedores",
      "Estados de pago y banderas logísticas independientes por pedido (armado, enviado, retirado, impreso)",
      "Caja unificada generada automáticamente por eventos de negocio, sin carga manual",
    ],
    branch: "feat/kj-perfumes-erp",
    diff: "+1240 -180",
  },
  {
    number: "02",
    category: "Desktop / Gestión",
    technologies: "React · TypeScript · Tailwind CSS · Python · Flask · SQLite · Tauri",
    title: "MANAPASEGUR S.A.S.",
    description:
      "Sistema de escritorio para una empresa de seguridad privada: gestión de empleados, puestos y turnos, con generación automática de cronogramas mensuales y envío por email en PDF.",
    highlights: [
      "Generación automática de cronogramas mensuales a partir de puestos y turnos",
      "Envío automático de cronogramas por email en formato PDF",
      "Backend en Python + Flask con persistencia en SQLite",
      "Empaquetado como app de escritorio para Windows con Tauri",
    ],
    branch: "feat/manapasegur-desktop",
    diff: "+890 -60",
  },
  {
    number: "03",
    category: "MICROSERVICES",
    title: "Scalable System",
    description: "Arquitectura distribuida preparada para crecer junto al negocio.",
    technologies: "Spring Boot · Kafka · Docker",
    diff: "+2,015 −214",
    branch: "main",
    highlights: [
      "Procesamiento de eventos en tiempo real",
      "Despliegue automatizado con Docker + CI/CD",
      "Escalado horizontal sin downtime",
    ],
  },
];

const differences = [
  ["--custom", "Desarrollo a medida", "Nada de soluciones genéricas. Construimos alrededor de tu problema."],
  ["--scalable", "Arquitectura escalable", "Pensamos el producto para hoy sin cerrarle la puerta al mañana."],
  ["--modern", "Tecnología moderna", "Herramientas actuales para productos rápidos, mantenibles y sólidos."],
  ["--direct", "Comunicación directa", "Un equipo chico, cercano y enfocado en entender lo que realmente necesitás."],
];

const team = [
  { slug: "pilar-orlando", name: "Pilar Orlando", linkedin: "https://linkedin.com/in/pilar-orlando" },
  { slug: "mateo-calcagno", name: "Mateo Calcagno", linkedin: "https://linkedin.com/in/mateo-calcagno" },
  { slug: "milagros-delfino", name: "Milagros Delfino", linkedin: "https://linkedin.com/in/miladelfino" },
  { slug: "elias-raimundo", name: "Elias Raimundo", linkedin: "https://linkedin.com/in/elias-raimundo" },
];

// ---------------------------------------------------------------------------
// Real, hand-drawn icons (no external icon package required).
// ---------------------------------------------------------------------------
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16.6v2.9a1.9 1.9 0 0 1-2.07 1.9 18.8 18.8 0 0 1-8.2-2.92 18.5 18.5 0 0 1-5.7-5.7A18.8 18.8 0 0 1 2.1 4.57 1.9 1.9 0 0 1 3.99 2.5H6.9a1.9 1.9 0 0 1 1.9 1.63c.12.91.34 1.81.66 2.67a1.9 1.9 0 0 1-.43 2L7.86 9.97a15.2 15.2 0 0 0 5.7 5.7l1.18-1.18a1.9 1.9 0 0 1 2-.43c.86.32 1.76.54 2.67.66A1.9 1.9 0 0 1 21 16.6Z" />
    </svg>
  );
}

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2.1c-5.46 0-9.9 4.43-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.24-1.37a9.86 9.86 0 0 0 4.8 1.22h.01c5.46 0 9.9-4.43 9.9-9.9 0-2.64-1.03-5.13-2.9-6.99a9.83 9.83 0 0 0-6.99-2.9Zm5.79 14.07c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.77-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.3.38-.42.51-.14.15-.29.31-.13.6.17.29.75 1.24 1.61 2.01 1.11 1 2.04 1.31 2.34 1.46.29.14.46.12.63-.07.18-.2.74-.86.94-1.16.19-.29.39-.24.65-.14.27.09 1.7.8 1.99.95.29.14.49.21.56.33.07.13.07.7-.17 1.38Z" />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.06a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.5 20h-3.38v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.7V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.3 2.26 4.3 5.2V20Z" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6 9 6.5L21 6" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Motion helpers — everything speaks the same "terminal / build log" language
// as the rest of the site, instead of scattered generic effects.
// ---------------------------------------------------------------------------
function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}
function isFinePointer() {
  return typeof window !== "undefined" && window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
}

// A blinking-cursor "custom cursor": a dot that tracks the mouse instantly
// and a ring that trails it, growing over anything interactive.
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(loop);
    };

    const grow = () => document.body.classList.add("cursor-hover");
    const shrink = () => document.body.classList.remove("cursor-hover");
    const interactive = document.querySelectorAll("a, button, .project-card, input, textarea");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}

// Thin build-progress bar pinned to the top of the viewport.
function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? doc.scrollTop / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  );
}

// Wraps a single interactive child and makes it drift gently toward the
// cursor, like a magnet — snaps back smoothly on mouse leave.
function Magnetic({ children, strength = 14 }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transition = "transform 0s";
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
    el.style.transform = "";
  };

  return React.cloneElement(children, {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
  });
}

// "Decodes" text from scrambled characters into the real string once it
// scrolls into view — reads like a terminal resolving a value.
const SCRAMBLE_CHARS = "!<>-_\\/[]{}=+*^?#01";

function Scramble({ text, as: Tag = "span", className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let interval;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          let iteration = 0;
          interval = setInterval(() => {
            setDisplay(
              text
                .split("")
                .map((ch, idx) => {
                  if (ch === " ") return " ";
                  if (idx < iteration) return text[idx];
                  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                })
                .join("")
            );
            iteration += 0.5;
            if (iteration >= text.length) {
              clearInterval(interval);
              setDisplay(text);
            }
          }, 32);
          observer.disconnect();
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [text]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}

// ---------------------------------------------------------------------------
// Terminal signature — a small, live "build log" for InnovaX itself.
// ---------------------------------------------------------------------------
const BUILD_SCRIPT = [
  { type: "cmd", text: "innovax init --idea" },
  { type: "out", text: "> analizando el problema real del negocio" },
  { type: "out", text: "> diseñando arquitectura escalable" },
  { type: "out", text: "> conectando integraciones & APIs" },
  { type: "ok", text: "✓ build lista para producción" },
];

function TerminalSignature() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState([]);
  const reduceMotion = useRef(
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setDone(BUILD_SCRIPT);
      return;
    }

    if (lineIndex >= BUILD_SCRIPT.length) {
      const resetTimer = setTimeout(() => {
        setDone([]);
        setLineIndex(0);
        setCharIndex(0);
      }, 2200);
      return () => clearTimeout(resetTimer);
    }

    const current = BUILD_SCRIPT[lineIndex];
    if (charIndex <= current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), current.type === "cmd" ? 55 : 18);
      return () => clearTimeout(t);
    }

    const advance = setTimeout(() => {
      setDone((d) => [...d, current]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, current.type === "ok" ? 900 : 260);
    return () => clearTimeout(advance);
  }, [lineIndex, charIndex]);

  const current = BUILD_SCRIPT[lineIndex];
  const typing = current ? current.text.slice(0, charIndex) : "";

  return (
    <div className="terminal" role="img" aria-label="Consola simulada mostrando el proceso de construcción de un proyecto InnovaX">
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="terminal-title">innovax — build</span>
      </div>
      <div className="terminal-body">
        {done.map((line, i) => (
          <div className={`terminal-line t-${line.type}`} key={i}>
            {line.type === "cmd" ? <span className="prompt">$</span> : null} {line.text}
          </div>
        ))}
        {current && (
          <div className={`terminal-line t-${current.type}`}>
            {current.type === "cmd" ? <span className="prompt">$</span> : null} {typing}
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const [flippedCards, setFlippedCards] = useState(() => new Set());
  const [activeProject, setActiveProject] = useState(0);
  const [formStatus, setFormStatus] = useState("idle");

  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-card");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Horizontal "commit rail": mouse-wheel and drag both move the track
  // sideways, so the projects section breaks out of the vertical scroll.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      if (prefersReducedMotion()) return;
      const { scrollLeft, scrollWidth, clientWidth } = track;
      const atStart = scrollLeft <= 2;
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 2;
      const goingDown = e.deltaY > 0;
      if ((atEnd && goingDown) || (atStart && !goingDown)) return;
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    };

    const handleScroll = () => {
      const cardWidth = track.scrollWidth / projects.length;
      const idx = Math.round(track.scrollLeft / cardWidth);
      setActiveProject(Math.min(projects.length - 1, Math.max(0, idx)));
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("wheel", handleWheel);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleFlip = (index) => {
    if (dragMoved.current) {
      dragMoved.current = false;
      return;
    }
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handlePointerDown = (e) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    isDragging.current = true;
    dragMoved.current = false;
    dragStart.current = { x: e.clientX, scrollLeft: trackRef.current.scrollLeft };
    trackRef.current.classList.add("is-dragging");
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const delta = e.clientX - dragStart.current.x;
    if (Math.abs(delta) > 5) dragMoved.current = true;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - delta;
  };

  const endDrag = () => {
    isDragging.current = false;
    trackRef.current?.classList.remove("is-dragging");
  };

  const scrollToProject = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / projects.length;
    track.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  const FORMSPREE_URL = "https://formspree.io/f/mljeevwb";

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  const handleCardTilt = (e) => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transition = "transform 0s";
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const resetCardTilt = (e) => {
    const card = e.currentTarget;
    card.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
    card.style.transform = "";
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="grid-overlay" />
      <CustomCursor />
      <ScrollProgress />

      <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <a href="#inicio" className="brand" onClick={closeMenu}>
          <img src="/innovax-logo.png" alt="InnovaX" />
          <span>InnovaX</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#equipo" onClick={closeMenu}>Equipo</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>

        <Magnetic>
        <a href="#contacto" className="nav-button" onClick={closeMenu}>
          Hablemos <span>↗</span>
        </a>
      </Magnetic>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-grid" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-glow cyan-glow" />
          <div className="hero-glow purple-glow" />

          <div className="hero-content">
            <div className="eyebrow hero-animation">
              <span /> SOFTWARE DEVELOPMENT · ARGENTINA
            </div>

            <h1 className="hero-title hero-animation">
              Ideas que se
              <br />
              convierten en
              <br />
              <Scramble as="span" className="accent" text="software." />
            </h1>

            <p className="hero-description hero-animation">
              Diseñamos y desarrollamos productos digitales, aplicaciones web
              y sistemas a medida para empresas que quieren avanzar.
            </p>

            <div className="hero-buttons hero-animation">
              <Magnetic>
                <a href="#proyectos" className="button primary">Explorar proyectos <span>↗</span></a>
              </Magnetic>
              <Magnetic>
                <a href="#contacto" className="button secondary">Contanos tu idea</a>
              </Magnetic>
            </div>
          </div>

          <div className="hero-visual hero-animation">
            <TerminalSignature />
          </div>

          <div className="hero-meta">
            <span>01 — 05</span>
            <span>INNOVATION · CREATION · TRANSFORMATION</span>
            <span>SCROLL ↓</span>
          </div>

          <div className="hero-side-label">INNOVAX / DIGITAL SYSTEMS</div>
        </section>

        <section id="servicios" className="section services reveal">
          <div className="section-intro">
            <div>
              <div className="section-label">01 / SKILLS</div>
              <h2><Scramble as="span" className="accent-cyan" text="Innovación" /><br />que impulsa.</h2>
            </div>
            <p>Desde una idea inicial hasta un sistema completo. Tecnología pensada para resolver, no para complicar.</p>
          </div>

        </section>

        <div className="services-marquee">
          <span className="services-marquee-hint">auto-scroll · hover para pausar</span>
          <div className="services-track">
            {[...services, ...services].map((service, index) => (
              <article
                className="service-card"
                key={`${service.tag}-${index}`}
                onMouseMove={handleCardTilt}
                onMouseLeave={resetCardTilt}
              >
                <div className="service-top">
                  <span className="service-tag">{service.tag}</span>
                  <span className="service-status"><i /> {service.status}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contacto">Conocer más <span>↗</span></a>
                </div>
                <div className="card-corner" />
              </article>
            ))}
          </div>
        </div>

        <section id="proyectos" className="section projects reveal">
          <div className="section-intro">
            <div>
              <div className="section-label">02 / SELECTED WORK</div>
              <h2><Scramble as="span" className="accent-violet" text="Creación" /><br />con propósito.</h2>
            </div>
            <p>Proyectos que combinan producto, ingeniería y diseño para transformar necesidades concretas en soluciones digitales. Arrastrá, scrolleá o hacé click: la card elegida se agranda y gira para mostrar el detalle.</p>
          </div>

          <div
            className={`projects-track ${flippedCards.size > 0 ? "has-active" : ""}`}
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
          >
            {projects.map((project, index) => (
              <article
                className={`project-card project-${index + 1} reveal-card ${flippedCards.has(index) ? "is-flipped" : ""} ${
                  flippedCards.size > 0 && !flippedCards.has(index) ? "is-dimmed" : ""
                }`}
                key={project.number}
                onClick={() => toggleFlip(index)}
              >
                <div className="card-flip-inner">
                  <div className="card-face card-face-front">
                    <div className="project-header">
                      <span>{project.number}</span>
                      <span>{project.category}</span>
                    </div>
                    <div className="project-content">
                      <small>{project.technologies}</small>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <span className="flip-hint">⟲ click para expandir</span>
                  </div>

                  <div className="card-face card-face-back">
                    <div className="project-header">
                      <span>{project.number}</span>
                      <span>DETAILS</span>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <ul className="project-highlights">
                        {project.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <div className="project-gitline">
                        <span className="git-branch">⎇ {project.branch}</span>
                        <span className="git-diff">
                          <em className="add">{project.diff.split(" ")[0]}</em>
                          <em className="rem">{project.diff.split(" ")[1]}</em>
                        </span>
                      </div>
                      <a href="#contacto">Hablemos de esto <span>↗</span></a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-rail">
            <span className="rail-hint">arrastrá o scrolleá →</span>
            <div className="rail-dots">
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.number}
                  className={`rail-dot ${activeProject === index ? "active" : ""}`}
                  onClick={() => scrollToProject(index)}
                  aria-label={`Ver proyecto ${project.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="manifesto reveal">
          <div className="manifesto-top">
            <div className="section-label">03 / HOW WE WORK</div>
            <h2><Scramble as="span" className="accent-transform" text="Transformación" /><br />con impacto.</h2>
             <p>En InnovaX convertimos ideas en software que funciona. Desarrollo, diseño y producto, en un mismo equipo.</p>
          </div>
          <div className="difference-strip">
            <span className="difference-strip-label">Por qué InnovaX</span>
            <div className="difference-tags">
              {differences.map(([flag, title, text]) => (
                <div className="difference-tag" key={flag}>
                  <strong>{flag}</strong>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="contact reveal">
          <div className="contact-grid-bg" />
          <div className="contact-orb" />
          <div className="contact-inner">
            <div className="section-label">04 / LET'S TALK</div>
            <h2>Tenés una idea.<br /><Scramble as="span" className="accent" text="Hagamos que pase." /></h2>
            <p>Contanos qué querés construir y demos juntos el próximo paso.</p>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required disabled={formStatus === "sending"} />
                </div>
                <div className="contact-field">
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" name="empresa" type="text" placeholder="Nombre de tu empresa" disabled={formStatus === "sending"} />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="tu@email.com" required disabled={formStatus === "sending"} />
              </div>
              <div className="contact-field">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="5" placeholder="Contanos sobre tu proyecto..." required disabled={formStatus === "sending"} />
              </div>
              <input type="hidden" name="_subject" value="Nuevo contacto desde innovax.com" />

              <button type="submit" className="button primary contact-submit" disabled={formStatus === "sending"}>
                {formStatus === "sending" ? "Enviando..." : <>Enviar mensaje <span>↗</span></>}
              </button>

              {formStatus === "success" && (
                <p className="form-feedback form-feedback-success">
                  ✓ Mensaje enviado. Te vamos a responder a la brevedad.
                </p>
              )}
              {formStatus === "error" && (
                <p className="form-feedback form-feedback-error">
                  ✕ Hubo un problema al enviar. Probá de nuevo o escribinos directo a {CONTACT.email}.
                </p>
              )}
            </form>

            <div className="contact-buttons">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" className="button whatsapp-button">
                <IconWhatsApp className="button-icon" /> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.email}`} className="button secondary">
                <IconMail className="button-icon" /> {CONTACT.email}
              </a>
              <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" className="button secondary">
                <IconInstagram className="button-icon" /> @{CONTACT.instagramHandle}
              </a>
            </div>
          </div>
        </section>

        <section id="equipo" className="section team reveal">
          <div className="section-intro">
            <div>
              <div className="section-label">05 / TEAM</div>
              <h2>Personas detrás<br />de <Scramble as="span" className="accent" text="InnovaX." /></h2>
            </div>
            <p>Un equipo multidisciplinario que combina ingeniería, diseño y visión de producto.</p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card reveal-card" key={member.slug}>
                <div className="team-photo">
                  <div className="team-photo-frame">
                    <img src={`/team/${member.slug}.png`} alt={member.name} />
                  </div>
                </div>
                <div className="team-info">
                  <a className="team-role" href={member.linkedin} target="_blank" rel="noreferrer">
                    <IconLinkedIn className="team-role-icon" /> LinkedIn
                  </a>
                  <h3>{member.name}</h3>
                  <p>Co-Founder y Full Stack Dev</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src="/innovax-logo.png" alt="InnovaX" />
          <strong>InnovaX</strong>
        </div>
        <p>Empowering ideas with technology.</p>
        <span>© 2026 InnovaX</span>
      </footer>

      <div className="floating-actions">
        <a className="floating-whatsapp" href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <IconWhatsApp className="floating-icon" />
        </a>
        <a className="floating-instagram" href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
          <IconInstagram className="floating-icon" />
        </a>
        <a
          className="floating-linkedin"
          href="https://www.linkedin.com/company/innovax-team"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <IconLinkedIn className="floating-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;