const initialState = {
    itemCount: 0, // Keeps track of the total quantity in the cart
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          itemCount: state.itemCount + action.payload, // Add quantity to itemCount
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  