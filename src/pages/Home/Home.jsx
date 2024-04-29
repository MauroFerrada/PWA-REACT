import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import style from "./Home.module.css";

function removeAccents(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const Home = () => {
  const navigate = useNavigate();

  const [guitarrasState, setGuitarrasState] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchGuitarras = async () => {
    try {
      const response = await fetch("/mocks/guitarras.json");
      const result = await response.json();
      setGuitarrasState(result);
      setSearchResults(result); // Inicialmente, mostrar todos los elementos
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGuitarras();
  }, []);

  // Función para manejar los cambios en el input de búsqueda
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    const query = removeAccents(event.target.value.toLowerCase());
    // Filtrar los elementos según el texto ingresado
    const filteredResults = guitarrasState.filter((guitarra) => {
      const nombre = removeAccents(guitarra.nombre.toLowerCase());
      const tipo = removeAccents(guitarra.tipo.toLowerCase());
      const marca = removeAccents(guitarra.marca.toLowerCase());
      const descripcion = removeAccents(guitarra.descripcion_breve.toLowerCase());
      return (
        nombre.includes(query) ||
        tipo.includes(query) ||
        marca.includes(query) ||
        descripcion.includes(query)
      );
    });
    setSearchResults(filteredResults);
  };
  

  // Función para navegar a la página de detalles al hacer clic en un elemento
  const handleGuitarraClick = (guitarraId) => {
    navigate(ROUTES.details + guitarraId);
  };

  return (
    <div className={`h-screen w-full flex flex-col ${style.homeContainer}`}>
      <Header />
      <div className={`flex-grow bg-emerald-300 ${style.content}`}>
        <div className="flex h-full justify-center items-center flex-col">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className={style.searchInput}
          />
          {searchResults.map((guitarra) => (
            <button
              key={guitarra.id}
              onClick={() => handleGuitarraClick(guitarra.id)}
            >
              <div className="border-2 border-black">
                <p>
                  <b>Nombre:</b> {guitarra.nombre}
                </p>
                <p>
                  <b>Tipo:</b> {guitarra.tipo}
                </p>
                <p>
                  <b>Marca:</b> {guitarra.marca}
                </p>
                <p>
                  <b>Imágen:</b> {guitarra.imagen}
                </p>
                <p>
                  <b>Descripción:</b> {guitarra.descripcion_breve}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;