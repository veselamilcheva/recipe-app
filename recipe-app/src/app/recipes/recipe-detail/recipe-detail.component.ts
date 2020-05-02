import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelExpanded: boolean;
  @Input() recipeItem: Recipe;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredientsBulk() {
    this.shoppingList.onAddedBulkIngredients(this.recipeItem.ingredients);
  }

}
