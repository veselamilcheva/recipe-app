import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { SharedModule } from '../shared/shared.modules';

@NgModule({
    declarations: [ 
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        RouterModule.forChild([{path: 'shopping-list', component: ShoppingListComponent}]), 
        FormsModule,
        SharedModule
    ]
})
export class ShoppingListModule {

}