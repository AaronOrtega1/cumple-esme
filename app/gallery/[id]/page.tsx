import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeft } from 'lucide-react';

const photos = [
  {
    id: "1",
    src: "/MyLove/primera-fotito.JPG",
    alt: "La primera fotito que subimos",
    date: "05/06/2024",
    description: "La primera foto que subimos a insta, mostrandoles a todos lo increible que nos vemos juntos"
  },
  {
    id: "2",
    src: "/MyLove/salida-trabajo.JPG",
    alt: "Chapu con tus compañeros",
    date: "30/06/2024",
    description: "La salida con los compañeros de tu trabajo."
  },
  {
    id: "3",
    src: "/MyLove/inicio.JPG",
    alt: "Día que nos hicimos novios",
    date: "05/07/2024",
    description: "Cuando me hiciste el hombre más feliz del mundo porque aceptaste ser mi novia."
  },
  {
    id: "4",
    src: "/MyLove/cumple-suegra.JPG",
    alt: "cumple de mi suegra",
    date: "20/07/2024",
    description: "En el cumpleaños de tu mamá, siendo mi presentación formal como tu novio."
  },
  {
    id: "5",
    src: "/MyLove/Millonario.jpg",
    alt: "Concurso Millonario",
    date: "31/08/2024",
    description: "Salida al concurso Millonario, llevandote a algo totalmente diferente a lo que estas acostumbrada para mostrarte a donde voy con mis miwos."
  },
  {
    id: "6",
    src: "/MyLove/cumple-abuelita.JPG",
    alt: "cumple de mi abuelita",
    date: "21/09/2024",
    description: "En el cumpleaños de mi abuelita, que todas mis tías me decían que estabas muy bonita."
  },
  {
    id: "7",
    src: "/MyLove/Espejito.jpg",
    alt: "Espejito",
    date: "27/09/2024",
    description: "Fotito cute en el espejo de tu casa."
  },
  {
    id: "8",
    src: "/MyLove/Mazamitla.jpg",
    alt: "Viaje a Mazamitla",
    date: "05/10/2024",
    description: "Nuestro primer viajecito juntos, me encanto pasar el fin entero contigo."
  },
  {
    id: "9",
    src: "/MyLove/spooky.jpg",
    alt: "Primer Halloween",
    date: "18/10/2024",
    description: "Una gran date de pintar calabazas, nos quedaron super bonitas."
  },
  {
    id: "10",
    src: "/MyLove/chapala.jpg",
    alt: "Salida a Chapala",
    date: "20/10/2024",
    description: "Salida a Chapala con mis papás, fue muy bonito ir a un lugar que frecuentaba mucho de niño con mi familia pero ahora más grande y contigo."
  },
  {
    id: "11",
    src: "/MyLove/Antro.jpg",
    alt: "Noche en el antro",
    date: "26/10/2024",
    description: "Nuestra primer salida a un antro bien jajaja, me diverti mucho y me la pase super bien contigo."
  },
  {
    id: "12",
    src: "/MyLove/mi-cumple.jpg",
    alt: "Mi primer cumple contigo",
    date: "29/11/2024",
    description: "Mi primer cumpleaños compartiendolo contigo, fue muy especial porque son experiencias que quiero que se repitan siempre."
  },
  {
    id: "13",
    src: "/MyLove/X-mas.jpg",
    alt: "Navidad juntos",
    date: "03/12/2024",
    description: "Nuestra casita de jengibre que nos quedo super bonita, tan bonita que Kleta no pudo resistir en darle una probadita jajaja."
  },
  {
    id: "14",
    src: "/MyLove/tapalpa.jpg",
    alt: "Viaje a Tapalpa",
    date: "18/01/2025",
    description: "Viaje a Tapalpa con tu familia y tus miwas por tu cumple, me encanto ir contigo porque conocí más parte de tu familia."
  },
  {
    id: "15",
    src: "/MyLove/cuatri.JPG",
    alt: "Mostrandote mis skills con la cuatri",
    date: "18/01/2025",
    description: "Mostrandote mis grandes habilidades manejando cuatri, aunque no te quisiste dar una vuelta conmigo ya en la laguna :c jajajaj"
  },
  {
    id: "16",
    src: "/MyLove/primer-cumple-amore.jpg",
    alt: "Tu primer cumple juntos",
    date: "29/01/2025",
    description: "Mi primer año que te pude felicitar en persona y no por mensaje de insta, estoy muy agradecido de haber podido compartir un día tan especial en tu vida contigo."
  },
  {
    id: "17",
    src: "/MyLove/escalada.jpg",
    alt: "tarde de escalada",
    date: "03/02/2025",
    description: "Nuestra gran aventura yendo a escalar con mi hermano jajajaj me divertí mucho y se me hizo bonito que fueramos con mi carnal jajaj aunque anduvieramos separados."
  },
  {
    id: "18",
    src: "/MyLove/super-bowl.JPG",
    alt: "Nuestro primer super bowl",
    date: "09/02/2023",
    description: "Comidita por el Super Bowl con tus papás, me diverti y cotorree mucho con tus papás, siento que les caigo bien jajajja"
  },
];

// Generamos rutas estáticas para mejorar el rendimiento
export async function generateStaticParams() {
  return photos.map((photo) => ({
    id: photo.id.toString(), // Asegurar que es un string
  }));
}

// Definir tipos de props
type PageProps = {
  params: { id: string };
};

export default function PhotoDetail({ params }: PageProps) {
  // Convertimos params.id a string para evitar errores
  const photo = photos.find((p) => p.id === String(params.id));

  if (!photo) {
    return <div className="text-center text-red-500 mt-10 text-xl">📸 Foto no encontrada</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      {/* button to return to the gallery */}
      <Link href="/gallery">
        <button
          className="bg-blue-500 text-white mb-4 p-4 rounded-lg flex justify-center items-center"
        >
          <ArrowBigLeft />
          Regresar
        </button>
      </Link>

      <div className="max-w-4xl w-full px-4">
        <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Contenedor de la imagen */}
            <div className="w-64 h-64 relative mx-auto md:mx-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Contenedor del texto */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{photo.date}</h2>
              <p className="mt-4 text-gray-600 max-w-md">{photo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
