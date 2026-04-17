import Link from "next/link";
import { infoEscuderias } from "@/data/informacion";

export default function EscuderiasPage() {

  const listaEscuderias = Object.entries(infoEscuderias);

  return (
    <div className="p-10 bg-black min-h-screen text-white">

      <h1 className="text-4xl font-bold mb-8 uppercase">
        Escuderías
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {listaEscuderias.map(([id, esc]) => (
          <Link key={id} href={`/pilotos/escuderias/${id}`}>
            <div key={id} className="bg-zinc-900 p-6 rounded-md border-l-4 border-red-600 hover:bg-zinc-800 transition-colors cursor-pointer h-full">
              <h2 className="text-2xl font-bold text-white mb-2 uppercase">{esc.nombre}</h2>
              <p className="text-red-600 text-xs font-bold mb-4 uppercase tracking-widest">
                Propietario: {esc.dueno}
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {esc.historia}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
