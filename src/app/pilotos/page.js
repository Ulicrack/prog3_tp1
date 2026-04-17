import Link from 'next/link';
import React from 'react';

export default function PilotosPage() {
  // Lista de pilotos 
  const pilotosPrincipales = [
    { id: 'verstappen', nombre: 'Max Verstappen', numero: '33' },
    { id: 'hamilton', nombre: 'Lewis Hamilton', numero: '44' },
    { id: 'leclerc', nombre: 'Charles Leclerc', numero: '16' }
  ];

  return (
    <div className="p-10 bg-black min-h-screen">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter">
          Grilla de <span className="text-red-600">Pilotos</span>
        </h1>
        <p className="text-zinc-500 mt-2">Temporada Oficial 2026</p>
      </header>

      <div className="grid gap-6">
        {/* ENLACE A RUTA ANIDADA */}
        <Link href="/pilotos/leyendas">
          <div className="bg-zinc-800 p-6 rounded-lg border-2 border-dashed border-zinc-700 hover:border-red-600 transition-all group">
            <h2 className="text-xl font-bold text-white group-hover:text-red-600 italic">
              🏆 Ver Leyendas Históricas &rarr;
            </h2>
            <p className="text-zinc-400 text-sm italic">Acceder a la sección de pilotos retirados.</p>
          </div>
        </Link>

        {/* ENLACE A ESCUDERÍAS */}
        <Link href="/pilotos/escuderias">
          <div className="bg-zinc-800 p-6 rounded-lg border-2 border-dashed border-zinc-700 hover:border-red-600 transition-all group">
            <h2 className="text-xl font-bold text-white group-hover:text-red-600 italic">
              🏎️ Ver Escuderías &rarr;
            </h2>
            <p className="text-zinc-400 text-sm italic">
              Filtrar pilotos por equipo.
            </p>
          </div>
        </Link>

        {/* ENLACES A RUTAS DINÁMICAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {pilotosPrincipales.map((p) => (
            <Link key={p.id} href={`/pilotos/${p.id}`}>
              <div className="bg-zinc-900 p-6 rounded-md border-l-4 border-red-600 hover:bg-zinc-800 transition-colors cursor-pointer">
                <span className="text-4xl font-black text-zinc-800 block mb-2">{p.numero}</span>
                <h3 className="text-lg font-bold text-white uppercase">{p.nombre}</h3>
                <p className="text-red-600 text-xs font-bold mt-2 underline">VER FICHA &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}