import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { useAllProductContext } from '../context/allproductContext';
import ISkeleton from './ISkeleton';

const Wrapper = styled.section`

`;

const TrendingItems = () => {
    const { isLoading, odd } = useAllProductContext();

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 576);

    useEffect(() => {
        // Add a window resize event listener to update the screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 576);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isLoading) {
        return (
            <div className='my-3'> 
                <ISkeleton ItemCount={6} />
            </div>
        );
    }
    else {
        return (
            <Wrapper className='mb-5 mt-4'>
                <div className="container">
                <h5 className='font-900 uppercase mb-4'>Trending Products</h5>
                    <div className={`row ${isLargeScreen ? 'g-4' : 'g-1'}`}>
                        {
                            odd.map((data, index) => (
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
                </div>
            </Wrapper>
        );
    }
}

export default TrendingItems;