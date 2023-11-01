const FilterReducer = (state, action) => {
    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "API_DATA":
            const products = action.payload;
            const even = products.filter((data) => {
                return data.id % 2 === 0;
            });
            const odd = products.filter((data) => {
                return data.id % 2 != 0;
            });
            // Sort by price low to high
            const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);

            // Sort by price high to low
            const highToLow = products.slice(0).sort((a, b) => b.price - a.price);

            // Extract women's products
            const womenProducts = products.filter(product => product.category.startsWith("womens-"));

            // Extract men's products
            const menProducts = products.filter(product => product.category.startsWith("mens-"));

            //================================extracting brands start=======================================
            // List of brand names to extract
            const brandsToExtract = [
                "Apple",
                "Samsung",
                "OPPO",
                "Huawei",
                "Microsoft",
                "Infinix",
                "HP",
                "Impression",
                "Royal_Mirage",
                "Fog",
                "Al",
                "Lord",
                "L'Oreal",
                "Hemani",
                "Dermive",
                "fauji",
                "Boho",
                "luxury",
                "Golden",
                "Ratttan"
            ];

            // Create an object to store data for each brand
            const brandData = {};

            // Filter and extract data for each brand
            brandsToExtract.forEach(brandName => {
                const brandProducts = products.filter(product => product.brand.startsWith(brandName));
                brandData[brandName] = brandProducts;
            });
            //================================extracting brands end=======================================

            //================================extracting price range start=======================================
            const price_500_1000 = products.filter(product => product.price * 80 >= 500 && product.price * 80 <= 1000);
            const price_1000_3000 = products.filter(product => product.price * 80 >= 1000 && product.price * 80 <= 3000);
            const price_3000_5000 = products.filter(product => product.price * 80 >= 3000 && product.price * 80 <= 5000);
            const price_5000_above = products.filter(product => product.price * 80 >= 5000 && product.price * 80 <= 999999999999999999999);
            //================================extracting price range end=======================================

            // console.log(price_5000_above);
            return {
                ...state,
                isLoading: false,
                isError: false,
                "all": products,
                "relevance": even,
                "popularity": odd,
                "price - low to high": lowToHigh,
                "price - high to low": highToLow,
                "newest first": odd,
                "men": menProducts,
                "women": womenProducts,
                "Apple": brandData["Apple"],
                "Samsung": brandData["Samsung"],
                "OPPO": brandData["OPPO"],
                "Huawei": brandData["Huawei"],
                "Microsoft": brandData["Microsoft"],
                "Infinix": brandData["Infinix"],
                "HP": brandData["HP"],
                "Impression": brandData["Impression"],
                "Royal_Mirage": brandData["Royal_Mirage"],
                "Fog": brandData["Fog"],
                "Al": brandData["Al"],
                "Lord": brandData["Lord"],
                "L'Oreal": brandData["L'Oreal"],
                "Hemani": brandData["Hemani"],
                "Dermive": brandData["Dermive"],
                "fauji": brandData["fauji"],
                "Boho": brandData["Boho"],
                "luxury": brandData["luxury"],
                "Golden": brandData["Golden"],
                "Ratttan": brandData["Ratttan"],
                "Rs. 500 - Rs. 1000": price_500_1000,
                "Rs. 1000 - Rs. 3000": price_1000_3000,
                "Rs. 3000 - Rs. 5000": price_3000_5000,
                "Rs. 5000 and above": price_5000_above,
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

export default FilterReducer;