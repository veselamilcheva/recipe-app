import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Banitsa', 
            'Bulgarian dish', 
            ['../../assets/banitsa.jpg', 
            'https://www.youtube.com/embed/APR8rkCUZxg'], 
            [
                new Ingredient('cheese', 1),
                new Ingredient('yogurt', 1)
            ]
        ),
        new Recipe(
            'Musaka', 
            'Greek dish', 
            ['../../assets/musaka.jpg', 
            'https://www.youtube.com/embed/86PShBcVE9E'], 
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