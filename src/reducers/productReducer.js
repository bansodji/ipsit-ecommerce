const ProductReducer = (state, action) => {
    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "API_DATA":
            const even = action.payload.filter((data) => {
                return data.id % 2 === 0;
            });
            const odd = action.payload.filter((data) => {
                return data.id % 2 != 0;
            });
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                even: even,
                odd: odd,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }

}

export default ProductReducer;