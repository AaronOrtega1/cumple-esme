import Image from "next/image";

type PolaroidImageProps = {
  src: string;
  alt: string;
  date: string;
};

export default function PolaroidImage({ src, alt, date }: PolaroidImageProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="w-64 h-64 relative">
        <Image src={src} alt={alt} fill className="object-cover rounded-t-lg" />
      </div>
      <div className="mt-4 text-center text-gray-700 font-medium">{date}</div>
    </div>
  );
}
