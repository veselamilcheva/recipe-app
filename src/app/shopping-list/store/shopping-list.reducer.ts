import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions'


const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 5)
    ]
};

export function ShoppinListReducer (state = initialState, action: ShoppingListActions.AddIngredient) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT: //action identifier
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        default: return state;
    }
}