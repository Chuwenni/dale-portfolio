import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar({ darkMode, onToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <div className="navbar-inner">
        <a className="logo" href="#top">
          Christian Dale
        </a>

        <button
          className="icon-button menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <div className={`nav-actions ${menuOpen ? "open" : ""}`} id="main-navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <button
            className="icon-button"
            onClick={onToggle}
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
