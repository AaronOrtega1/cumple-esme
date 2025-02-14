export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Columna izquierda: Animación */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Animación de corazón */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="heart animate-heartbeat"></div>
            </div>
          </div>
        </div>

        {/* Columna derecha: Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-red mb-4">Hola mi amor</h1>
          <p className="text-lg text-gray-700">
            Hice esto para que sea un pequeño diario sobre nuestro tiempo
            juntos.
          </p>
        </div>
      </div>
    </div>
  );
}
