import React from 'react';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #f8f8f8;
`;

const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  color: #ff5722;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <div className="container">
                <ErrorTitle className='text-center'>404 - Not Found</ErrorTitle>
                <ErrorMessage className='text-center'>Sorry, the page you're looking for does not exist.</ErrorMessage>
            </div>
        </ErrorPageContainer>
    );
};

export default ErrorPage;
