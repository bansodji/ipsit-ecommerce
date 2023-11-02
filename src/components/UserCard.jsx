import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

const UserCard1Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    border-radius: 15px;
    padding: 0.5rem;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.theme1c};

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
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <UserCard1Wrapper className='d-flex align-items-center'>
            {
                isAuthenticated && (
                    <>
                        <div className='image'>
                            <img src={user.picture} alt={user.name} />
                        </div>
                        <div className='details ps-3 d-flex flex-column justify-content-center'>
                            <h4 style={{ lineHeight: '15px' }}>{user.name}</h4>
                            <span style={{ lineHeight: '15px', fontSize: '14px' }}>{user.email}</span>
                        </div>
                    </>
                )
            }
        </UserCard1Wrapper >
    )
}

export { UserCard1 };