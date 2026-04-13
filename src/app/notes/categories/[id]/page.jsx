"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CategoryPage() {

  const params = useParams();
  const idParam = params.id?.toLowerCase().trim();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    // normalizar categorías
    storedNotes = storedNotes.map(note => ({
      ...note,
      category: (note.category || "general").toLowerCase().trim()
    }));

    setNotes(storedNotes);
  }, []);

  const filteredNotes = notes.filter(
    note => note.category === idParam
  );

  return (
    <div className="flex flex-col flex-1 p-4 bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
            <Link href={"/notes"} className="self-start text-white font-semibold p-2 mb-4">
            &larr; Back to notes
            </Link>
            <h1 className="text-3xl font-semibold mb-6 text-black dark:text-zinc-50">
                Categoría: {idParam}
            </h1>

            {filteredNotes.length === 0 ? (
                <p>No hay notas en esta categoría</p>
            ) : (
                filteredNotes.map(note => (
                <div key={note.id} className="bg-zinc-800 text-white p-4 rounded-lg my-4 flex flex-col justify-between w-full">
                    <h2 className="font-semibold">{note.title}</h2>
                    <p>{note.content}</p>

                    <Link 
                    href={`/notes/${note.id}`} 
                    className="text-sm text-zinc-400 hover:underline"
                    >
                    Ver nota
                    </Link>
                </div>
                ))
            )}
        </main>
    </div>
  );
}