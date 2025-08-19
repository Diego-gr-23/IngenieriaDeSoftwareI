import PublicationTitle from "./publication-title";
import PublicationDescription from "./publication-description";
import PublicationAutor from "./publication-autor";


export default class Publication {
    public title: PublicationTitle;
    public description: PublicationDescription;
    public autor: PublicationAutor;

    constructor(title: PublicationTitle, description: PublicationDescription, autor:PublicationAutor){
        this.title = title;
        this.description = description;
        this.autor = autor; 
    }

    public static create(title: string, description: string, autor: string) {
        const publication = new Publication(
            new PublicationTitle(title),
            new PublicationDescription(description),
            new PublicationAutor(autor)
        );
        return publication;
    }
}
