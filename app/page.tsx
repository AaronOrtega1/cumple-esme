import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col items-center min-h-screen py-2">
      <h1 className="to-blue-500">
        Hola mi amor
      </h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
