import { useState } from "react";

export const useCounter = ( Value = 0 ) => {

  const [ counter, setCounter ] = useState( Value );

  const increment = (valor=1)=> setCounter( ( counter ) => counter+valor);

  const decrement = (valor=1)=> setCounter( ( counter ) => counter-valor);

  const reset = ()=> setCounter(Value);

  return{
    counter,
    increment,
    decrement,
    reset
  }
};