import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Banitsa', 
            'Bulgarian dish', 
            ['../../assets/banitsa.jpg', 
            '../../assets/banitsa.jpg'], 
            [
                new Ingredient('cheese', 1),
                new Ingredient('yogurt', 1)
            ]
        ),
        new Recipe(
            'Musaka', 
            'Greek dish', 
            ['../../assets/musaka.jpg', 
            '../../assets/musaka.jpg'], 
            [
                new Ingredient('gound beef', 1),
                new Ingredient('patatos', 1)
            ]
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }
}