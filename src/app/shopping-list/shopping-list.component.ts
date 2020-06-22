import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppinList from './store/shopping-list.reducer';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable <{ingredients: Ingredient[]}> ;

  constructor(
    private store: Store<fromShoppinList.AppState>  
    ) { 
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index:number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }

  ngOnDestroy(): void {
  }

  

}
