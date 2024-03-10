import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><button><Link to="/">Home</Link></button></li>
        <li><button><Link to="/about">Über uns</Link></button></li>
        <li><button><Link to="/services">Dienstleistungen</Link></button></li>
        <li><button><Link to="/contact">Kontakt</Link></button></li>
      </ul>
    </nav>
  );
}

export default Navigation;

// Path: src/components/Navigation.jsx