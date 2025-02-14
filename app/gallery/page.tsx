"use client"
import { useState } from "react";
import PolaroidImage from "../components/PolaroidImage";

const photos = [
  {
    id: "1",
    src: "/MyLove/primera-fotito.JPG",
    alt: "La primera fotito que subimos",
    date: "05/06/2024",
  },
  {
    id: "2",
    src: "/MyLove/salida-trabajo.JPG",
    alt: "Chapu con tus compañeros",
    date: "30/06/2024",
  },
  {
    id: "3",
    src: "/MyLove/inicio.JPG",
    alt: "Día que nos hicimos novios",
    date: "05/07/2024",
  },
  {
    id: "4",
    src: "/MyLove/cumple-suegra.JPG",
    alt: "cumple de mi suegra",
    date: "20/07/2024",
  },
  {
    id: "5",
    src: "/MyLove/Millonario.jpg",
    alt: "Concurso Millonario",
    date: "31/08/2024",
  },
  {
    id: "6",
    src: "/MyLove/cumple-abuelita.JPG",
    alt: "cumple de mi abuelita",
    date: "21/09/2024",
  },
  {
    id: "7",
    src: "/MyLove/Espejito.jpg",
    alt: "Espejito",
    date: "27/09/2024",
  },
  {
    id: "8",
    src: "/MyLove/Mazamitla.jpg",
    alt: "Viaje a Mazamitla",
    date: "05/10/2024",
  },
  {
    id: "9",
    src: "/MyLove/spooky.jpg",
    alt: "Primer Halloween",
    date: "18/10/2024",
  },
  {
    id: "10",
    src: "/MyLove/chapala.jpg",
    alt: "Salida a Chapala",
    date: "20/10/2024",
  },
  {
    id: "11",
    src: "/MyLove/Antro.jpg",
    alt: "Noche en el antro",
    date: "26/10/2024",
  },
  {
    id: "12",
    src: "/MyLove/mi-cumple.jpg",
    alt: "Mi primer cumple contigo",
    date: "29/11/2024",
  },
  {
    id: "13",
    src: "/MyLove/X-mas.jpg",
    alt: "Navidad juntos",
    date: "03/12/2024",
  },
  {
    id: "14",
    src: "/MyLove/tapalpa.jpg",
    alt: "Viaje a Tapalpa",
    date: "18/01/2025",
  },
  {
    id: "15",
    src: "/MyLove/cuatri.JPG",
    alt: "Mostrandote mis skills con la cuatri",
    date: "18/01/2025",
  },
  {
    id: "16",
    src: "/MyLove/primer-cumple-amore.jpg",
    alt: "Tu primer cumple juntos",
    date: "29/01/2025",
  },
  {
    id: "17",
    src: "/MyLove/escalada.jpg",
    alt: "tarde de escalada",
    date: "03/02/2025",
  },
  {
    id: "18",
    src: "/MyLove/super-bowl.JPG",
    alt: "Nuestro primer super bowl",
    date: "09/02/2023",
  },
];

const ITEMS_PER_PAGE = 8;

export default function Gallery() {
  const [paginaActual, setPaginaActual] = useState(1);

  // Calculamos el índice de inicio y fin de las fotos a mostrar
  const inicio = (paginaActual - 1) * ITEMS_PER_PAGE;
  const fin = inicio + ITEMS_PER_PAGE;
  const fotosPaginadas = photos.slice(inicio, fin);

  // Total de páginas
  const totalPaginas = Math.ceil(photos.length / ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-2xl font-bold pt-2">Nuestra Galería</h1>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {fotosPaginadas.map((photo) => (
          <PolaroidImage key={photo.id} id={photo.id} src={photo.src} alt={photo.alt} date={photo.date} />
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex mt-6 md:mt-10 space-x-4 mb-6">
        <button
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 1}
          className={`px-4 py-2 rounded ${paginaActual === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
        >
          Anterior
        </button>
        <span className="text-lg font-semibold">{paginaActual} de {totalPaginas}</span>
        <button
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
          className={`px-4 py-2 rounded ${paginaActual === totalPaginas ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}