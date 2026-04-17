import Link from 'next/link';
import React from 'react';

export default async function PilotoDetalle({ params }) {
  
  // Obtenemos el id de la url
  const { id } = await params;

  /// algunos datos
  const infoPilotos = {
    verstappen: { nombre: "Max Verstappen", equipo: "Red Bull Racing", pais: "Países Bajos", titulos: 3 },
    hamilton: { nombre: "Lewis Hamilton", equipo: "Mercedes", pais: "Reino Unido", titulos: 7 },
    leclerc: { nombre: "Charles Leclerc", equipo: "Ferrari", pais: "Mónaco", titulos: 0 },
  };

  // Buscamos si el id existe en nuestra lista, sino usamos el id tal cual
  const piloto = infoPilotos[id.toLowerCase()] || { nombre: id, equipo: "Desconocido", pais: "N/A", titulos: "?" };

  return (
    <div className="p-8 md:p-16 min-h-screen bg-black text-white">
      
      {/* Boton para volver usando el componente Link */}
      <Link 
        href="/pilotos/escuderias" 
        className="text-red-600 font-bold hover:text-white transition-colors mb-8 inline-block"
      >
        &larr; VOLVER A LA GRILLA
      </Link>

      <header className="border-b-4 border-red-600 pb-6 mb-10">
        <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm mb-2">Ficha Técnica Oficial</p>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
          {piloto.nombre}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Card de estadisticas */}
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-2xl">
          <h2 className="text-red-600 font-bold text-xl mb-6 uppercase tracking-wider">Estadísticas</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Escudería:</span>
              <span className="font-bold">{piloto.equipo}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Nacionalidad:</span>
              <span className="font-bold">{piloto.pais}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Títulos Mundiales:</span>
              <span className="font-bold text-red-600">{piloto.titulos}</span>
            </div>
          </div>
        </div>

        {/* Seccion de info extra */}
        <div className="flex flex-col justify-center">
          <p className="text-zinc-400 leading-relaxed text-lg italic">
            "Este piloto representa la excelencia en la pista. Con una técnica depurada y 
            una ambición sin límites, {piloto.nombre} continúa dejando su marca en la 
            historia de la Formula 1."
          </p>
          <div className="mt-8 h-1 w-20 bg-red-600"></div>
        </div>

      </div>

    </div>
  );
}