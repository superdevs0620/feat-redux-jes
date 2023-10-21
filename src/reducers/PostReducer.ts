const postReducer = (state = [], action : any) => {
    switch (action.type) {
      case "ADD_POST":
        return [...state, action.payload];
      case "UPDATE_POST":
        return 
      default:
        return state;
    }
  };
  export default postReducer;