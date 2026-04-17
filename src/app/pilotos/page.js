import Link from 'next/link';
import React from 'react';
import { infoPilotos } from '@/data/informacion';

export default function PilotosPage() { 

  // Convertimos el objeto en un array para poder usar .map() (full IA)
  const listaPilotos = Object.entries(infoPilotos);

  return (
    <div className="p-10 bg-black min-h-screen">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter">
          Grilla de <span className="text-red-600">Pilotos</span>
        </h1>
        <p className="text-zinc-500 mt-2">Temporada Oficial 2026</p>
      </header>

      <div className="grid gap-6">
        {/* ENLACES A SECCIONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/pilotos/leyendas">
            <div className="bg-zinc-800 p-6 rounded-lg border-2 border-dashed border-zinc-700 hover:border-red-600 transition-all group">
              <h2 className="text-xl font-bold text-white group-hover:text-red-600 italic">
                🏆 Ver Leyendas Históricas &rarr;
              </h2>
            </div>
          </Link>
        </div>

        {/* LISTADO DINAMICO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {listaPilotos.map(([id, p]) => (
            <Link key={id} href={`/pilotos/${id}`}>
              <div className="bg-zinc-900 p-6 rounded-md border-l-4 border-red-600 hover:bg-zinc-800 transition-colors cursor-pointer h-full">
                <span className="text-4xl font-black text-zinc-800 block mb-2">{p.nro} </span>
                <h3 className="text-lg font-bold text-white uppercase">{p.nombre}</h3>
                <p className="text-zinc-500 text-sm">{p.equipo}</p>
                <p className="text-red-600 text-xs font-bold mt-4 underline">VER FICHA &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}