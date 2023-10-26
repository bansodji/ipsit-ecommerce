import React from 'react';
import styled from 'styled-components';

const BadgeIcon = styled.div`
    position: relative;

    span{
        position: absolute;
        top: 2px;
        right: -7px;
        background-color: ${({theme})=>theme.colors.theme1};
        width: 18px;
        height: 18px;
        color: #fff;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

const Badge = ({ icon, count }) => {
    return (
        <BadgeIcon>
            <span>{count}</span>
            <a className='fs-4'>
                {icon}
            </a>
        </BadgeIcon>
    )
}

export default Badge