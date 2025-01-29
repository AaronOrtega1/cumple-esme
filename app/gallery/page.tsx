export default function Gallery() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Nuestra Galería</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <img src="/public/MyLove/" alt="1" className="rounded-lg" />
        <img src="/public/MyLove/" alt="2" className="rounded-lg" />
        <img src="/public/MyLove/" alt="3" className="rounded-lg" />
        <img src="/public/MyLove/" alt="4" className="rounded-lg" />
        <img src="/public/MyLove/" alt="5" className="rounded-lg" />
        <img src="/public/MyLove/" alt="6" className="rounded-lg" />
      </div>
    </div>
  );
}