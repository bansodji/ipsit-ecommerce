import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { useProductContext } from '../context/productcontext';
import ISkeleton from './ISkeleton';

const Wrapper = styled.section`

`;

const ExtraProductBox = () => {
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
    <ISkeleton ItemCount={6} />
  }
  else {
    return (
      <Wrapper>
        <div className="container">
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

export default ExtraProductBox;