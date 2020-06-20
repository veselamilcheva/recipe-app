import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable <{ingredients: Ingredient[]}> ;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{shoppingList: {ingredients: Ingredient[]}}>  
    ) { 
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    console.log(this.ingredients)
  }

  onEditItem(index:number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
  }

  

}
