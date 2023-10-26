import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    img{
        position: absolute;
        top: 20%;
        left: 25%;
        width: 65%;
        height: 100%;
        z-index: 1;
    }

    .back-box{
        position: absolute;
        top: 0;
        right: 0;
        width: 65%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.theme1a};
    }

    @media (max-width: ${({ theme }) => theme.screen.lg}){
        img{
            position: relative;
            height: auto;
            z-index: 1;
        }
    }
`;

const OverlapImage = () => {
    return (
        <ImgWrapper>
            <img src="/images/hero.jpg" className='img-fluid' alt="" />
            <div className='back-box'></div>
        </ImgWrapper>
    )
}

export default OverlapImage;