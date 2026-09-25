import "./hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="part-1">
        <img src={`${import.meta.env.BASE_URL}fotominha.jpg`} alt="Foto de Rogério" />
        </div>
        <div className="part-2">
        <h2>Hi, I'm Rogério.</h2>
        <h1><span className="block">Front-End Developer</span> & UI Designer</h1>
        <p>
        <span className="block">Crafting modern, responsive, and user-friendly</span>web experiences,
          turning ideas into life.
        </p>
        <button>View My Work</button>
        <button>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
