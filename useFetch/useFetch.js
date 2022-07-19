import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  })

  const getFetch= async ()=>{
    setState({...state, isLoading: true});
    const peticion = await fetch(url);
    const result = await peticion.json();
    setState({...state, isLoading: false, data: result});
  }
  useEffect(() => {
    getFetch();
    
  }, [url]);
  
  return ({
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    });
}
