import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
    width: 100%;
    height: 40px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 4px 10px;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
`;

const InputBox = (props) => {
  return (
    <InputWrapper type={`${props.type}`} placeholder={props.placeholder} />
  )
}

export default InputBox