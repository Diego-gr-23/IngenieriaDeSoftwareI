import postgres from "postgres";
import Publication from "./publication";

export default class PublicationRegister {
    constructor(){}

    public async save(title: string, description: string, autor: string) {
        try{
            const publication = Publication.create(title, description, autor); 

            const connectionString = "postgresql://postgres.dfcqtcfixfvcfyjjeeyd:Waffle23-08@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
            const sql = postgres(connectionString, { ssl: "require" });

            await sql`INSERT INTO publication (title, description, autor) VALUES (${publication.title.value}),
            ${publication.description.value},
            ${publication.autor.value});`;

        } catch (error) {
            throw new Error ("Error al guardar en la BD ")
        } 
    }
}