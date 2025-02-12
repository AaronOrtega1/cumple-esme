import Image from "next/image";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

// Datos de ejemplo (puedes reemplazar esto con una base de datos o API)
const photos = [
  {
    id: "1",
    src: "/MyLove/Antro.jpg",
    alt: "Noche en el antro",
    date: "15/10/2023",
    description: "Nuestra primera vez en un antro bien juntitos.",
  },
  {
    id: "2",
    src: "/MyLove/Espejito.jpg",
    alt: "Espejito",
    date: "20/10/2023",
    description: "Foto cute en el espejo de tu casa.",
  },
  {
    id: "3",
    src: "/MyLove/Mazamitla.jpg",
    alt: "Viaje a Mazamitla",
    date: "25/10/2023",
    description: "Primer viaje juntos, me encanto pasar el fin contigo.",
  },
  {
    id: "4",
    src: "/MyLove/Millonario.jpg",
    alt: "Noche de millonario",
    date: "30/10/2023",
    description:
      "Primera salida fuera de lo que tu estabas acostumbrada a hacer, llevandote a un lugar que me gusta ir con mis amigos.",
  },
  {
    id: "5",
    src: "/MyLove/X-mas.jpg",
    alt: "Navidad juntos",
    date: "24/12/2023",
    description: "Nuestra primera Navidad juntos.",
  },
  {
    id: "6",
    src: "/MyLove/tapalpa.jpg",
    alt: "Escapada a Tapalpa",
    date: "05/11/2023",
    description:
      "Viaje a Tapalpa por tu cumple con tu familia y tus miwas, conocí a tus tíos que tanto me habías hablado de ellos.",
  },
];

export default function PhotoDetail({ params }: Props) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return <div>Foto no encontrada</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-8">
      <div className="max-w-4xl w-full px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
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
