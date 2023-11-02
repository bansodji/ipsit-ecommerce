import React from 'react';
import styled from 'styled-components';
import { IoPersonOutline } from "react-icons/io5";
import { UserNavList1Data, UserNavList2Data, UserNavList3Data } from '../components/NavData';
import { Link } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react";

const UserSelectBoxWrapper = styled.div`
    position: relative;
    display: inline-block;

    button {
        background: none;
        font-size: 1.3rem;
        border: none;
        cursor: pointer;
        padding-top: 2px;
    }

    .f-dropdown-content {
        display: none;
        position: absolute;
        right: 0 !important;
        z-index: 10;
        box-shadow: 0px 0px 41px -8px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        min-width: 200px;
        padding: 6px;
        background-color: #fff;

        a {
            padding: 7px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            border-radius: 16px;
            font-weight:400;

            &:hover {
                background-color: #e6e9e6;
            }
        }
    }

    /* Show the dropdown content on hover */
    &:hover .f-dropdown-content {
        display: block;
    }
`;

const UserSelectBox = () => {
    const { logout, isAuthenticated, isLoading, user } = useAuth0();
    const UserNavList1DataKeys = Object.keys(UserNavList1Data);
    const UserNavList2DataKeys = Object.keys(UserNavList2Data);
    return (
        <UserSelectBoxWrapper className="f-dropdown">
            <button>
                <IoPersonOutline />
            </button>
            <div className="f-dropdown-content title">
                {
                    isAuthenticated && (<a className='text-unset'>{user.name}</a>)
                }
                <hr />
                {
                    UserNavList1DataKeys.map((data, index) => (
                        <Link to={`/${data.replace(/ /g, "")}`} key={index}> {UserNavList1Data[data]} &nbsp;{data}</Link>
                    ))}
                <hr />
                {
                    UserNavList2DataKeys.map((data, index) => (
                        <Link to={`/${data.replace(/ /g, "")}`} key={index}> {UserNavList2Data[data]} &nbsp;{data}</Link>
                    ))}
                <hr />
                <a
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className='uppercase theme1 font-600'>
                    <LuLogOut />&nbsp; Log out
                </a>
            </div>
        </UserSelectBoxWrapper>
    );
}

export default UserSelectBox;