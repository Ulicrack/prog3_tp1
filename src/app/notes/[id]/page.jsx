import React from 'react'
import Link from 'next/link'

async function page({ params }) {

    const { id } = await params

    // Función buscsar notas (localhost:3000/notes/{id}) -> me trae un objeto nota {id: 1, title: "Nota 1", content: "Contenido de la nota 1"}

    const nota = {
        id: 1,
        title: id,
        content: "Los Arrays son una estructura de datos que nos permiten almacenar múltiples valores en una sola variable . En Javascript los Arrays se definen usando corchetes [ ] y pueden contener cualqueir tipo de dato, incluyendo otros arrays por ejemplo:",
        video: "https:/WWW.youtube.com",
    }
    return (

        <div className='flex flex-col flex-l items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
            <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <Link href={"/notes"} className="self-start text-white font-semibold">
                        &larr; Back to notes
                    </Link>
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        {nota.title}
                    </h1>
                    <p className='text-justify'>
                        {nota.content}
                    </p>
                </div>

                {/* Ejemplo de como fuencionan los Arrays */}

                <section className='bg-zinc-800 w-full h-64 my-8 p-6 rounded-lg flex flex-col  text-white justify-between'>
                    <p className='text-lg font-semibold'>Ejemplo Arrays</p>
                    <pre className='text-sm text-white bg-black rounded'>
                        <code>
                            {`
[
    {id: 1, title: "Nota 1", content: "contenido de la Nota 1"},
    {id: 2, title: "Nota 2", content: "contenido de la Nota 2"},
    {id: 3, title: "Nota 3", content: "contenido de la Nota 3"},
]
                            `}
                        </code>
                    </pre>
                </section>
            
            </main>
        </div>
    )
}

export default page