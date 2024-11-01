const selectedItemReducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_ITEM_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedItemReducer;
  