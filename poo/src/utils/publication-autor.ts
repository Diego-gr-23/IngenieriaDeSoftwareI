export default class PublicationAutor {
    public value: string;

    constructor(value: string){
        this.isValid(value);
        this.value = value
    }

    private isValid(autor: string): void {
        if (!autor || autor.trim().length === 0){
            throw new Error("El autor no puede estar vacio");
        }
    }
}