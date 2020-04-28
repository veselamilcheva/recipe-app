import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss', '../../app.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', ['../../assets/banitsa.jpg', '../../assets/banitsa.jpg']),
    new Recipe('A test recipe1', 'This is simply a test1', ['../../assets/banitsa.jpg', '../../assets/banitsa.jpg'])
  ];
  @Output() recipeSelectedData = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedData.emit(recipe);
  }

}
