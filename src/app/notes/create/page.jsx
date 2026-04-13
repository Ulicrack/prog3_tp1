"use client";

import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from "next/navigation"

function Page() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();

    // traer notas actuales
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // generar nuevo id (simple)
    const lastId = notes.length > 0 
      ? Math.max(...notes.map(n => n.id)) 
      : 0;

    const newNote = {
      id: lastId + 1,
      title,
      content,
      category
    };

    const updatedNotes = [...notes, newNote];

    // guardar en localStorage
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // redirigir a /notes
    router.push("/notes");
  };

  return (
    <section className='flex p-20 justify-center items-center w-full'>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 p-6 rounded-lg bg-zinc-800 font-sans"
      >

        <Link href={"/notes"} className="self-start bg-zinc-900 rounded-md p-2 mb-4 text-white font-semibold">
          &larr; Back to notes
        </Link>

        <p className='text-white text-3xl font-semibold'>create note</p>
        
        <input 
          type="text" 
          placeholder='Title' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 bg-zinc-900 rounded-md my-4 text-white'
        />

        <textarea 
          placeholder="Content" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='p-2 bg-zinc-900 rounded-md my-4 text-white' 
          rows={10} 
        />

        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='p-2 bg-zinc-900 rounded-md my-4 text-white'>

          <option value="general">General</option>
          <option value="programacion">Programación</option>
          <option value="estudio">Estudio</option>
        </select>

        <button className='bg-zinc-600 text-white p-2 rounded-md hover:bg-zinc-500'>
          Save
        </button>
      
      </form>
    </section>
  )
}

export default Page