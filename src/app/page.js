import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white p-10 font-sans">

      {/* TITULO */}
      <h1 className="text-6xl font-black mb-4 italic tracking-tighter">
        F1 <span className="text-red-600 underline decoration-white">CENTRAL</span>
      </h1>

      {/* DESCRIPCION */}
      <p className="text-zinc-400 text-lg mb-10 text-center max-w-xl">
        Seguí de cerca la máxima categoría del automovilismo. 
        Estadísticas, pilotos y toda la emoción de la temporada 2026.
      </p>

      {/* BOTONES */}
      <div className="flex gap-4 mb-12">
        <Link 
          href="/pilotos"
          className="bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-transform hover:scale-105"
        >
          Ver Pilotos
        </Link>

        <Link 
          href="/escuderias"
          className="bg-zinc-800 border border-zinc-700 px-8 py-3 rounded-md font-bold hover:bg-zinc-700 transition-colors"
        >
          Escuderías
        </Link>
      </div>

      {/* GRIDS (ESTOS SOLO INFORMAN BANDA) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">

        <div className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
          <h2 className="font-bold text-xl mb-2">🏁 Próximo GP</h2>
          <p className="text-zinc-400 text-sm">
            Toda la info sobre el Gran Premio de la semana.
          </p>
        </div>

        <div className="bg-zinc-900 border-l-4 border-white p-6 rounded-r-lg">
          <h2 className="font-bold text-xl mb-2">🏆 Campeonato</h2>
          <p className="text-zinc-400 text-sm">
            Tabla de posiciones actualizada en tiempo real.
          </p>
        </div>

        <div className="bg-zinc-900 border-l-4 border-zinc-500 p-6 rounded-r-lg">
          <h2 className="font-bold text-xl mb-2">🕒 Histórico</h2>
          <p className="text-zinc-400 text-sm">
            Reviví las mejores carreras de la historia.
          </p>
        </div>

      </div>

    </main>
  );
}