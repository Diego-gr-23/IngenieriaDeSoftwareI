import next from "next";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

interface Post{ //Interfaz para el post
    id: number;
    title: string;
    description: string;
    autor: string;
}

export async function POST(request: NextRequest){
    try {
        const data: Partial<Post> = await request.json();

        // Validacion de id, para que sea mayor a 0
        if (!data.id || typeof data.id !== "number" || data.id <= 0 ) {
            return NextResponse.json ({error: "El id debe ser un numero mayor a 0"}, {status: 400}); 
        }

        // Validacion del titulo, para que este lleno 
        if (!data.title || data.title.trim().length === 0) {
            return NextResponse.json({error: "El titulo no puede estar vacio"}, {status: 400});
        }

        // Validacion de descripcion, para que este llena 
        if (!data.description || data.description.trim().length === 0){
            return NextResponse.json({error: "La descripcion no puede estar vacia"}, {status: 400});
        }

        // Validacion de autor, para que este lleno
        if (!data.autor || data.autor.trim().length === 0) {
            return NextResponse.json({error: "El autor no puede estar vacio"}, {status:400});
        }


        // A la hora de pasar estas validaciones, se puede simular el guardado de memoria 
        const newPost: Post = {
            id: data.id,
            title: data.title,
            description: data.description,
            autor: data.autor,
        };

        return NextResponse.json({
            message: "Post Creado Correctamente",
            post: newPost,
        });

    } catch (error) {
        console.error("Error al crear el post", error);
        return NextResponse.json({error: "Error del servidor"}, {status: 500});
    } 
}