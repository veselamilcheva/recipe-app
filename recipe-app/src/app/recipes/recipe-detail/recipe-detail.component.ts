import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelExpanded: boolean;
  recipeItem: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private shoppingList: ShoppingListService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipeItem = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addIngredientsBulk() {
    this.shoppingList.onAddedBulkIngredients(this.recipeItem.ingredients);
  }

}
