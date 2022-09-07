import { TYPES } from "../Actions/ShopActions";



//function para renderizar

export const ShopInitialState = {
  cart: [],
};
export function shoppingReducers(state, action) {
  switch (action.type) {
    case TYPES.ADD_CART: {
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
