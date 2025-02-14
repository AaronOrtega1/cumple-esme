"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Título */}
        <Link href="/" className="text-white text-lg font-bold flex items-center justify-center">
          <Heart className="mr-1"/>
          Esme+Aarón
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/gallery" className="text-white hover:text-gray-200">
              Galería
            </Link>
          </li>
          <li>
            <Link href="/flowers" className="text-white hover:text-gray-200">
              Flores
            </Link>
          </li>
          <li>
            <Link href="/letter" className="text-white hover:text-gray-200">
              Carta
            </Link>
          </li>
          <li>
            <Link href="/notify" className="text-white hover:text-gray-200">
              Notificación
            </Link>
          </li>
        </ul>

        {/* Icono de Menú Mobile */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X color="white" size={32} /> : <Menu color="white" size={32} />}
          </button>

          {/* Dropdown Menu Mobile */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-blue-500 rounded shadow-lg z-50">
              <ul className="text-white">
                <li>
                  <Link
                    href="/gallery"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Galería
                  </Link>
                </li>
                <li >
                  <Link
                    href="/flowers"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Flores
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Cartita
                  </Link>
                </li>
                <li>
                  <Link
                    href="/notify"
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Notify
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}