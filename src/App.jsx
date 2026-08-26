import { useEffect } from "react";
import "./index.css";

const services = [
  {
    number: "01",
    icon: "⌁",
    title: "Desarrollo de software",
    description:
      "Creamos soluciones de software a medida para optimizar procesos y resolver necesidades reales.",
  },
  {
    number: "02",
    icon: "</>",
    title: "Desarrollo web",
    description:
      "Sitios y aplicaciones web modernas, rápidas, responsive y pensadas para generar resultados.",
  },
  {
    number: "03",
    icon: "◇",
    title: "Sistemas a medida",
    description:
      "Construimos sistemas adaptados a la forma de trabajar de cada empresa.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Integraciones & APIs",
    description:
      "Conectamos plataformas, servicios y sistemas para automatizar procesos.",
  },
];

const projects = [
  {
    number: "01",
    category: "SOFTWARE",
    title: "Business Platform",
    description:
      "Sistema empresarial desarrollado para centralizar procesos y mejorar la gestión.",
    technologies: "Java · Spring Boot · React",
  },
  {
    number: "02",
    category: "WEB APP",
    title: "Digital Experience",
    description:
      "Aplicación web moderna enfocada en experiencia de usuario, rendimiento y escalabilidad.",
    technologies: "React · JavaScript · REST APIs",
  },
  {
    number: "03",
    category: "MICROSERVICES",
    title: "Scalable System",
    description:
      "Arquitectura distribuida preparada para crecer y soportar diferentes servicios.",
    technologies: "Spring Boot · Kafka · Docker",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "Python",
  "Kafka",
  "Docker",
  "PostgreSQL",
  "Git",
  "REST APIs",
];

function App() {
  /*
   * Animaciones al entrar las secciones en pantalla
   */
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">

      {/* =====================================
          NOISE
      ====================================== */}

      <div className="noise" />

      {/* =====================================
          NAVBAR
      ====================================== */}

      <header className="navbar">

        <a href="#inicio" className="brand">
          <img
            src="/innovax-logo.png"
            alt="InnovaX"
          />

          <span>InnovaX</span>
        </a>

        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#equipo">Equipo</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a
          href="#contacto"
          className="nav-button"
        >
          Hablemos
          <span>↗</span>
        </a>

      </header>


      <main>

        {/* =====================================
            HERO
        ====================================== */}

        <section
          id="inicio"
          className="hero"
        >

          <div className="hero-glow cyan-glow" />
          <div className="hero-glow purple-glow" />

          {/* Logo gigante de fondo */}
          <div className="background-logo">
            <img
              src="/innovax-logo.png"
              alt=""
            />
          </div>

          <div className="hero-content">

            <div className="eyebrow hero-animation">
              <span />
              SOFTWARE DEVELOPMENT · ARGENTINA
            </div>

            <h1 className="hero-animation hero-title">
              Desarrollamos
              <br />

              <span>tecnología</span>

              <br />

              para hacer crecer
              tus ideas.
            </h1>

            <p className="hero-animation hero-description">
              Creamos software, aplicaciones web y soluciones
              digitales a medida para empresas que buscan
              innovar y crecer.
            </p>

            <div className="hero-buttons hero-animation">

              <a
                href="#proyectos"
                className="button primary"
              >
                Ver proyectos
                <span>↗</span>
              </a>

              <a
                href="#contacto"
                className="button secondary"
              >
                Contanos tu idea
              </a>

            </div>

          </div>

          <div className="hero-bottom">

            <span>Innovación</span>
            <span>Software</span>
            <span>Desarrollo</span>
            <span>Transformación</span>

          </div>

        </section>


        {/* =====================================
            SERVICIOS
        ====================================== */}

        <section
          id="servicios"
          className="section services reveal"
        >

          <div className="section-heading">

            <div className="section-label">
              LO QUE HACEMOS
            </div>

            <h2>
              Soluciones que
              <br />
              <span>hacen la diferencia.</span>
            </h2>

            <p>
              Diseñamos soluciones tecnológicas pensadas
              para resolver problemas reales y generar
              resultados.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="service-card reveal-card"
                key={service.number}
              >

                <div className="service-top">

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span>
                    {service.number}
                  </span>

                </div>

                <div className="service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <a href="#contacto">
                    Consultar
                    <span>→</span>
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================
            PROYECTOS
        ====================================== */}

        <section
          id="proyectos"
          className="section projects reveal"
        >

          <div className="section-heading">

            <div className="section-label">
              PORTFOLIO
            </div>

            <h2>
              Proyectos que
              <br />
              <span>construimos.</span>
            </h2>

            <p>
              Soluciones desarrolladas utilizando tecnologías
              modernas y arquitecturas preparadas para crecer.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-card reveal-card"
                key={project.number}
              >

                <div className="project-background">
                  <img
                    src="/innovax-logo.png"
                    alt=""
                  />
                </div>

                <div className="project-header">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    {project.category}
                  </span>

                </div>

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <small>
                    {project.technologies}
                  </small>

                  <a href="#contacto">
                    Ver proyecto →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* =====================================
            DIFERENCIALES
        ====================================== */}

        <section className="difference reveal">

          <div className="difference-logo">

            <img
              src="/innovax-logo.png"
              alt=""
            />

          </div>

          <div className="section-label">
            POR QUÉ INNOVAX
          </div>

          <h2>
            Tecnología pensada
            <br />
            para <span>crecer.</span>
          </h2>

          <div className="difference-grid">

            <div className="difference-item">

              <strong>01</strong>

              <h3>
                Desarrollo a medida
              </h3>

              <p>
                Cada solución se construye según
                las necesidades específicas de cada
                proyecto.
              </p>

            </div>

            <div className="difference-item">

              <strong>02</strong>

              <h3>
                Arquitectura escalable
              </h3>

              <p>
                Diseñamos sistemas preparados para
                acompañar el crecimiento de tu negocio.
              </p>

            </div>

            <div className="difference-item">

              <strong>03</strong>

              <h3>
                Tecnología moderna
              </h3>

              <p>
                Utilizamos herramientas actuales para
                crear productos rápidos y mantenibles.
              </p>

            </div>

            <div className="difference-item">

              <strong>04</strong>

              <h3>
                Comunicación directa
              </h3>

              <p>
                Trabajamos cerca del cliente para
                entender realmente cada problema.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            NOSOTROS
        ====================================== */}

        <section
          id="nosotros"
          className="section about reveal"
        >

          <div className="about-label">

            <div className="section-label">
              QUIÉNES SOMOS
            </div>

          </div>

          <div className="about-content">

            <h2>
              Una idea puede ser
              <br />
              el comienzo de
              <span> algo grande.</span>
            </h2>

            <p>
              En InnovaX creamos tecnología para potenciar
              negocios y empresas. Combinamos desarrollo
              de software, diseño y tecnología para convertir
              ideas en productos digitales.
            </p>

            <p>
              Creemos en soluciones simples, eficientes
              y escalables. Tecnología que no solo funciona,
              sino que genera impacto.
            </p>

          </div>

        </section>


        {/* =====================================
            EQUIPO
        ====================================== */}

        <section
          id="equipo"
          className="section team reveal"
        >

          <div className="section-heading">

            <div className="section-label">
              EQUIPO
            </div>

            <h2>
              Las personas detrás
              <br />
              de <span>InnovaX.</span>
            </h2>

          </div>

          <div className="team-card">

            <div className="team-avatar">

              <img
                src="/innovax-logo.png"
                alt="InnovaX"
              />

            </div>

            <div>

              <span className="team-role">
                SOFTWARE DEVELOPMENT
              </span>

              <h3>
                Equipo InnovaX
              </h3>

              <p>
                Un equipo enfocado en crear soluciones
                digitales, desarrollar productos y
                transformar ideas en tecnología.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================
            TECH STACK
        ====================================== */}

        <section
          id="tech-stack"
          className="section tech-stack reveal"
        >

          <div className="section-heading">

            <div className="section-label">
              TECNOLOGÍAS
            </div>

            <h2>
              Nuestro
              <br />
              <span>Tech Stack.</span>
            </h2>

            <p>
              Tecnologías que utilizamos para construir
              soluciones modernas, robustas y escalables.
            </p>

          </div>

          <div className="tech-list">

            {technologies.map((technology) => (
              <div
                className="tech-item reveal-card"
                key={technology}
              >

                <span>◆</span>

                {technology}

              </div>
            ))}

          </div>

        </section>


        {/* =====================================
            CONTACTO
        ====================================== */}

        <section
          id="contacto"
          className="contact reveal"
        >

          <div className="contact-background">

            <img
              src="/innovax-logo.png"
              alt=""
            />

          </div>

          <div className="section-label">
            HABLEMOS
          </div>

          <h2>
            ¿Tenés una idea?
            <br />
            <span>Hagámosla realidad.</span>
          </h2>

          <p>
            Contanos qué querés construir y demos juntos
            el próximo paso.
          </p>

          <div className="contact-buttons">

            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noreferrer"
              className="button whatsapp-button"
            >
              WhatsApp
              <span>↗</span>
            </a>

            <a
              href="mailto:hola@innovax.com.ar"
              className="button secondary"
            >
              hola@innovax.com.ar
            </a>

          </div>

        </section>

      </main>


      {/* =====================================
          FOOTER
      ====================================== */}

      <footer>

        <div className="footer-brand">

          <img
            src="/innovax-logo.png"
            alt="InnovaX"
          />

          <strong>
            InnovaX
          </strong>

        </div>

        <p>
          Empowering ideas with technology.
        </p>

        <span>
          © 2026 InnovaX
        </span>

      </footer>


      {/* =====================================
          FLOATING ACTIONS
      ====================================== */}

      <div className="floating-actions">

        {/* INSTAGRAM */}

        <a
          className="floating-instagram"
          href="https://instagram.com/innovax"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
          >

            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              fill="currentColor"
            />

          </svg>

        </a>


        {/* TELÉFONO */}

        <a
          className="floating-phone"
          href="tel:+5490000000000"
          aria-label="Llamar a InnovaX"
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
          >

            <path
              d="M6.6 3.5L9.2 3C9.7 2.9 10.2 3.2 10.4 3.7L11.6 6.6C11.8 7.1 11.7 7.6 11.3 8L9.7 9.6C10.5 11.3 11.8 12.7 13.5 13.5L15.1 11.9C15.5 11.5 16 11.4 16.5 11.6L19.4 12.8C19.9 13 20.2 13.5 20.1 14L19.6 16.6C19.5 17.2 19 17.6 18.4 17.6C10.9 17.6 4.4 11.1 4.4 3.6C4.4 3 4.8 2.5 5.4 2.4L6.6 3.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>

        </a>


        {/* WHATSAPP */}

        <a
          className="floating-whatsapp"
          href="https://wa.me/5490000000000"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
          >

            <path
              d="M20.5 11.5C20.5 16.47 16.47 20.5 11.5 20.5C10.05 20.5 8.68 20.16 7.47 19.56L3.5 20.5L4.48 16.67C3.56 15.26 3 13.57 3 11.75C3 6.78 7.03 2.75 12 2.75C16.7 2.75 20.5 6.53 20.5 11.5Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M8.4 8.3C8.65 7.75 8.9 7.72 9.2 7.72C9.43 7.72 9.67 7.73 9.87 7.74C10.1 7.75 10.25 7.83 10.39 8.16L10.93 9.46C11.04 9.72 11.03 9.94 10.86 10.16L10.32 10.82C10.17 11 10.16 11.17 10.29 11.39C10.59 11.9 11.06 12.58 11.7 13.12C12.45 13.76 13.1 14.05 13.36 14.17C13.62 14.29 13.77 14.27 13.92 14.1L14.54 13.37C14.7 13.19 14.87 13.16 15.1 13.27L16.38 13.88C16.64 14 16.81 14.06 16.84 14.27C16.87 14.48 16.87 15.49 16.45 15.82C16.03 16.15 15.37 16.32 14.91 16.3C14.45 16.28 13.84 16.13 13.12 15.81C12.4 15.49 11.52 15.06 10.61 14.2C9.7 13.34 8.95 12.29 8.61 11.7C8.27 11.11 7.78 10.22 7.78 9.35C7.78 8.48 8.14 7.77 8.4 8.3Z"
              fill="currentColor"
            />

          </svg>

        </a>

      </div>

    </div>
  );
}

export default App;