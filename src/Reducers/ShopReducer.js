import { TYPES } from "../Actions/ShopActions";



//function para renderizar

export const ShopInitialState = {
  cart: [],
};
export function shoppingReducers(state, action, lista) {
  console.log(lista)
  switch (action.type) {
    case TYPES.ADD_CART: {
      // let newitem = state.lista.find(lista => lista.id)
    }
    case TYPES.CLEAR_ALL_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    default:
      return state;
  }
}
