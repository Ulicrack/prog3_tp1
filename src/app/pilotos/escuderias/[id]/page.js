"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function EscuderiaPage() {

  const params = useParams();
  const idParam = params.id?.toLowerCase().trim();

  const pilotos = [
    { id: "verstappen", nombre: "Max Verstappen", equipo: "red bull racing", pais: "Países Bajos", titulos: 3 },
    { id: "hamilton", nombre: "Lewis Hamilton", equipo: "mercedes", pais: "Reino Unido", titulos: 7 },
    { id: "leclerc", nombre: "Charles Leclerc", equipo: "ferrari", pais: "Mónaco", titulos: 0 },
  ];
  
  const escuderiaMap = {
  "red-bull": "red bull racing",
  "red-bull-racing": "red bull racing",
  "mercedes": "mercedes",
  "ferrari": "ferrari"
  };

  const escuderiaNormalizada = escuderiaMap[idParam];

  const filteredPilotos = pilotos.filter(
    piloto => piloto.equipo === escuderiaNormalizada
  );

  return (
    <div className="p-8 md:p-16 min-h-screen bg-black text-white">

      <Link 
        href="/pilotos" 
        className="text-red-600 font-bold hover:text-white mb-8 inline-block"
      >
        &larr; VOLVER
      </Link>

      <h1 className="text-4xl font-bold mb-8 uppercase">
        Escudería: {escuderiaNormalizada || idParam}
      </h1>

      {filteredPilotos.length === 0 ? (
        <p>No hay pilotos en esta escudería</p>
      ) : (
        filteredPilotos.map(piloto => (
          <div key={piloto.id} className="bg-zinc-900 p-6 rounded-lg mb-4">
            
            <h2 className="text-2xl font-bold">{piloto.nombre}</h2>
            <p className="text-zinc-400">{piloto.pais}</p>

            <Link 
              href={`/pilotos/${piloto.id}`} 
              className="text-red-500 hover:underline"
            >
              Ver detalle
            </Link>

          </div>
        ))
      )}

    </div>
  );
}