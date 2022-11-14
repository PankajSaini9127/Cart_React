import React, {createContext, useReducer, useEffect} from 'react'
import Router from './Component/Router';
import {reducer} from './Component/reducer'

import {data} from './Component/Data'

 const Data = createContext();

 const intialState ={
    item: data,
    totalItem : 0,
    totalAmount : 0,
    itemAmount : 0
 }



function App() {

  // const [value, setValue]= useState(data);

  const [state, dispatch] = useReducer(reducer, intialState)

  //delete item from cart
  const removeItem = (id)=>{
    return dispatch({
     type: "REMOVE_ITEM",
     payload : id
    })
  }

// clear cart
const clearCart = ()=>{
  return dispatch({
    type: "CLEAR_CART"
  })
}

//Increment Quantity 
const handleIncrement = (id)=>{
  return dispatch ({
    type:"INCREMENT",
    id:id
  })
}

//Decrement Quantity 
const handleDecrement = (id)=>{
  return dispatch ({
    type:"DECREMENT",
    id:id
  })
}

// get total 
useEffect(() => {
 return dispatch({
  type: "GET_TOTAL"
 })
}, [state.item])


// add to cart
const handleAddCart = (id)=>{
  return dispatch({
    type: "HANDLE_ADD_CART",
    id: id
  })
}

  return (
    <Data.Provider value={{...state, removeItem, clearCart,handleIncrement, handleDecrement, handleAddCart}} >
      
         <Router/>
      
    </Data.Provider>

    
   
  );
}

export default App;
export { Data}