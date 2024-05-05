import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "../../components/Pdf/Pdf";

const Details = () => {
  const { id } = useParams();
  const [guitarra, setGuitarra] = useState([]);

  useEffect(() => {
    const fetchGuitarra = async () => {
      try {
        const response = await fetch (`/mocks/guitarra-${id}.json`);
        const data = await response.json();
        setGuitarra(data);
      } catch (error) {
        console.error("Error al obtener la guitarra: ", error);
      }
    };
    fetchGuitarra();
  }, [id]);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header text="Header" />
      <div className="flex-grow bg-emerald-500">
        <div className="flex h-full justify-center items-center p-5">
          <div className="flex flex-col items-center border border-emerald-950 rounded-lg shadow md:flex-row bg-emerald-950 p-4">
            <img className="object-cover md:h-full rounded-lg md:w-48 md:rounded-lg" src={guitarra.imagen} alt={guitarra.nombre} />
            <div className="flex flex-col justify-between p-4">
              <div className="flex flex-row space-between pb-4">
                <h5 className="flex-grow mb-2 text-2xl font-bold tracking-tight text-gray-100">{guitarra.marca} {guitarra.nombre}</h5>
                <p className="flex-initial bg-emerald-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"><b>Tipo:</b> {guitarra.tipo}</p>
              </div>
              <p className="mb-3 font-normal text-gray-200">{guitarra.descripcion}</p>
              <div className="flex justify-center pt-4">
                <PDFDownloadLink document={<Pdf guitarra={guitarra}/>} fileName={`${guitarra.marca} ${guitarra.nombre}.pdf`} >
                  <button className="flex-initial bg-emerald-400 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"><b>Descargar PDF</b></button>
                </PDFDownloadLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer text="Footer" />
    </div>
  );
};

export default Details;