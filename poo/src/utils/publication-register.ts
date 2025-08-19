import postgres from "postgres";
import Publication from "./publication";

export default class PublicationRegister {
    constructor(){}

    public async save(publication: Publication) {
        try{
            const connectionString = "postgresql://postgres.dfcqtcfixfvcfyjjeeyd:Waffle23-08@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
            const sql = postgres(connectionString, { ssl: "require" });

            await sql `INSERT INTO publication (title, description, autor) VALUES (${publication.title}),
            ${publication.description},
            ${publication.autor});`;

        } catch (error) {
            throw new Error ("Error al guardar en la BD ")
        } 
    }
}