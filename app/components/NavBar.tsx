import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Esme+Aarón
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/gallery" className="text-white hover:text-gray-200">
              Galería
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
