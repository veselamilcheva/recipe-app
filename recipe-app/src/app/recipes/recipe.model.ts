export class Recipe {
    public name: string;
    public decription: string;
    public imagePath: string;
    
    constructor(name: string, decription: string, imagePath: string) {
        this.name = name;
        this.decription = decription;
        this.imagePath = imagePath;

    }
}