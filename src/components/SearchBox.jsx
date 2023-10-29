import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline,IoCameraOutline,IoMicOutline } from "react-icons/io5";


const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 4px 10px;
  box-shadow: ${({theme})=>theme.other.boxShadow};

  input{
    width: 100%;
    height: 38px;
    border: none;
    outline:none;
    border-radius: 20px;
    font-weight: 300;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey};
      opacity: 1; /* Firefox */
    }
  }

  svg{
    color: ${({ theme }) => theme.colors.grey};
    font-size:1.2rem;
    margin: 0 5px;
  }

`;

const SearchBox = () => {
  return (
    <SearchContainer>
      <IoSearchOutline />
      <input className='ms-2' type="text" placeholder='Search for brands and products' />
        <IoCameraOutline/>
        <IoMicOutline/>
    </SearchContainer>
  )
}

export default SearchBox