import { Link } from "react-router-dom";
import "../home/Home.css";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <a href="/" className="logo">
            BuildPro
          </a>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <a href="#contact" className="cta-button">
            Get in Touch
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
