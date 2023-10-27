import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FullButtonSolid, RatingButton } from '../components/Buttons';
import { DiscountDetails, ProductColors } from '../components/Data';
import TrendingItems from '../components/TrendingItems';
import ISkeleton from '../components/ISkeleton';
import { PSkeleton } from '../components/ISkeleton';



const Wrapper = styled.section`
    width: 100%;
    height: auto;
`;

const ProductImagesContainer = styled.div`
    width:100%;
    height: auto;
    .small-img{
        width: 3rem;
        height: 3rem;
        margin: 10px 0;
        
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .preview-img{
        width: 100%;
        height: 23rem;        
        img{
            width: 100%;
            height: inherit;
        }
    }

    .nav-img-mobile{
            display: none;
    }
    @media(max-width: ${({ theme }) => theme.screen.lg}){
        .nav-img-mobile{
            display: block;
        }
        .nav-img{
            display: none;
        }
    }

    @media(max-width: ${({ theme }) => theme.screen.md}){
        .preview-img{
            height: 15rem;
        }
    }
`;

const ProductDetailsContainer = styled.div`
    .pdc-border-bottom{
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    }

    .lt{text-decoration: line-through;}

    ul{
        li{
            font-size:14px;
            list-style-type:disc;
            color: ${({ theme }) => theme.colors.theme1};
            span{

                color: black;
            }
            a{
                color: ${({ theme }) => theme.colors.theme1};
            }
        }
    }

    .color-box-wrapper{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.colors.grey};
        display: flex;
        align-items: center;
        justify-content: center;

       .color-box{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: relative;
            cursor: pointer;
       }
    }

    .bg-1{background-color: #d1d8e0;}
    .bg-2{background-color: #2d3436;}
    .bg-3{background-color: #0c2461;}

    .active-color{border: 2px solid ${({ theme }) => theme.colors.theme1} !important;}

    .quantity-box{
        border: 1px solid ${({ theme }) => theme.colors.grey};
        width: 100px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;

        input{
            border: none;
            outline: none;
            width:20px;
            background: none;
            text-align:center;
        }
    }

    p{font-size:14px;}
`;

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();

    const getProduct = async (url) => {
        try {
            const res = await axios.get(url);
            setProduct(res.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        //==getting query param===
        // Parse the query parameters from the location's search property
        const searchParams = new URLSearchParams(location.search);
        let productId = 0;
        if (searchParams.has("id")) {
            // Access individual query parameters
            productId = parseInt(searchParams.get('id'));
            let API = `https://dummyjson.com/products/${productId}`;
            getProduct(API);
        }
        //==getting query param===
    }, [location.search]);

    // Conditional rendering: Display content only when 'product' has a value
    if (Object.keys(product).length === 0) {
        return (
            <>
                <div className="mt-4"></div>
                <PSkeleton />
                <div className="mt-5"></div>
                <ISkeleton ItemCount={6} />
            </>
        );
    }
    else {
        return (
            <Wrapper className='my-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className='product-img-section'>
                                <ProductImages
                                    images={product.images}
                                />
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6">
                            <div className=''>
                                <ProductDetails product={product} />
                            </div>
                        </div>
                    </div>
                </div>
                <TrendingItems />
            </Wrapper>
        );
    }
}

const ProductImages = (props) => {
    const [previewImage, setPreviewImage] = useState(props.images[0]);

    const handleSmallImgClick = (index, images) => {
        let this_img_class = `small-img-${index}`;
        const elements = document.getElementsByClassName(this_img_class);
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("f-border-2");
        }

        for (let x in images) {
            if (x != index) {
                let img_class = `small-img-${x}`;
                const ele = document.getElementsByClassName(img_class);
                for (let i = 0; i < ele.length; i++) {
                    ele[i].classList.remove("f-border-2");
                }
            }

        }
    }

    const handleSmallImgHover = (data, index, images) => {
        setPreviewImage(data);
        handleSmallImgClick(index, images);
    }

    return (
        <ProductImagesContainer className='row g-0'>
            <div className='nav-img row g-0'>
                <div className="col-3">
                    {
                        props.images.map((data, index) => (
                            <div className={`col-12 small-img small-img-${index}`} key={index}
                                onMouseOver={() => { return (handleSmallImgHover(data, index, props.images)) }}
                                onClick={() => { return (handleSmallImgClick(index, props.images)) }}
                            >
                                <img src={data} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="col-9">
                    <div className='preview-img'>
                        <img src={previewImage} alt="" />
                    </div>
                </div>
            </div>

            <div className='nav-img-mobile row g-0'>
                <div className="col-12">
                    <div className='preview-img'>
                        <img src={previewImage} alt="" />
                    </div>
                </div>
                <div className="col-12">
                    <div className='d-flex justify-content-center flex-wrap w-100'>
                        {
                            props.images.map((data, index) => (
                                <div className={`col-12 small-img mx-2 small-img-${index}`} key={index}
                                    onMouseOver={() => { return (setPreviewImage(data)) }}
                                    onClick={() => { return (handleSmallImgClick(index, props.images)) }}
                                >
                                    <img src={data} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='mt-3'></div>
            <div className='col-6'>
                <div className='me-2'>
                    <FullButtonSolid
                        name="Add to cart"
                        icon={<LuShoppingCart />}
                    />
                </div>
            </div>

            <div className='col-6'>
                <div className='ms-2'>
                    <FullButtonSolid
                        name="wishlist"
                        icon={<LuHeart />}
                    />
                </div>
            </div>
        </ProductImagesContainer>
    );
}

const ProductDetails = ({ product }) => {
    const min = 10;
    const max = 1000;

    const [activeColor, setActiveColor] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(product.price * 80);

    const handleQuantity = (mode, stock) => {
        const min = 1;
        const max = parseInt(stock);

        if (mode == "inc") {
            if (quantity < max) {
                setQuantity(quantity + 1);
                setSubtotal((product.price * 80) * (quantity + 1));
            }
        }
        if (mode == "dec") {
            if (quantity > min) {
                setQuantity(quantity - 1);
                setSubtotal((product.price * 80) * (quantity - 1));
            }
        }
    }

    return (
        <ProductDetailsContainer className=''>
            <div className='pdc-border-bottom py-3'>
                <h4 className='font-700'>{product.title}</h4>
                <p className='text-muted'>{product.description}</p>
                <RatingButton rating={product.rating} rateBy={Math.floor(Math.random() * (max - min + 1)) + min} />
                <div className='mt-4'>
                    <h3>
                        <span className='font-700'>&#x20B9;{product.price * 80}</span>
                        <span className='text-muted font-400 fs-5 mx-3 lt'>MRP &#x20B9;{product.price * 80 + ((product.price * 80) * 0.17)}</span>
                        <span className='theme1 fs-5'>({product.discountPercentage}% OFF)</span>
                    </h3>
                </div>
            </div>
            <div className='mt-4 pdc-border-bottom'>
                <div>
                    <ul className='ps-3'>
                        {
                            Object.keys(DiscountDetails).map((data, index) => (
                                <li className='my-3' key={index}>
                                    <span>{DiscountDetails[data]} &nbsp;</span>
                                    <a href="#">learn more</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='mt-4'>
                <h5>Color</h5>
                <div className='d-flex flex-wrap mt-3'>
                    <div className={`color-box-wrapper mx-3 ${activeColor == 1 ? 'active-color' : ''}`} onClick={() => { setActiveColor(1) }}>
                        <div className="color-box bg-1"></div>
                    </div>
                    <div className={`color-box-wrapper mx-3 ${activeColor == 2 ? 'active-color' : ''}`} onClick={() => { setActiveColor(2) }}>
                        <div className="color-box bg-2"></div>
                    </div>
                    <div className={`color-box-wrapper mx-3 ${activeColor == 3 ? 'active-color' : ''}`} onClick={() => { setActiveColor(3) }}>
                        <div className="color-box bg-3"></div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h5>Quantity</h5>
                <div className='quantity-box mt-3'>
                    <a onClick={() => { handleQuantity("dec", product.stock) }}><HiMinus /></a>
                    <input type="text" value={quantity} />
                    <a onClick={() => { handleQuantity("inc", product.stock) }}><HiPlus /></a>
                </div>
                <div className='mt-3'>
                    <p>Subtotal: &#x20B9;{subtotal}</p>
                </div>
            </div>
            <div>
                <FullButtonSolid
                    name="Add to cart"
                    icon={<LuShoppingCart />}
                />
            </div>
        </ProductDetailsContainer>
    );
}

export default SingleProduct;