"use client";

import React, { useEffect, useState } from "react";
import Link from 'next/link'

export default function TrashPage() {
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    const storedTrash = JSON.parse(localStorage.getItem("trash")) || [];
    setTrash(storedTrash);
  }, []);

  // ♻️ RESTAURAR NOTA
  const handleRestore = (note) => {
    const updatedTrash = trash.filter(n => n.id !== note.id);
    setTrash(updatedTrash);
    localStorage.setItem("trash", JSON.stringify(updatedTrash));

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = [...notes, note];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // ❌ ELIMINAR DEFINITIVAMENTE
  const handleDeleteForever = (note) => {
    const updatedTrash = trash.filter(n => n.id !== note.id);
    setTrash(updatedTrash);
    localStorage.setItem("trash", JSON.stringify(updatedTrash));
  };

  // 🧹 VACIAR PAPELERA (opcional)
  const clearTrash = () => {
    setTrash([]);
    localStorage.setItem("trash", JSON.stringify([]));
  };

  return (
  <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black min-h-screen">
    
    <main className="flex flex-1 w-full flex-col items-center py-20 px-6 bg-white dark:bg-black">

      <div className="w-full max-w-3xl">
        <Link href={"/notes"} className="self-start bg-zinc-900 rounded-md p-2 mb-4 text-white font-semibold">
          &larr; Back to notes
        </Link>
        <h1 className="text-2xl font-bold py-10 mb-4 text-black dark:text-white">
          🗑️ Papelera
        </h1>

        {trash.length > 0 && (
          <button 
            onClick={clearTrash}
            className="mb-4 text-sm text-red-500 hover:underline"
          >
            Vaciar papelera
          </button>
        )}

        {trash.length === 0 ? (
          <p className="text-black dark:text-white">
            No hay notas eliminadas
          </p>
        ) : (
          trash.map((note) => (
            <div 
              key={note.id} 
              className="bg-zinc-800 text-white p-4 rounded-lg my-4 flex flex-col gap-2"
            >
              
              <div>
                <h2 className="font-semibold">{note.title}</h2>
                <p>{note.content}</p>
              </div>

              <div className="flex gap-4 text-sm">
                
                <button 
                  onClick={() => handleRestore(note)}
                  className="text-green-400 hover:underline"
                >
                  Restaurar
                </button>

                <button 
                  onClick={() => handleDeleteForever(note)}
                  className="text-red-400 hover:underline"
                >
                  Eliminar definitivamente
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </main>
  </div>
);
}