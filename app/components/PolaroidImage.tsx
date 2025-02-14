import Image from "next/image";
import Link from "next/link";

type PolaroidImageProps = {
  id: string;
  src: string;
  alt: string;
  date: string;
};

export default function PolaroidImage({
  id,
  src,
  alt,
  date,
}: PolaroidImageProps) {
  return (
    <Link href={`/gallery/${id}`}>
      <div className="bg-white p-4 rounded-lg shadow-lg shadow-slate-400 transform transition-transform hover:scale-105 cursor-pointer">
        <div className="w-64 h-64 relative">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="mt-4 text-center text-gray-700 font-medium">{date}</div>
      </div>
    </Link>
  );
}
