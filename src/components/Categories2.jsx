import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CategoryData } from './Data';
import axios from "axios";
import Product from './Product2';

let API = "https://dummyjson.com/products/category/";

const CategoryWrapper = styled.section`
    width: 100%;

    a{
        z-index: 1;
    }
`;

const Categories2 = () => {
    const [catName, setCatName] = useState("smartphones");
    const [catItems, setCatItems] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        getCategories(API + catName + "?skip=0&limit=100"); //calling api for fetching category items

        // Add a window resize event listener to update the screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Scroll to the top of the page when navigating to a new route
        window.scrollTo(0, 0);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [catName]);

    const getCategories = async (url) => {
        try {
            const res = await axios.get(url);
            setCatItems(res.data.products);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <CategoryWrapper className='mt-4 mb-5'>
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-2 col-3">
                        <div className='ip-box'>
                            {
                                Object.keys(CategoryData).map((data, index) => (
                                    <a onClick={() => { setCatName(data); }} className={`d-flex flex-column align-items-center border-bottom py-4 px-2 cursor-pointer ${(catName == data) ? 'theme1' : ''}`} key={index}>
                                        <span className='fs-1'>{CategoryData[data]}</span>
                                        <span className='title text-center' style={{ fontSize: "12px" }}>{data.replace("-", " ")}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8 col-md-9">
                        {
                            (catItems == null) ? <></> :
                                <div className={`row ${isLargeScreen ? 'g-4' : 'g-1'}`}>
                                    {
                                        catItems.map((data, index) => (
                                            <Product
                                                key={index}
                                                id={data.id}
                                                thumbnail={data.thumbnail}
                                                title={data.title}
                                                description={data.description}
                                                price={data.price}
                                                rating={data.rating}
                                                category={data.category}
                                            />
                                        ))
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
        </CategoryWrapper>
    );
}

export default Categories2