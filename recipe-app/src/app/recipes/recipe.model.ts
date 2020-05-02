import { Ingredient } from '../shared/ingredient.module';

export class Recipe {
    public name: string;
    public decription: string;
    public imagePath: Array<string>;
    public ingredients: Ingredient[];
    
    constructor(name: string, decription: string, imagePath: Array<string>, ingredients: Ingredient[] = []) {
        this.name = name;
        this.decription = decription;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}