import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
ingredients = [];
@ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
@ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
@Output() addIngredients = new EventEmitter<Ingredient>();
@Output() deleteIngredients = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredients() {
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName, ingrAmount); 
    this.addIngredients.emit(newIngredient);

  }
  onDeleteIngredients() {
    this.deleteIngredients.emit();
  }

  onClearIngredients() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = null;
  }

}
