import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

interface Post{ //Interfaz para el post
    id: number;
    title: string;
    description: string;
    autor: string;
}

export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        //Validaciones 
        isValidTitle(data.title);
        isValidDescription(data.description);
        isValidAutor(data.autor);

        //Guardar en la BD
        const newPost = await savePost(data.title, data.description, data.autor);
        
        return NextResponse.json({
            message: "Post Creado Correctamente y guardado en la BD",
            post: newPost,
        });
    } catch (error) {
        console.error("Error al crear el post", error);
        return NextResponse.json({error: "Error del servidor"}, {status: 500});
    }   
}

// Funciones para validar datos
function isValidTitle(title: string): void { 
    if (!title || title.trim().length === 0) {
        throw new Error("El titulo no puede estar vacio");
    }
}

function isValidDescription(description: string): void {
    if (!description || description.trim().length === 0){
        throw new Error("La descripcion no puede estar vacia");
    }
}

function isValidAutor(autor: string): void {
    if (!autor || autor.trim().length === 0){
        throw new Error("El autor no puede estar vacio");
    }
}

// Aca se hace la conexion y se guarda en la BD
async function savePost(title: string, description: string, autor: string): promise<Post> {
    const connectionString = "postgresql://postgres.dfcqtcfixfvcfyjjeeyd:Waffle23-08@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
    const sql = postgres(connectionString, { ssl: "require" });
    
    const result = await sql<Post[]>`
        insert into post (title, description, autor)
        values (${title}, ${description}, ${autor})
        returning *;
    `;

    return result[0];
}