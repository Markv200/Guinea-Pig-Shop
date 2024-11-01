const initialState = {
    itemCount: 0, // Keeps track of the total quantity of all items in the cart
    items: [], // Array to hold individual cart items with their quantities
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART': {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
  
        // If the item already exists in the cart, update its quantity
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            ),
            itemCount: state.itemCount + action.payload.quantity,
          };
        } else {
          // If the item does not exist in the cart, add it with the specified quantity
          return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: action.payload.quantity }],
            itemCount: state.itemCount + action.payload.quantity,
          };
        }
      }
  
      case 'REMOVE_FROM_CART': {
        const itemToRemove = state.items.find((item) => item.id === action.payload);
        if (!itemToRemove) return state; // If item is not in the cart, return the current state
  
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          itemCount: state.itemCount - itemToRemove.quantity,
        };
      }
  
      case 'INCREASE_QUANTITY': {
        const itemToIncrease = state.items.find((item) => item.id === action.payload);
        if (!itemToIncrease) return state; // If item is not in the cart, return the current state
  
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
          itemCount: state.itemCount + 1,
        };
      }
  
      case 'DECREASE_QUANTITY': {
        const itemToDecrease = state.items.find((item) => item.id === action.payload);
        if (!itemToDecrease || itemToDecrease.quantity <= 1) return state; // Prevent quantity from going below 1
  
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          ),
          itemCount: state.itemCount - 1,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  


// const initialState = {
//     itemCount: 0, // Keeps track of the total quantity of all items in the cart
//     items: [], // Array to hold individual cart items with their quantities
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SET_CART': {
//         // Calculate itemCount based on the fetched cart items
//         const itemCount = action.payload.reduce((total, item) => total + item.quantity, 0);
//         return {
//           ...state,
//           items: action.payload,
//           itemCount,
//         };
//       }
  
//       // No need for updates here since changes are handled in saga
//       case 'ADD_TO_CART':
//       case 'REMOVE_FROM_CART':
//       case 'INCREASE_QUANTITY':
//       case 'DECREASE_QUANTITY':
//         // Sagas will manage these actions by syncing with the backend
//         return state;
  
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  