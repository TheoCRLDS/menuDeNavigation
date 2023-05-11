import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "../Accueil/Accueil";
import Contact from "../Contact/Contact";
import SeConnecter from "../seConnecter/SeConnecter";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/login" element={<SeConnecter />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
