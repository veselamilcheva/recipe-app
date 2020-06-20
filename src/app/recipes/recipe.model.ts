import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: Array<string>;
    public ingredients: Ingredient[];
    
    constructor(name: string, description: string, imagePath: Array<string>, ingredients: Ingredient[] = []) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}