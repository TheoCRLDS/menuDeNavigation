import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <div>
        <nav className="navbar">
          <Link to="/">Accueil</Link>
          <Link to="/login">Se Connecter</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}
export default Menu;
