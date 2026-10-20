import React, { useEffect, useRef, useState } from "react";
import "./products.css";

// Mismos datos de contacto que en App.jsx
const WHATSAPP = "https://wa.me/5493584257936";

// ---------------------------------------------------------------------------
// Datos de cada producto. Editá textos, módulos y planes acá.
// Precios: poné el valor real en `price` (ej: "$25.000") cuando lo tengas.
// ---------------------------------------------------------------------------
export const PRODUCTS = {
  "/stockea": {
    theme: "stockea",
    name: "STOCKEA",
    menuLabel: "Stockea",
    menuHint: "Gestión para comercios y pymes",
    images: ["/stockea1.png", "/stockea2.png"],
    eyebrow: "SISTEMA DE GESTIÓN · ERP",
    tagline: "Todo tu negocio bajo control.",
    intro:
      "Stock, ventas, compras y caja en un solo lugar. Para comercios, pymes y emprendedores que quieren crecer con orden.",
    modules: [
      { title: "Stock", text: "Inventario en tiempo real, alertas de faltantes y control de movimientos." },
      { title: "Ventas", text: "Facturación ágil, múltiples medios de pago y seguimiento de cada venta." },
      { title: "Compras", text: "Pedidos a proveedores, costos y reposición ordenada." },
      { title: "Caja", text: "Apertura, cierre y arqueo diario sin planillas." },
      { title: "Clientes", text: "Historial, cuentas corrientes y datos siempre a mano." },
      { title: "Reportes", text: "Qué se vende, qué deja ganancia y cómo viene el mes." },
      { title: "Sucursales", text: "Varios locales, un solo panel de control." },
    ],
    plansNote: "¿Necesitás otra combinación de módulos? La armamos con vos.",
    plans: [
      {
        name: "Start",
        price: "$40.000",
        period: "/ mes",
        oldPrice: "$55.000",
        discount: "-27%",
        desc: "Para gestionar tu negocio de forma simple y ordenada.",
        features: [
          "Productos, categorías y marcas",
          "Control de stock",
          "Ventas e historial",
          "Ficha de clientes",
          "Panel con métricas básicas",
        ],
        cta: "Empezar con Start",
      },
      {
        name: "Pro",
        price: "$60.000",
        period: "/ mes",
        oldPrice: "$85.000",
        discount: "-30%",
        desc: "Para tener una gestión más completa y controlar cada movimiento.",
        features: [
          "Todas las funcionalidades del plan Start",
          "Compras y proveedores",
          "Presupuestos para clientes",
          "Cuenta corriente y cobro de deuda",
          "Caja, gastos y flujo de caja",
          "Reportes exportables en PDF",
        ],
        highlight: true,
        cta: "Empezar con Pro",
      },
      {
        name: "Custom",
        price: "A cotizar",
        desc: "Para adaptar el sistema a la forma en que trabaja tu negocio.",
        features: [
          "Todas las funcionalidades del plan Pro",
          "Adaptado a tu rubro y flujo de trabajo",
          "Integraciones (facturación, pagos, WhatsApp)",
          "Multi-sucursal",
          "Marca propia",
          "Soporte dedicado y onboarding asistido",
        ],
        cta: "Hablar con el equipo",
      },
    ],
  },

  "/turnea": {
    theme: "turnea",
    name: "TURNEA",
    menuLabel: "Turnea",
    menuHint: "Turnos online para tu negocio",
    images: ["/turnea1.png", "/turnea2.png"],
    eyebrow: "AGENDA · TURNOS ONLINE",
    tagline: "Tus turnos, sin llamadas ni esperas.",
    intro:
      "Tus clientes reservan online y vos controlás agenda, profesionales, servicios, caja y reportes desde un solo lugar.",
    modules: [
      { title: "Agenda", text: "Toda tu semana a la vista, sin superposiciones." },
      { title: "Turnos online", text: "Tus clientes reservan solos, a cualquier hora." },
      { title: "Profesionales", text: "Agenda y horarios propios para cada integrante del equipo." },
      { title: "Servicios", text: "Duración y precio configurables para cada servicio." },
      { title: "Clientes", text: "Historial de visitas y datos de contacto." },
      { title: "Caja", text: "Cobros y movimientos del día ordenados." },
      { title: "Reportes", text: "Ocupación, ingresos y servicios más pedidos." },
    ],
    plansNote: "El precio se define según tu negocio. Escribinos y te pasamos la propuesta.",
    plans: [
      {
        name: "Turnea",
        price: "A consultar",
        desc: "Un único plan con todo incluido para gestionar tus turnos.",
        features: [
          "Agenda",
          "Turnos online",
          "Profesionales",
          "Servicios",
          "Clientes",
          "Caja",
          "Reportes",
        ],
        highlight: true,
        cta: "Consultar precio",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Router mínimo por hash: "#/stockea", "#/turnea". Cualquier otro hash
// ("#servicios", "#contacto"...) significa "estoy en el inicio".
// ---------------------------------------------------------------------------
function getRoute() {
  const h = window.location.hash;
  return h.startsWith("#/") ? h.slice(1) : "/";
}

export function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onChange = () => {
      const next = getRoute();
      setRoute(next);
      // Esperamos a que React pinte la nueva vista y llevamos el scroll a su lugar
      setTimeout(() => {
        if (next !== "/") {
          window.scrollTo({ top: 0 });
          return;
        }
        const id = window.location.hash.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView();
        else if (!id) window.scrollTo({ top: 0 });
      }, 80);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

// ---------------------------------------------------------------------------
// Navbar con menú desplegable: Inicio (InnovaX) + productos
// ---------------------------------------------------------------------------
export function SiteNavbar({ route = "/" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const ddRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setDdOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setDdOpen(false);
  };

  const canHover = () => window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <a href="#inicio" className="brand" onClick={closeAll}>
        <img src="/innovax-logo.png" alt="InnovaX" />
        <span>InnovaX</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>

      <nav>
        <div
          className={`nav-dropdown ${ddOpen ? "open" : ""}`}
          ref={ddRef}
          onMouseEnter={() => canHover() && setDdOpen(true)}
          onMouseLeave={() => canHover() && setDdOpen(false)}
        >
          <button
            type="button"
            className="nav-dropdown-toggle"
            aria-haspopup="menu"
            aria-expanded={ddOpen}
            onClick={() => setDdOpen((v) => !v)}
          >
            Menú <span className="chev">▾</span>
          </button>

          <div className="nav-dropdown-panel" role="menu">
            <a
              href="#inicio"
              role="menuitem"
              className={`nav-dd-item ${route === "/" ? "active" : ""}`}
              onClick={closeAll}
            >
              <span className="dd-title"><i className="dd-dot dd-home" /> Inicio</span>
              <small>InnovaX</small>
            </a>

            <span className="nav-dd-label">Nuestros productos</span>

            {Object.entries(PRODUCTS).map(([path, p]) => (
              <a
                key={path}
                href={`#${path}`}
                role="menuitem"
                className={`nav-dd-item ${route === path ? "active" : ""}`}
                onClick={closeAll}
              >
                <span className="dd-title"><i className={`dd-dot dd-${p.theme}`} /> {p.menuLabel}</span>
                <small>{p.menuHint}</small>
              </a>
            ))}
          </div>
        </div>

        <a href="#servicios" onClick={closeAll}>Servicios</a>
        <a href="#proyectos" onClick={closeAll}>Clientes</a>
        <a href="#contacto" onClick={closeAll}>Contacto</a>
      </nav>

      <a href="#contacto" className="nav-button" onClick={closeAll}>
        Hablemos <span>↗</span>
      </a>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Página de producto: hero + qué incluye + planes + contacto
// ---------------------------------------------------------------------------
export function ProductPage({ product }) {
  const waLink = (plan) =>
    `${WHATSAPP}?text=${encodeURIComponent(
      plan
        ? `Hola! Me interesa el plan ${plan} de ${product.menuLabel}.`
        : `Hola! Quiero más información sobre ${product.menuLabel}.`
    )}`;

  return (
    <main className={`product product-${product.theme}`}>
      <section className="product-hero">
        <div className="product-glow" />
        <div className="product-hero-text">
        <div className="eyebrow"><span /> {product.eyebrow}</div>
        <h1>
          {product.name} <span className="product-by">by InnovaX</span>
        </h1>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-intro">{product.intro}</p>

        {product.externalUrl && (
          <div className="product-buttons">
            <a href={product.externalUrl} target="_blank" rel="noreferrer" className="button secondary">
              {product.externalLabel} <span>↗</span>
            </a>
          </div>
        )}
        </div>

        {product.images && (
          <div className="product-hero-media">
            {product.images.map((src, i) => (
              <img
                key={src}
                className={`shot shot-${i + 1}`}
                src={src}
                alt={`Captura de ${product.menuLabel} ${i + 1}`}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ))}
          </div>
        )}
      </section>

      <section className="product-section" id="incluye">
        <div className="section-label">01 / QUÉ INCLUYE</div>
        <h2>Todo en un solo lugar.</h2>
        <div className="product-modules">
          {product.modules.map((m) => (
            <article className="product-module" key={m.title}>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="planes">
        <div className="section-label">02 / PLANES</div>
        <h2>Elegí cómo empezar.</h2>
        <div className={`product-plans ${product.plans.length === 1 ? "product-plans-single" : ""}`}>
          {product.plans.map((plan) => (
            <article className={`plan-card ${plan.highlight ? "plan-highlight" : ""}`} key={plan.name}>
              {plan.highlight && product.plans.length > 1 && <span className="plan-badge">Más elegido</span>}
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              <div className="plan-price">
                {plan.price}
                {plan.period && <span className="plan-period"> {plan.period}</span>}
              </div>
              {plan.oldPrice && (
                <div className="plan-old">
                  <s>{plan.oldPrice}</s>
                  {plan.discount && <span className="plan-discount">{plan.discount}</span>}
                </div>
              )}
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href={waLink(plan.name)} target="_blank" rel="noreferrer" className="button plan-cta">
                {plan.cta || "Consultar este plan"} <span>↗</span>
              </a>
            </article>
          ))}
        </div>
        {product.plansNote && <p className="plans-note">{product.plansNote}</p>}
      </section>

      <section className="product-section product-final">
        <h2>¿Hablamos?</h2>
        <p>Contanos cómo trabajás y te armamos la mejor opción para vos.</p>
        <div className="product-buttons product-buttons-center">
          <a href={waLink()} target="_blank" rel="noreferrer" className="button whatsapp-button">
            Escribinos por WhatsApp
          </a>
          <a href="#contacto" className="button secondary">Formulario de contacto</a>
        </div>
      </section>
    </main>
  );
}

export function ProductFooter() {
  return (
    <footer className="site-footer product-footer">
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} InnovaX. Todos los derechos reservados.</span>
        <a href="#inicio" className="footer-top-btn">← Volver al inicio</a>
      </div>
    </footer>
  );
}