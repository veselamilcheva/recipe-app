import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false; 
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = params.id; 
        this.editMode = params.id != null;
        this.initForm();
      } 
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePathUrl = '';
    let recipeVideoPathUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePathUrl = recipe.imagePath[0];
      recipeVideoPathUrl = recipe.imagePath[1];
      recipeDescription = recipe.description;
      if(recipe.ingredients) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePathUrl': new FormControl(recipeImagePathUrl, Validators.required),
      'videoPathUrl': new FormControl(recipeVideoPathUrl, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    });
  }
  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  
  onSubmit() {
    //const newRecipe = new Recipe(
      // this.recipeForm.value['name'], 
      // this.recipeForm.value['description'],
      // this.recipeForm.value['imagePath'],
      // this.recipeForm.value['ingredients']) 
      let payload = this.recipeForm.value;
      payload['imagePath'] = [
        payload['imagePathUrl'],
        payload['videoPathUrl']
      ];
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, payload); //use this only if the form has mathcing names with the object we build
    } else {
      this.recipeService.addRecipe(payload);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

    }))
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onDeleteIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).clear();
  }

}
