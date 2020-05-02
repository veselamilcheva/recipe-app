import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
ingredients = [];
@ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredients() {
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName, ingrAmount);
    this.shoppingListService.onAddedIngredients(newIngredient);
  }
  onDeleteIngredients() {
    this.shoppingListService.onDeletedIngredients();
  }

  onClearIngredients() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = null;
  }

}
