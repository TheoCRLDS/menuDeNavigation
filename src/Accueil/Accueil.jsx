import Menu from "../layouts/Menu/Menu";
import Footer from "../layouts/Footer/Footer";
import "./Accueil.css";
function Accueil() {
  return (
    <>
      <div className="menu">
        <Menu />
      </div>
      <div>
        <h2>Accueil</h2>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Accueil;
