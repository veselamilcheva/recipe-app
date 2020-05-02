import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', ['../../assets/banitsa.jpg', '../../assets/banitsa.jpg']),
        new Recipe('A test recipe1', 'This is simply a test1', ['../../assets/banitsa.jpg', '../../assets/banitsa.jpg'])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}