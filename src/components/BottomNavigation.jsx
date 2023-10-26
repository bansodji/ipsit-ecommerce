import React, { useState  } from 'react';
import { NavData, NavIcons, NavIconsSolid } from './NavData';
import styled from 'styled-components';
import { Link,useLocation  } from 'react-router-dom';

const Nav = styled.nav`
    width: 100%;
    height: auto;
    z-index: 999999;
    display: none;
    position:fixed;
    bottom: 0;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    background-color: #fff;

    ul{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        li{
            padding: 0.5rem;
            width: 100%;
            .icon{
                font-size: 1.3rem;
            }

            span{
                font-size: 10px;
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.screen.lg} ){
        display: block;
    }

    .active{
        border-top: 2px solid ${({ theme }) => theme.colors.theme1};

        span,.icon{
            color: ${({theme})=>theme.colors.theme1};
        }
    }
`;

const BottomNavigation = () => {
    const location = useLocation();

    return (
        <Nav>
            <ul className=''>
                {
                    NavData.map((data, index) => (
                        <li key={index} className={location.pathname === `/${data}` ? 'active' : ''}>
                            <Link
                                to={`/${data}`}
                                className="icon d-flex flex-column align-items-center"
                                
                            >
                                {(location.pathname === `/${data}`) ? NavIconsSolid[data] : NavIcons[data]}
                                <span className='title'>
                                    {data}
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </Nav>
    )
};

export default BottomNavigation;