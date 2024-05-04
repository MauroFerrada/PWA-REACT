import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

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
  const [noResults, setNoResults] = useState(false); // Nuevo estado para controlar si no se encontraron resultados

  const fetchGuitarras = async () => {
    try {
      const response = await fetch("/mocks/guitarras.json");
      const result = await response.json();
      setGuitarrasState(result);
      setSearchResults(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGuitarras();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    const query = removeAccents(event.target.value.toLowerCase());
    const filteredResults = guitarrasState.filter((guitarra) => {
      const nombre = removeAccents(guitarra.nombre.toLowerCase());
      const tipo = removeAccents(guitarra.tipo.toLowerCase());
      const marca = removeAccents(guitarra.marca.toLowerCase());
      return (
        nombre.includes(query) ||
        tipo.includes(query) ||
        marca.includes(query)
      );
    });
    setSearchResults(filteredResults);

    // Actualizar el estado de noResults según si no hay resultados
    setNoResults(filteredResults.length === 0);
  };

  return (
    <div className={"flex flex-col min-h-screen"}>
      <Header />
      <div className={"flex-grow bg-emerald-500"}>
        <div className="flex flex-col justify-center items-center my-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="p-1 w-1/2"
          />
        </div>
        { noResults ? 
          ( // Mostrar mensaje si no se encontraron resultados
            <div className="flex flex-col justify-center items-center my-4 text-red-500">
              No se encontraron resultados para su búsqueda.
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 justify-center m-4">
              {searchResults.map((guitarra) => (
                <button key={guitarra.id} onClick={() => navigate(ROUTES.details + guitarra.id)}>
                  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-emerald-950">
                    <img className="w-full h-auto" src={guitarra.imagen} alt={guitarra.nombre} />
                    <div className="font-bold text-xl pt-2">{guitarra.nombre}</div>
                    <div className="px-6 py-2">
                      <p className="inline-block bg-emerald-800 rounded-full px-3 py-1 text-sm font-semibold text-slate-200 mr-2 mb-2"><b>Tipo:</b> {guitarra.tipo}</p>
                      <p className="inline-block bg-emerald-800 rounded-full px-3 py-1 text-sm font-semibold text-slate-200 mr-2 mb-2"><b>Marca:</b> {guitarra.marca}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;