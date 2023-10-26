import { createContext, useReducer, useState, useContext } from "react";
import axios from "axios";
import reducer from "../reducers/allProductReducer";

const AppContext = createContext();

const API = 'https://dummyjson.com/products?limit=100&skip=0';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    even: [],
    odd: []
}

const AllProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getAllProduct = async (url) => {
        dispatch({type: "LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data.products;
            dispatch({type: "API_DATA", payload: products});
        }
        catch(error){
            dispatch({type: "API_ERROR"});
        }
    }

    useState(() => {
        getAllProduct(API);
    },[]);

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
}

// custom hook
const useAllProductContext = () => {
    return useContext(AppContext);
}

export { AppContext, AllProductProvider, useAllProductContext };