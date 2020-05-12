import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  panelExpanded: boolean;
  recipeItem: Recipe;
  id: number;
  showImage = true;

  constructor(
    private recipeService: RecipeService,
    private shoppingList: ShoppingListService, 
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private router: Router) { }

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

  onShowImage() {
    this.showImage = !this.showImage;
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
