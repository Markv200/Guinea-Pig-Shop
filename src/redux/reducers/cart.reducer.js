const initialState = {
  itemCount: 0,
  items: [],
  subtotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART': {
      return {
        ...state,
        items: action.payload.items,
        itemCount: action.payload.itemCount,
        subtotal: action.payload.subtotal,
      };
    }    
    case 'ADD_TO_CART': {
      console.log("Payload received in ADD_TO_CART:", action.payload); 

      const existingItem = state.items.find(item => item.id === action.payload.item_id);

      const updatedItems = existingItem
        ? state.items.map(item =>
            item.id === action.payload.item_id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        : [...state.items, { id: action.payload.item_id, quantity: action.payload.quantity }];

      const subtotal = updatedItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

      return { ...state, items: updatedItems, itemCount: state.itemCount + action.payload.quantity, subtotal };
    }
    case 'UPDATE_CART_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.item_id ? { ...item, quantity: action.payload.quantity } : item
      );
      const subtotal = updatedItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

      return { ...state, items: updatedItems, subtotal };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;






