import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class RecipeService {
    recipeChanged = new Subject<Recipe[]>(); //we use this to update the data
    private recipes: Recipe[] = [];

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id:number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipes() {
        this.recipes = [];
        this.recipeChanged.next(this.recipes.slice())
    }
}