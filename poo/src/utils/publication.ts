export default class Publication {
    public title:string;
    public description: string;
    public autor: string;

    constructor(title: string, description: string, autor:string){
        this.isValidTitle(title);
        this.title = title;
        this.isValidDescription(description);
        this.description = description;
        this.isValidAutor(autor);
        this.autor = autor; 
    }

    // Funciones para validar datos
    private isValidTitle(title: string): void { 
        if (!title || title.trim().length === 0) {
            throw new Error("El titulo no puede estar vacio");
        }
    }

    private isValidDescription(description: string): void {
        if (!description || description.trim().length === 0){
            throw new Error("La descripcion no puede estar vacia");
        }
    }

    private isValidAutor(autor: string): void {
        if (!autor || autor.trim().length === 0){
            throw new Error("El autor no puede estar vacio");
        }
    }
}