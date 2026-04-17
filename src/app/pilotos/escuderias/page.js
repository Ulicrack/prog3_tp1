import Link from "next/link";

export default function EscuderiasPage() {

  const escuderias = [
    { id: "red-bull", nombre: "Red Bull Racing" },
    { id: "mercedes", nombre: "Mercedes" },
    { id: "ferrari", nombre: "Ferrari" },
  ];

  return (
    <div className="p-10 bg-black min-h-screen text-white">

      <h1 className="text-4xl font-bold mb-8 uppercase">
        Escuderías
      </h1>

      <div className="grid gap-4">
        {escuderias.map((e) => (
          <Link key={e.id} href={`/pilotos/escuderias/${e.id}`}>
            <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition cursor-pointer">
              <h2 className="text-xl font-bold">{e.nombre}</h2>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}