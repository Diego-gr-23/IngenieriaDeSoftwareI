export default class PublicationTitle{
    public value: string;

    constructor(value: string){
        this.isValid(value);
        this.value = value;
    }

    private isValid(title: string): void {
        if (!title || title.trim().length === 0) {
            throw new Error("El titulo no puede estar vacio");
        }
    }
}