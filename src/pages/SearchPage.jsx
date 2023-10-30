import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoCameraOutline, IoImageOutline, IoSearchOutline, IoMicOutline } from "react-icons/io5";
import { Button1 } from '../components/Buttons';
import { MostSearchedItemData } from '../components/Data';
import { MdDeblur } from "react-icons/md";
import { FaCubes } from "react-icons/fa6";
import { SlSocialTumblr } from "react-icons/sl";
import { FcSignature, FcVoicemail } from "react-icons/fc";
import ExtraProductBox from '../components/ExtraProductBox';
import axios from "axios";
import Product from '../components/Product';

let API = "https://dummyjson.com/products/search";

const SearchPageWrapper = styled.section`
    width: 100%;
    height: auto;

    .photo-box{
        width: 100%;
        height: 40px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        i{
            font-size: 1.3rem;
            padding-bottom: 4px;
        }
        span{
            font-size: 14px;
            margin-left: 8px;
        }
    }

    .box-wrap{
        width: 100%;
        height: 14rem;
        position: relative;

        .box{
            width: 100%;
            height: 14rem;

            img{
                width: 100%;
                height: 14rem;
            }
        }

        .box-overlay{
            width: 100%;
            height: 14rem;
            position: absolute;
            top: 0;

            .item-name{
                width: 100%;
                height: auto;
                color: #fff;
                background-color: rgba(0,0,0,0.7);
                position: absolute;
                bottom: 0;
                text-align: center;
            }
        }

    }

    @media(max-width: ${({ theme }) => theme.screen.sm}){
        .box-wrap{
            height: 7rem;
            .box{
                height: 7rem;
                img{
                    height: 7rem;
                }
            }
            .box-overlay{
                height: 7rem;
                .item-name{
                    font-size: 12px;
                }
            }
        }
    }

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

const SearchBarContainer = styled.div`
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 1;

    .search-box{
        width: 100%;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.colors.lightBorder};
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding: 4px 8px;
        box-shadow: ${({ theme }) => theme.other.boxShadow};

        input{
          width: 90%;
          height: 38px;
          padding: 4px;
          border: none;
          outline:none;
          border-radius: 20px;
          font-weight: 300;
        
          &::placeholder {
            color: ${({ theme }) => theme.colors.grey};
            opacity: 1; /* Firefox */
          }
        }
    
        svg{
          color: ${({ theme }) => theme.colors.grey};
          font-size:1.2rem;
          margin: 0 5px;
        }
    }
`;

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Use useEffect to make the axios request when searchTerm changes
        const fetchData = async () => {
            try {
                const res = await axios.get(API + `?skip=0&limit=10&q=${searchTerm}`);
                setProducts(res.data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        // Debounce the fetchData function to reduce the number of requests
        const debounce = setTimeout(fetchData, 500); // Adjust the delay as needed

        // Clean up the timeout to prevent multiple requests
        return () => clearTimeout(debounce);
    }, [searchTerm]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    }

    return (
        <SearchPageWrapper className='py-3'>
            <SearchBarContainer className='py-3'>
                <div className="container">
                    <div className='search-box'>
                        <IoSearchOutline />
                        <input
                            onChange={handleInputChange}
                            value={searchTerm}
                            className='ms-2'
                            type="text"
                            placeholder='Search for brands and products'
                        />
                        <IoCameraOutline />
                        <IoMicOutline />
                    </div>
                </div>
            </SearchBarContainer>
            {
                (searchTerm == "" || products.length == 0 )?<ExtraSearchSection />:< SearchSection products={products}/>                
            }
        </SearchPageWrapper>
    );
}

const SearchSection = ({ products }) => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 576);
    useEffect(() => {
        // Add a window resize event listener to update the screen size
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 576);
        };

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="container">
            <div className={`row ${isLargeScreen ? 'g-4' : 'g-1'}`}>
                {
                    products.map((data, index) => (
                        <Product
                            key={index}
                            id={data.id}
                            thumbnail={data.thumbnail}
                            title={data.title}
                            description={data.description}
                            price={data.price}
                            rating={data.rating}
                            category={data.category}
                        />
                    ))
                }
            </div>
        </div>
    );
}

const ExtraSearchSection = () => {
    return (
        <>
            <PhotoSearch />
            <MostSearcheditem />
            <MostSearchedBrands />
            <div className="container mb-4">
                <h6 className='font-600 uppercase'>Continue Shoping</h6>
            </div>
            <ExtraProductBox />
        </>
    );
}

const PhotoSearch = () => {
    return (
        <div className="container">
            <div className='row g-2 my-4'>
                <h6 className='font-600 uppercase'>Photo Search</h6>
                <div className="col-6">
                    <a className='photo-box'>
                        <i><IoCameraOutline /></i>
                        <span>Click a photo</span>
                    </a>
                </div>
                <div className="col-6">
                    <a className='photo-box'>
                        <i><IoImageOutline /></i>
                        <span>Select a photo</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

const MostSearcheditem = () => {
    return (
        <div className="container my-5">
            <div className='d-flex justify-content-between align-items-center flex-wrap'>
                <h6 className='font-600 uppercase'>Most Searched Item</h6>
                <Button1 name="View All" />
            </div>
            <div className="row mt-4 g-1">
                {
                    Object.keys(MostSearchedItemData).map((data, index) => (
                        <div key={index} className='col-3'>
                            <div className='box-wrap'>
                                <div className="box">
                                    <img src={MostSearchedItemData[data]} className='w-100 h-100' alt="" />
                                </div>
                                <div className="box-overlay">
                                    <div className='item-name py-2'>
                                        <span className='title'>{data}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const MostSearchedBrands = () => {
    return (
        <div className="container my-5">
            <h6 className='font-600 uppercase'>Most Searched Brands</h6>
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
    );
}

const Logo = (props) => {
    return (
        <div className={`d-flex justify-content-center align-items-center ${props.boxStyle}`}>
            <span className={`${props.iconStyle}`}>{props.icon}</span>
            <span className={`${props.textStyle}`}>{props.name}</span>
        </div>
    );
}

export default SearchPage;