import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss', '../app.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddedIngredients(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

  onDeletedIngredients() {
    this.ingredients = [];
  }

}
