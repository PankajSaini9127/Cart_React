export const reducer = (state, action) => {

  // Remove Item From Cart
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  //Clear Cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
      totalItem: 0,
      totalAmount: 0,
    };
  }

   //Increment Cart Item Quantity
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

  //Decrement Cart Item Quantity
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


  // Get Total Amount & Total Item In Cart
  if(action.type === "GET_TOTAL"){
      let { totalItem,totalAmount  } = state.item.reduce(
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

  //Add item to cart from list
  if(action.type === "HANDLE_ADD_CART"){
  
    let itemAdd = {};
    state.cartItem.map((curVal)=>{
            if(action.id === curVal.id){
              itemAdd = curVal
              return itemAdd
            }     
    }) 
    return {...state, item : [ ...state.item, itemAdd]}
        
  }
 
 
  return state;
};
