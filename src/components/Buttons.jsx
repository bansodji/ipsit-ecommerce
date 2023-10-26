import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";

const Button = styled.button`
    width: auto;
    height: 40px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.theme1};
    color: #fff;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
`;

const FullButtonOutlineWrapper = styled.button`
    width: 100% !important;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.theme1};
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.theme1};
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.other.transitionFast};

    &:hover{
      background-color: ${({ theme }) => theme.colors.theme1};
      color: #fff;
    }

    span{
      font-size: 1.1rem;
      margin-right: 5px;
    }
`;

const FullButtonSolidWrapper = styled.button`
    width: 100% !important;
    height: 40px;
    border: none;
    background: ${({ theme }) => theme.colors.theme1};
    color: #fff;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    transition: ${({ theme }) => theme.other.transitionFast};

    span{
      font-size: 1.1rem;
      margin-right: 5px;
    }
`;

const RatingButtonWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightBorder};
  display: inline;
  padding: 8px 15px;
  font-size: 14px;

  .icon{
    color: ${({theme})=>theme.colors.gold};
    margin-left: 2px;
  }

  .rate-by{
    /* color: ${({theme})=>theme.colors.grey}; */
  }

  .line{
    border: 1px solid ${({theme})=>theme.colors.lightBorder};
    margin: 0 10px;
  }


`;

const Button1 = (props) => {
  return (
    <Button>{props.name}</Button>
  );
}

const FullButtonOutline = (props) => {
  return (
    <FullButtonOutlineWrapper className='full-btn outline'><span>{props.icon}</span> {props.name}</FullButtonOutlineWrapper>
  );
}

const FullButtonSolid = (props) => {
  return (
    <FullButtonSolidWrapper className='full-btn outline'><span>{props.icon}</span> {props.name}</FullButtonSolidWrapper>
  );
}

const RatingButton = (props) => {
  return (
    <RatingButtonWrapper>
      <span className='rating font-600 space-2'>
        {props.rating}
        <span className='icon'><AiFillStar /></span>
      </span>
      <span className="line"></span>
      <span className='rate-by'>{props.rateBy} Rating</span>
    </RatingButtonWrapper>
  );
}

export { Button1, FullButtonOutline, FullButtonSolid, RatingButton };