import React from 'react';
import styled from 'styled-components';
import { MdDeblur } from "react-icons/md";
import { FaCubes } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { FcSignature,FcVoicemail } from "react-icons/fc";

const Wrapper = styled.section`
    .brand-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        .brand-logo{
            margin: 0 1.5rem;
        }
    }
`;

const TrustedBrands = () => {
    return (
        <Wrapper className='my-5'>
            <div className="container">
                <h6 className='text-center mb-4'>Trusted by 1000+ brands</h6>
                <div className="brand-wrapper">                    
                    <div className="brand-logo">
                        <Logo
                            name="Abstract"
                            icon={<FaCubes />}
                            textStyle="fs-3 font-900 pt-2 audio"
                            iconStyle="fs-1 me-2"
                        />
                    </div>
                    <div className="brand-logo">
                        <Logo
                            name=""
                            icon={<FcSignature />}
                            textStyle="fs-3 font-900"
                            iconStyle="display-3"
                        />
                    </div>
                    <div className="brand-logo">
                        <Logo
                            name=""
                            icon={<FcVoicemail />}
                            textStyle="fs-3 font-900"
                            iconStyle="display-3"
                        />
                    </div>
                    <div className="brand-logo">
                        <Logo
                            name="bubble"
                            icon={<MdDeblur />}
                            textStyle="fs-3 font-900 pt-2 theme1a"
                            iconStyle="fs-1 theme1a"
                            
                        />
                    </div>
                    <div className="brand-logo">
                        <Logo
                            name="umbler"
                            icon={<SlSocialTumblr />}
                            textStyle="fs-3 font-900 theme1"
                            iconStyle="fs-3"
                            boxStyle="mt-2"
                        />
                    </div>                    
                </div>
            </div>
        </Wrapper>
    )
}

const Logo = (props) => {
    return (
        <div className={`d-flex justify-content-center align-items-center ${props.boxStyle}`}>
            <span className={`${props.iconStyle}`}>{props.icon}</span>
            <span className={`${props.textStyle}`}>{props.name}</span>
        </div>
    );
}

export default TrustedBrands;