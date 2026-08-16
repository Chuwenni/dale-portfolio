export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="eyebrow">FullStack Web Developer</span>

      <h1>
        Building practical <span className="accent">web applications</span>
        <br />
        and learning through every project.
      </h1>

      <p className="hero-description">
        I build with React, JavaScript, Node.js, Express, MongoDB, and
        Cloudinary, creating practical software that is clean, useful, and built
        to last.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View Projects
        </a>
        <a className="button button-secondary" href="#stack">
          My Stack
        </a>
      </div>
    </section>
  );
}
