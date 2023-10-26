import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { useProductContext } from '../context/productcontext';

const Wrapper = styled.section`

`;

const FeaturedProducts = () => {
  const { isLoading, even } = useProductContext();

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
    <h1>Loading...</h1>
  }
  else {
    return (
      <Wrapper className='my-5'>
        <div className="container">
          <h5 className='font-900 uppercase mb-4'>Featured Products</h5>
          <div className={`row ${isLargeScreen ? 'g-4' : 'g-1'}`}>
            {
              even.map((data, index) => (
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

export default FeaturedProducts;