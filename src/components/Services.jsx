import React from 'react';
import styled from 'styled-components';
import { TbTruckDelivery, TbShieldCheckeredFilled } from "react-icons/tb";
import { FaHandHoldingWater } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Wrapper = styled.section`
    .box{
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.light};
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon{
            background-color: #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Services = () => {
    return (
        <Wrapper className='py-5 fff-bg'>
            <div className="container">
                {/* <h5 className='font-900 uppercase mb-4'>Services</h5> */}
                <div className="row g-4">
                    <div className="col-lg-4">
                        <Box name="Superfast and free delivery" icon={<TbTruckDelivery/>}/>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-4">
                            <div className="col-12">
                                <Box name="Non-Contact Shipping" icon={<TbShieldCheckeredFilled/>}/>
                            </div>
                            <div className="col-12">
                                <Box name="Money back guaranteed" icon={<FaHandHoldingWater/>}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Box name="Super secure payment system" icon={<RiSecurePaymentFill/>}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Box = (props) => {
    return (
        <div className='box rounded-4 p-2'>
            <span className='theme1 icon mb-2'>
                {props.icon}
            </span>
            <h6 className='title'>{props.name}</h6>
        </div>
    );
}

export default Services;