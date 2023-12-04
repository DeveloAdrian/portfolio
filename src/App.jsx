import { SobreMi } from "./pages/SobreMi.jsx";
import { Contactame } from "./pages/Contactame.jsx";
import { Principal } from "./pages/Principal.jsx";
import { Proyectos } from "./pages/Proyectos.jsx";
import { useState } from "react";

const App = () => {
  const [estado, setEstado] = useState("false");

  const cambiarEstado = () => {
    const abrirMenu = () => {
      const cabecera = document.querySelector(".cabecera");
      const menu = document.querySelector(".menu");
      cabecera.style.margin = " 0vw 20vw";
      menu.style.rotate = "90deg";
      menu.style.scale = "2";
      setEstado("true");
    };

    const cerrarMenu = () => {
      const cabecera = document.querySelector(".cabecera");
      const menu = document.querySelector(".menu");
      cabecera.style.margin = "0vw 100vw";
      menu.style.rotate = "180deg";
      menu.style.scale = "1.6";
      setEstado("false");
    };
    estado === "false" ? abrirMenu() : cerrarMenu();
  };

  const [page, setPage] = useState(Principal);

  const [principal, setPrincipal] = useState("color");
  const [sobreMi, setSobreMi] = useState();
  const [proyectos, setProyectos] = useState();
  const [contactame, setContactame] = useState();

  const cambiarPrincipal = () => {
    setPage(Principal);
    setPrincipal("color");
    setSobreMi();
    setProyectos();
    setContactame();
    const width = window.screen.width;

    if (width <= 999) {
      const menu = document.querySelector(".menu");
      const cabecera = document.querySelector(".cabecera");
      cabecera.style.margin = "0vw 100vw";
      menu.style.rotate = "180deg";
      menu.style.scale = "1.6";
      setEstado("false");
    }
  };

  const cambiarSobreMi = () => {
    setPage(SobreMi);
    setPrincipal();
    setSobreMi("color");
    setProyectos();
    setContactame();
    const width = window.screen.width;

    if (width <= 999) {
      const menu = document.querySelector(".menu");
      const cabecera = document.querySelector(".cabecera");
      cabecera.style.margin = "0vw 100vw";
      menu.style.rotate = "180deg";
      menu.style.scale = "1.6";
      setEstado("false");
    }
  };

  const cambiarProyectos = () => {
    setPage(Proyectos);
    setPrincipal();
    setSobreMi();
    setProyectos("color");
    setContactame();
    const width = window.screen.width;

    if (width <= 999) {
      const menu = document.querySelector(".menu");
      const cabecera = document.querySelector(".cabecera");
      cabecera.style.margin = "0vw 100vw";
      menu.style.rotate = "180deg";
      menu.style.scale = "1.6";
      setEstado("false");
    }
  };

  const cambiarContactame = () => {
    setPage(Contactame);
    setPrincipal();
    setSobreMi();
    setProyectos();
    setContactame("color");
    const width = window.screen.width;

    if (width <= 999) {
      const menu = document.querySelector(".menu");
      const cabecera = document.querySelector(".cabecera");
      cabecera.style.margin = "0vw 100vw";
      menu.style.rotate = "180deg";
      menu.style.scale = "1.6";
      setEstado("false");
    }
  };

  return (
    <>
      <nav className="marcador">
        <span
          className="material-symbols-outlined menu"
          onClick={cambiarEstado}>
          menu
        </span>
        <span className="material-symbols-outlined" id={principal}>
          home
        </span>
        <span className="material-symbols-outlined" id={sobreMi}>
          person
        </span>
        <span className="material-symbols-outlined" id={proyectos}>
          folder_open
        </span>
        <span className="material-symbols-outlined" id={contactame}>
          contacts
        </span>
      </nav>
      <header className="cabecera" id={estado}>
        <img src="foto.jpg" alt="foto" title="foto" />
        <h1>Adrian Gutierrez</h1>
        <nav className="navegador">
          <h2 onClick={cambiarPrincipal}>Principal</h2>
          <h2 onClick={cambiarSobreMi}>Sobre mi</h2>
          <h2 onClick={cambiarProyectos}>Proyectos</h2>
          <h2 onClick={cambiarContactame}>Contactame</h2>
        </nav>
        <footer className="info">
          <a href="https://github.com/DeveloAdrian">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://wa.me/+5356610951?text=Hola%2C%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F.">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </footer>
      </header>
      <section className="content">{page}</section>
    </>
  );
};

export default App;
