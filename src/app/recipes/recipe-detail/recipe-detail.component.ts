import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {DomSanitizer} from '@angular/platform-browser';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredient.model';


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
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private router: Router,
    private store: Store<{shoppingList: {ingredients: Ingredient[] } }>) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipeItem = this.recipeService.getRecipe(this.id);
      }
    );
  }

  addIngredientsBulk() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeItem.ingredients));
  }

  onShowImage() {
    this.showImage = !this.showImage;
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../recipes']);
  }

}
