export default class PublicationDescription {
    public value: string;

    constructor(value: string){
        this.isValid(value);
        this.value = value;
    }

    private isValid(description: string): void{
        if (!description || description.trim().length === 0){
            throw new Error("La descripcion no puede estar vacia");
        }
    }
}