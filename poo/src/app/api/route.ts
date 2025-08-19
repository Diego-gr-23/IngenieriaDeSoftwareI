import { NextRequest, NextResponse } from "next/server";
import Publication from "@/utils/publication";
import PublicationRegister from "@/utils/publication-register";

export async function POST(request: NextRequest){
    try {
        const data = await request.json();

        const publication = new Publication(data.title, data.description, data.autor);
        const register = new PublicationRegister ()

        register.save(publication);
        
        return NextResponse.json({
            message: "Post Creado Correctamente y guardado en la BD",
        });
    } catch (error) {
        console.error("Error al crear el post", error);
        return NextResponse.json({error: "Error del servidor"}, {status: 500});
    }   
}
