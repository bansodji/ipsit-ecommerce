import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonOutline, IoHeartOutline, IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Badge from './Badge';
import { NavData, NavIcons, NavIconsSolid } from './NavData';
import BottomNavigation from './BottomNavigation';
import UserSelectBox from './UserSelectBox';
import { useAuth0 } from "@auth0/auth0-react";

const AppBar = styled.header`
 width: 100%;
 height: 100%;
 box-shadow: ${({ theme }) => theme.other.boxShadow};
 z-index: 999999;
 background-color: #fff;

 nav{
  ul{
    text-transform: uppercase;
    font-weight: 600;
    li{
      font-size: 0.90rem;
      padding: 0.4rem 1.2rem;
      .icon{
              font-size: 1.5rem;
      }
      span{
            font-size: 12px;
      }
    }
  }

  .mobile-user-icon{
      display: none;
    }
    .big-user-icon{
      display: block;
    }
  @media(max-width: ${({ theme }) => theme.screen.lg}){
    .mobile-user-icon{
      display: block;
    }
    .big-user-icon{
      display: none;
    }
  }

 
 }

 .mobile-nav{
    display: flex;
  }
 @media (max-width: ${({ theme }) => theme.screen.lg} ){
  .mobile-nav{
    display: none;
  }
  nav{
    padding: 0.4rem 0;
  }
 }

 .active{
        border-bottom: 2px solid ${({ theme }) => theme.colors.theme1};

        span,.icon{
            color: ${({ theme }) => theme.colors.theme1};
        }
  }

`;

const Button = styled.button`
    width: auto;
    height: 35px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.theme1};
    color: #fff;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
`;

const Header = () => {
  const location = useLocation();
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <AppBar>
        <div className="container-fluid">
          <nav className='d-flex justify-content-between align-items-center w-100 h-100'>
            <a href="/" className="h-100">
              <span className='fs-2 audio theme1'>iPsit</span>
            </a>
            <ul className='my-auto mobile-nav'>
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
            <ul className='d-flex h-100'>
              <li className='me-2 pe-1'>
                <Link to="/search" className='fs-4'>
                  <IoSearchOutline />
                </Link>
              </li>
              <li className='mx-2 px-1'>
                <Badge icon={<IoHeartOutline />} count={0} />
              </li>
              <li className='mx-2 px-1'>
                <Badge icon={<IoCartOutline />} count={0} />
              </li>
              {
                (isAuthenticated) ?
                  <>
                    <li className='ms-2 me-0 pe-0 ps-1 mobile-user-icon'>
                      <Link to="/user" className='fs-4'>
                        <IoPersonOutline />
                      </Link>
                    </li>
                    <li className='ms-2 me-0 pe-0 ps-1 big-user-icon'>
                      <UserSelectBox />
                    </li>
                    {/* <li className='ms-2 me-0 pe-0 ps-1'>
                      <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </Button>
                    </li> */}
                  </>
                  : <li className='ms-2 me-0 pe-0 ps-1'>
                    <Button onClick={() => loginWithRedirect()}>Log In</Button>
                  </li>
              }


            </ul>
          </nav>
        </div>
      </AppBar>
      <BottomNavigation />
    </>
  )
}

export default Header;