import React from 'react';
import styled from 'styled-components';
import { IoChevronForwardOutline } from "react-icons/io5";

const Wrapper = styled.section`
    width: 100%;
    height: auto;
`;

const BoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;

    .box{
        width: inherit;
        height: inherit;

        &:hover > img {
            transform: scale(1.5);
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

    .box-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
    }
`;

const Categories = () => {
    return (
        <Wrapper className='my-5'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <BoxOverlay image="/images/products/phone.jpg" name="Smartphones" price="7999" />
                    </div>
                    <div className="col-md-8">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <BoxOverlay image="/images/products/tablets.avif" name="Tablets" price="11999" />
                            </div>
                            <div className="col-md-6">
                                <BoxOverlay image="/images/products/laptop.avif" name="Laptops" price="24999" />
                            </div>
                            <div className="col-md-6">
                                <BoxOverlay image="/images/products/headphone.avif" name="Headphones" price="999" />
                            </div>
                            <div className="col-md-6">
                                <BoxOverlay image="/images/products/smartv.avif" name="Smart Tv" price="18990" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const BoxOverlay = (props) => {
    return (
        <BoxWrapper>
            <div className='box'>
                <img src={`${props.image}`} alt={`${props.name}`} />
            </div>
            <div className='box-overlay p-4'>
                <h5 className='font-900 uppercase d-flex align-items-center'>{props.name} <IoChevronForwardOutline className='ms-1' /></h5>
                <p>from &#x20B9; {props.price}/-</p>
            </div>
        </BoxWrapper>
    );
}

export default Categories;