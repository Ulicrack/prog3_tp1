"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StatsPage() {

  const [notes, setNotes] = useState([]);
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const storedTrash = JSON.parse(localStorage.getItem("trash")) || [];

    setNotes(storedNotes);
    setTrash(storedTrash);
  }, []);

  // 📊 estadísticas por categoría
  const categoriesCount = notes.reduce((acc, note) => {
    const cat = note.category || "general";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">

      <Link href="/" className="text-zinc-400 hover:underline">
        ← Volver al inicio
      </Link>

      <h1 className="text-3xl font-bold my-6">
        Estadísticas 📊
      </h1>

      {/* RESUMEN GENERAL */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Notas</h2>
          <p className="text-3xl mt-2">{notes.length}</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">En papelera</h2>
          <p className="text-3xl mt-2">{trash.length}</p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Total general</h2>
          <p className="text-3xl mt-2">{notes.length + trash.length}</p>
        </div>

      </div>

      {/* CATEGORÍAS */}
      <div className="bg-zinc-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Notas por categoría
        </h2>

        {Object.keys(categoriesCount).length === 0 ? (
          <p className="text-zinc-400">No hay datos</p>
        ) : (
          <ul className="space-y-2">
            {Object.entries(categoriesCount).map(([cat, count]) => (
              <li key={cat} className="flex justify-between border-b border-zinc-700 pb-2">
                <Link href={`/notes/categories/${cat}`}>
                    {cat}
                </Link>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}