import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { FullButtonOutline } from './Buttons';
import TruncateText from './TruncateText';

const CardWrapper = styled.div`    
    width: 100%;
    height: auto;
    border: none;
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
   
    .img-section{
        height: 18rem;
        overflow: hidden;
        /* border-bottom: 1px solid gray; */
        img{
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensure the image fits within the fixed height container */
            transition: ${({ theme }) => theme.other.transitionFast};
            
            &:hover{
                transform: scale(1.2);
            }
        }
    }
    .body-section{
        font-size: 13px;
    }

`;

const CardSmWrapper = styled.div`    
    width: 100%;
    height: auto;
    border: none;
    border-radius: 4px;
    overflow: hidden;
    .img-section{
        height: 4rem;
        overflow: hidden;
        img {
            width: 100%;
            height: 7rem;
            object-fit: cover; /* Ensure the image fits within the fixed height container */
        }
    }
    .body-section{
        font-size: 13px;
        background-color:#fff;
        /* background-color:#f2f2f2; */
    }

`;

const Product2 = (props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    useEffect(() => {
        // Add a window resize event listener to update the screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="col-lg-4 col-6">
            {isLargeScreen
                ? <Card
                    id={props.id}
                    thumbnail={props.thumbnail}
                    title={props.title}
                    description={props.description}
                    price={props.price}
                    rating={props.rating}
                    category={props.category}
                />
                : <CardSm
                    id={props.id}
                    thumbnail={props.thumbnail}
                    title={props.title}
                    description={props.description}
                    price={props.price}
                    rating={props.rating}
                    category={props.category}
                />}
        </div>
    );
}

const Card = (props) => {
    return (
        <CardWrapper className='card'>
            <a href={`product?id=${props.id}`} className="img-section">
                <img src={props.thumbnail} alt="" />
            </a>
            <div className="body-section p-3">
                <div className='d-flex  justify-content-between mb-2'>
                    <a href={`product?id=${props.id}`} className='fs-6 font-500'>
                        <TruncateText text={props.title} maxLength={15} />
                    </a>
                    <IoHeartOutline className='fs-5' />
                </div>
                <p className='mb-3'>
                    <a href={`product?id=${props.id}`}>
                        <TruncateText text={props.description} maxLength={50} />
                    </a>
                </p>
                <h6 className='mb-4'>&#x20B9; {props.price * 80}/-</h6>
                <FullButtonOutline name="Add to cart" icon={<IoCartOutline />} />
            </div>
        </CardWrapper>
    );
}

const CardSm = (props) => {
    return (
        <CardSmWrapper>
            <a href={`product?id=${props.id}`} className="img-section">
                <img src={props.thumbnail} alt="" />
            </a>
            <div className="body-section p-2">
                <a href={`product?id=${props.id}`} className='font-500'>
                    <TruncateText text={props.title} maxLength={18} />
                </a>
                <p className='my-0 py-0'>
                    <a href={`product?id=${props.id}`}>
                        <TruncateText text={props.description} maxLength={50} />
                    </a>
                </p>
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 className='pt-3'>&#x20B9; {props.price * 80}/-</h6>
                    <div className=''>
                        <a className='fs-5 me-2'><IoHeartOutline /></a>
                        <a className='fs-5'><IoCartOutline /></a>
                    </div>
                </div>
            </div>
        </CardSmWrapper>
    );
}

export default Product2
