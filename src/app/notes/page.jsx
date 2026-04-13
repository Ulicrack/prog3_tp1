"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Notas() {

  const [notes, setNotes] = useState([]);

  // cargar notas iniciales
  useEffect(() => {
    let storedNotes = JSON.parse(localStorage.getItem("notes")) || [
      { id: 1, title: "componentes", content: "Notas sobre como funcionan los componentes en NEXT", category: "general" },
      { id: 2, title: "Rutas", content: "Notas sobre como funcionan las rutas en NEXT", category: "programacion" },
      { id: 3, title: "Layouts", content: "Notas sobre como funcionan los layouts en NEXT", category: "programacion" }
    ];

    // 🧠 aseguramos que TODAS tengan category
    storedNotes = storedNotes.map(note => ({
      ...note,
      category: note.category || "general"
    }));

    localStorage.setItem("notes", JSON.stringify(storedNotes));
    setNotes(storedNotes);
  }, []);

  // borrar nota → mover a papelera
  const handleDelete = (note) => {
    const updatedNotes = notes.filter(n => n.id !== note.id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    const trash = JSON.parse(localStorage.getItem("trash")) || [];
    const updatedTrash = [...trash, note];
    localStorage.setItem("trash", JSON.stringify(updatedTrash));
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Notas
          </h1>

          <Link href={"/notes/create"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">
            create note
          </Link>

          <Link href={"/notes/trash"} className="flex h-12 items-center justify-center rounded-full border border-zinc-400 px-5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            papelera
          </Link>
        </div>

        {/* sección que muestra mis notas */}
        {notes.map((note) => (
          <section key={note.id} className='bg-zinc-800 w-full h-64 my-8 rounded-lg flex flex-col p-4 text-white justify-between'>
            
            <div>
              <h1 className='font-semibold text-lg'>{note.title}</h1>
              <p>{note.content}</p>
            </div>

            <div className="flex justify-between items-center text-sm text-zinc-400">
              
              <div className="flex gap-4">
                <Link href={`/notes/${note.id}`} className='hover:underline'>
                  Ver Nota
                </Link>
                <p>Categoría:</p>
                <Link href={`/notes/categories/${note.category}`} className='hover:underline'>
                  {note.category}
                </Link>
              </div>

              {/* BOTÓN BORRAR */}
              <button 
                onClick={() => handleDelete(note)}
                className="text-red-400 hover:underline"
              >
                borrar
              </button>

            </div>

          </section>
        ))}

      </main>
    </div>
  )
}

export default Notas