export const initialState = {
  basket: [],
};

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
    default:
      return state;
  }
};

export default reducer;
