import React from 'react';
import styled from 'styled-components';
import { Button1 } from './Buttons';
import OverlapImage from './OverlapImage';

const Wrapper = styled.div`
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Hero = () => {
    return (
        <div className="container">
            <Wrapper>
                <div className="row">
                    <div className="col-md-6">
                        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                            <div>
                                <span className='fs-5 font-600 theme1a'>Welcome to</span>
                                <h1 className='mb-4'><span className='audio'>iPsit</span> Store</h1>
                                <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea numquam amet, saepe porro aliquid voluptatibus eius esse reiciendis ullam ducimus.</p>
                                <Button1 name="Shop Now" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <OverlapImage/>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Hero