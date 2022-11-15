import React, { createContext, useReducer, useEffect } from "react";

//JSON Data File
import { data } from "./Component/Data";

//Reducer Function For useReducer
import { reducer } from "./Component/reducer";

//Component
import Router from "./Component/Router";

//Context
const Data = createContext();

const getData = ()=>{
  let data = localStorage.getItem("cartItem");
  if(data === []){
    return [];
  }else{
    return JSON.parse(data)
  }
}

//State initilation
const intialState = {
  item: getData(),
  cartItem: data,
  totalItem: 0,
  totalAmount: 0,
  itemAmount: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);

  //delete item from cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  //Increment Quantity
  const handleIncrement = (id) => {
    return dispatch({
      type: "INCREMENT",
      id: id,
    });
  };

  //Decrement Quantity
  const handleDecrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      id: id,
    });
  };

  // get total
  useEffect(() => {
    return dispatch({
      type: "GET_TOTAL",
    });
  }, [state.item]);

  // add to cart
  const handleAddCart = (id) => {
    return dispatch({
      type: "HANDLE_ADD_CART",
      id: id,
    });
  };

  //set cartItem in localStorage
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(state.item))
  
  }, [state.item])
  

  return (
    <Data.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        handleIncrement,
        handleDecrement,
        handleAddCart,
      }}
    >
      <Router />
    </Data.Provider>
  );
}

export default App;
export { Data };
