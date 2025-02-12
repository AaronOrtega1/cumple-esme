import PolaroidImage from "../components/PolaroidImage";

const photos = [
  {
    id: "1",
    src: "/MyLove/Antro.jpg",
    alt: "Noche en el antro",
    date: "15/10/2023",
  },
  {
    id: "2",
    src: "/MyLove/Espejito.jpg",
    alt: "Espejito",
    date: "20/10/2023",
  },
  {
    id: "3",
    src: "/MyLove/Mazamitla.jpg",
    alt: "Viaje a Mazamitla",
    date: "25/10/2023",
  },
  {
    id: "4",
    src: "/MyLove/Millonario.jpg",
    alt: "Concurso Millonario",
    date: "30/10/2023",
  },
  {
    id: "5",
    src: "/MyLove/X-mas.jpg",
    alt: "Navidad juntos",
    date: "24/12/2023",
  },
  {
    id: "6",
    src: "/MyLove/tapalpa.jpg",
    alt: "Viaje a Tapalpa",
    date: "05/11/2023",
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-2xl font-bold pt-2">Nuestra Galería</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {photos.map((photo) => (
          <PolaroidImage
            key={photo.id}
            id={photo.id}
            src={photo.src}
            alt={photo.alt}
            date={photo.date}
          />
        ))}
      </div>
    </div>
  );
}
