import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import "./SeConnecter.css";
import { useNavigate } from "react-router-dom";
function SeConnecter() {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };
  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <div>
        <h2>Connexion</h2>
        <button onClick={nav}>Bouton Accueil</button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SeConnecter;
