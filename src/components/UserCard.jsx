import React from 'react';
import styled from 'styled-components';

const UserCard1Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 15px;
    padding: 0.5rem;
    overflow: hidden;
    background-color: ${({theme})=>theme.colors.theme1c};

    .image{
        width: 4rem;
        height: 4rem;
        border-radius: inherit;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
        }
    }

`;

const UserCard1 = (props) => {
    return (
        <UserCard1Wrapper className='d-flex align-items-center'>
            <div className='image'>
                <img src="/user.jpg" alt="" />
            </div>
            <div className='details ps-3 d-flex flex-column justify-content-center'>
                <h4 style={{lineHeight:'15px'}}>Rachel Weiz</h4>
                <span style={{lineHeight:'15px', fontSize:'14px'}}>Lorem, ipsum dolor.</span>
            </div>
        </UserCard1Wrapper>
    )
}

export { UserCard1 };