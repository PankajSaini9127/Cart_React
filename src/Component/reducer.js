export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
      totalItem: 0,
      totalAmount: 0,
    };
  }

  if (action.type === "INCREMENT") {
    let updateItem = state.item.map((curElem) => {
      if (curElem.id === action.id) {
        return {
          ...curElem,
          quantity: curElem.quantity + 1,
        };
      }
      return { ...curElem };
    });
    return { ...state, item: updateItem };
  }

  if (action.type === "DECREMENT") {
    let updateItem = state.item.map((curElem) => {
      if (curElem.id === action.id) {
        if(curElem.quantity > 1){
            return {
                ...curElem,
                quantity: curElem.quantity  - 1,
              };
        }
        return{...curElem}
      }
      return { ...curElem };
    });
    return { ...state, item: updateItem };
  }

  if(action.type === "GET_TOTAL"){
      let { totalItem,totalAmount ,itemAmount } = state.item.reduce(
        (accum, curVal)=>{
               let {price, quantity} = curVal;
               accum.totalAmount += price * quantity;
               accum.totalItem += quantity;
               return accum
      },
      { totalItem : 0, totalAmount :0 }
      )
      return { ...state , totalItem, totalAmount}
  }

  if(action.type === "HANDLE_ADD_CART"){
    console.log("hihihihi")
    return {...state}
  }
  return state;
};
