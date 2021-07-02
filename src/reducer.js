export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_CART":
      let newCart = [...state.basket];

      const i = state.basket.findIndex((cartItem) => cartItem.id === action.id);

      if (i >= 0) {
        //remove
        newCart.splice(i, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}).`);
      }
      return {
        ...state,
        basket: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
