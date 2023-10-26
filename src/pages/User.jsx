import React from 'react';
import styled from 'styled-components';
import { UserCard1 } from '../components/UserCard';
import { UserNavList1Data, UserNavList2Data, UserNavList3Data } from '../components/NavData';
import { Link } from 'react-router-dom';
import { IoChevronForwardOutline } from "react-icons/io5";
import { FullButtonOutline } from '../components/Buttons';
import { LuLogOut } from "react-icons/lu";


const Wrapper = styled.section`
    width: 100%;
    /* background-color: #fff; */
    z-index: 1;
    overflow-y: auto;

`;

const UserNavList1Wrapper = styled.div`
  .list-item-box{
    border: 1px solid ${({ theme }) => theme.colors.lightBorder};
    border-radius: 6px;
  }
`;

const UserNavList2Wrapper = styled.div`
  .list-item-box{
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
  }
`;

const UserNavList3Wrapper = styled.div`
  .item{
    font-size: 12px;
  }
`;

const LogoutWrapper = styled.div`

`;


const User = () => {
  
  return (
    <Wrapper className='p-2 pt-3'>
      <div className="container">
        <UserCard1 />
        <UserNavList1 />
        <UserNavList2/>
        <UserNavList3/>
        <LogoutSection/>
      </div>

    </Wrapper>
  )
}

const UserNavList1 = () => {
  const Keys = Object.keys(UserNavList1Data);
  return (
    <UserNavList1Wrapper className='row my-4 g-2'>
      {
        Keys.map((data, index) => (
          <Link to={`/${data.replace(" ", "")}`} className='col-6' key={index}>
            <div className='list-item-box p-2 d-flex justify-content-between align-items-center'>
              <div>
                <span>{UserNavList1Data[data]}</span>
                <span className='ps-2 title'>{data}</span>
              </div>
              <div>
                <IoChevronForwardOutline />
              </div>
            </div>
          </Link>
        ))
      }
    </UserNavList1Wrapper>
  );
}

const UserNavList2 = () => {
  const Keys = Object.keys(UserNavList2Data);
  return (
    <UserNavList2Wrapper className='row my-4'>
      {
        Keys.map((data, index) => (
          <Link to={`/${data.replace(" ", "")}`} className='col-12' key={index}>
            <div className='list-item-box px-2 py-3 d-flex justify-content-between align-items-center'>
              <div>
                <span>{UserNavList2Data[data]}</span>
                <span className='ps-2 title'>{data}</span>
              </div>
              <div>
                <IoChevronForwardOutline />
              </div>
            </div>
          </Link>
        ))
      }
    </UserNavList2Wrapper>
  );
}

const UserNavList3 = () => {
  return (
    <UserNavList3Wrapper className='row my-4'>
      {
        UserNavList3Data.map((data, index) => (
          <Link to={`/${data.replace(/ /g, "")}`} className='col-12' key={index}>
            <span className='ps-2 uppercase item my-3'>{data}</span>
          </Link>
        ))
      }
    </UserNavList3Wrapper>
  );
}

const LogoutSection = () => {
  return(
    <LogoutWrapper className='my-4'>
      <FullButtonOutline icon={<LuLogOut/>} name="Log Out"/>
    </LogoutWrapper>
  );
}

export {LogoutSection};
export default User;