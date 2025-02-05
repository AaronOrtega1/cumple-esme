import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Nuestra Galería</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Image
          src="/public/MyLove/"
          alt="1"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <Image
          src="/public/MyLove/"
          alt="2"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <Image
          src="/public/MyLove/"
          alt="3"
          width={300}
          height={300}
          className="rounded-lg"
        />
        <Image
          src="/public/MyLove/"
          alt="4"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

