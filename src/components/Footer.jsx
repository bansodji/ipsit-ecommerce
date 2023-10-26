import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import { Button1 } from './Buttons';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: #ffffffbc;
`;

const Footer = () => {
    return (
        <Wrapper className='py-5'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <div>
                            <h2 className='audio fff mb-4'>iPsit</h2>
                            <p className='font-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, explicabo dolor. Voluptatem dolorum tempora dolorem, veritatis rem distinctio suscipit quod!</p>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-lg-2">
                        <p className='fff'>Subscribe to get important updates</p>
                        <div className='mb-4'>
                            <InputBox type="text" placeholder="Your E-mail" />
                        </div>
                        <Button1 name="Subscribe" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-lg-2">
                        <p className='fff'>Follow Us</p>
                        <div className='social-links-wrapper'>
                            <a href="#" className="social-link me-3">
                                <FaFacebookF/>
                            </a>
                            <a href="#" className="social-link me-3">
                                <FaTwitter/>
                            </a>
                            <a href="#" className="social-link me-3">
                                <FaInstagramSquare/>
                            </a>                            
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-lg-2">
                        <p className='fff uppercase' style={{fontSize:'14px'}}>FAQ</p>                    
                        <p className='fff uppercase' style={{fontSize:'14px'}}>About us</p>                    
                        <p className='fff uppercase' style={{fontSize:'14px'}}>Terms of use</p>                    
                        <p className='fff uppercase' style={{fontSize:'14px'}}>Privacy policy</p>                    
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Footer;