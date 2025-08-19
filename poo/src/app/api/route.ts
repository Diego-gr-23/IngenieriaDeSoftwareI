import { NextRequest, NextResponse } from "next/server";
import PublicationRegister from "@/utils/publication-register";
import PostgresPublicationRepository from "@/utils/postgres-publication-repository";
import InMemoryPublicationRepository from "@/utils/in-memory-publication-repository";


export async function POST(request: NextRequest){
    try {
        const data = await request.json();
        const repository = new PostgresPublicationRepository();
        const register = new PublicationRegister(repository);
        await register.run(data.title, data.description, data.autor);
        
        return NextResponse.json({
            message: "Post Creado Correctamente y guardado en la BD"
        });
    } catch (error) {
        console.error("Error al crear el post", error);
        return NextResponse.json({error: "Error del servidor"}, {status: 500});
    }   
}