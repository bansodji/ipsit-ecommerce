import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";

const AppContext = createContext();

const API = 'https://dummyjson.com/products';
const API_all = 'https://dummyjson.com/products?limit=100&skip=0';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    even: [],
    odd: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "LOADING"});
        try {
            const res = await axios.get(url);
            const product = await res.data.products;
            dispatch({ type: "API_DATA", payload: product });
        }
        catch(error){
            dispatch({type: "API_ERROR"});
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider,AppContext, useProductContext };