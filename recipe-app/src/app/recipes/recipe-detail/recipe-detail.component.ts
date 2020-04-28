import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss', '../../app.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
