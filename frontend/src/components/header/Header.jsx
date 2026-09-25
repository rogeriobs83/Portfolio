import "./header.css";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

  return (
    <section className="header">
        <div className="header-content">
        <button
            id="menu-toggle"
            className={isOpen ? "active" : ""}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={handleToggleMenu}
        >
            <span className="bar"></span>
        </button>
        <nav id="main-navigation" className={isOpen ? "active" : ""}>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        </div>
    </section>
  );
}

export default Header;