export class Recipe {
    public name: string;
    public decription: string;
    public imagePath: Array<string>;
    
    constructor(name: string, decription: string, imagePath: Array<string>) {
        this.name = name;
        this.decription = decription;
        this.imagePath = imagePath;

    }
}