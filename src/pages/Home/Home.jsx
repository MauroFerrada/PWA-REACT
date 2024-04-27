import style from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [guitarrasState, setGuitarrasState] = useState([]);

  const fetchGuitarras = async () => {
    const response = await fetch("/mocks/guitarras.json");
    const result = await response.json();
    setGuitarrasState(result);
  };

  useEffect(() => {
    fetchGuitarras();
  });

  console.log(guitarrasState);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="flex-grow bg-emerald-300">
        <div className="flex h-full justify-center items-center flex-col">
          {guitarrasState.map((guitarra) => {
            return (
              <button  key={guitarra.id}  onClick={() => { navigate(ROUTES.details+""+guitarra.id); }}> 
                <div className="border-2 border-black">
                    <p><b>Nombre:</b> {guitarra.nombre}</p>
                    <p><b>Tipo:</b> {guitarra.tipo}</p>
                    <p><b>Marca:</b> {guitarra.marcao}</p>
                    <p><b>Imágen:</b> {guitarra.imagen}</p>
                    <p><b>Descripción:</b> {guitarra.descripcion_breve}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;