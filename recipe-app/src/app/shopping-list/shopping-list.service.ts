import { Ingredient } from '../shared/ingredient.module';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 5)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    onAddedIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    
    onDeletedIngredients() {
        this.ingredients = [];
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}