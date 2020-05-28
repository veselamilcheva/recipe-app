import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model'
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes; //update the list of recipe by subscribing to recipechanged
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route} );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
