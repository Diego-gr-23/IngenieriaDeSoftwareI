import Publication from "./publication";
import { Sql } from "postgres";
import postgres from "postgres";
import PublicationRepository from "./publication-repository";

export default class PostgresPublicationRepository implements PublicationRepository {
    private readonly sql: Sql;

    constructor(){
        const connectionString = "postgresql://postgres.dfcqtcfixfvcfyjjeeyd:Waffle23-08@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
        this.sql = postgres(connectionString, { ssl: "require" });
    }

    async save(publication: Publication) {
        try {
            const title = publication.title.value;
            const description = publication.description.value;
            const autor = publication.autor.value;

            await this.sql`INSERT INTO publication (title, description, autor) VALUES (${title}),
            ${description},
            ${autor});`;

        } catch (error) {
            throw new Error ("Error al guardar en la BD ")
        }
    }
    async getPublications(): Promise<Publication[]> {
        try {
            const rows = await this.sql`SELECT * FROM publication;`
            return rows.map(row => new Publication(row.title, row.description, row.autor));
        } catch {
            throw new Error("No se pudo obtener la publicaion");
        }
    }
}