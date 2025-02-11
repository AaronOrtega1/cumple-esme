import PolaroidImage from "../components/PolaroidImage";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-2xl font-bold pt-2">Nuestra Galería</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        <PolaroidImage
          src="/MyLove/Antro.jpg"
          alt="Noche en el antro"
          date="26/10/2024"
        />
        <PolaroidImage
          src="/MyLove/Espejito.jpg"
          alt="Foto en espejo"
          date="27/07/2023"
        />
        <PolaroidImage
          src="/MyLove/Mazamitla.jpg"
          alt="Viaje a Mazamitla"
          date="05/10/2024"
        />
        <PolaroidImage
          src="/MyLove/Millonario.jpg"
          alt="El concurso Millonario"
          date="01/07/2024"
        />
        <PolaroidImage
          src="/MyLove/X-mas.jpg"
          alt="Primera navidad juntos"
          date="03/12/2024"
        />
        <PolaroidImage
          src="/MyLove/tapalpa.jpg"
          alt="Viaje a Tapalpa"
          date="18/01/2025"
        />
      </div>
    </div>
  );
}
