import { createContext, useState, useContext } from "react";
import axios from "axios";

const AppContext = createContext();

const API = 'https://dummyjson.com/products/categories';

const CategoryProvider = ({ children }) => {

    const [state, setState] = useState(null);

    const getCategories = async (url) => {
        try {
            const res = await axios.get(url);
            setState(res.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useState(() => {
        getCategories(API);
    },[]);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
}


// custom hook
const useCategoryContext = () => {
    return useContext(AppContext);
}

export { AppContext, CategoryProvider, useCategoryContext };