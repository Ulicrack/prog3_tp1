import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-10">

      {/* TÍTULO */}
      <h1 className="text-5xl font-bold mb-4">
        App de Notas 📝
      </h1>

      {/* DESCRIPCIÓN */}
      <p className="text-zinc-400 text-lg mb-10 text-center max-w-xl">
        Organiza tus ideas, crea recordatorios y gestiona tus notas de forma simple.
        Proyecto desarrollado con Next.js.
      </p>

      {/* BOTONES PRINCIPALES */}
      <div className="flex gap-4 mb-12">
        <Link 
          href="/notes"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-300"
        >
          Ver Notas
        </Link>

        <Link 
          href="/notes/create"
          className="bg-zinc-700 px-6 py-3 rounded-lg hover:bg-zinc-600"
        >
          Crear Nota
        </Link>
      </div>

      {/* SECCIONES / FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="font-semibold text-xl mb-2">📌 Notas</h2>
          <p className="text-zinc-400">
            Guarda y administra todas tus notas fácilmente.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="font-semibold text-xl mb-2">🗑 Papelera</h2>
          <p className="text-zinc-400">
            Recupera notas eliminadas cuando lo necesites.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="font-semibold text-xl mb-2">🏷 Categorías</h2>
          <p className="text-zinc-400">
            Organiza tus notas por categorías dinámicas.
          </p>
        </div>

      </div>

    </main>
  );
}