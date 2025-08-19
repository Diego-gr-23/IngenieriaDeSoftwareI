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

        const connectionString = "postgresql://postgres.dfcqtcfixfvcfyjjeeyd:Waffle23-08@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
        const sql = postgres(connectionString, { ssl: "require" });
        
        return NextResponse.json({
            message: "Post Creado Correctamente y guardado en la BD",
        });

    } catch (error) {
        console.error("Error al crear el post", error);
        return NextResponse.json({error: "Error del servidor"}, {status: 500});
    } 
}