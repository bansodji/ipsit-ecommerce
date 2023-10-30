import {
    GiLaptop, GiBottleVapors, GiHeartBottle, GiSofa, GiAmpleDress, GiSonicShoes, GiRunningShoe,
    GiDropEarrings, GiCeilingLight
} from "react-icons/gi";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoFastFood } from "react-icons/io5";
import { Si4Chan } from "react-icons/si";
import { FaShirt } from "react-icons/fa6";
import { PiShirtFolded } from "react-icons/pi";
import { CgAppleWatch } from "react-icons/cg";
import { FiWatch } from "react-icons/fi";
import { BsHandbagFill, BsSunglasses } from "react-icons/bs";

export const ProductColors = {
    "midnight blue": "#0c2461",
    "charcoal black": "#2d3436",
    "arctic white": "#d1d8e0"
};

export const DiscountDetails = [
    "Flat ₹3,000 Instant Discount with HDFC & ICICI Credit Cards & Credit EMI",
    "Flat ₹3,000 Instant Discount with Bank of Baroda Credit Card & EMI transactions",
    "Flat ₹3,000 Instant Discount* with SBI Credit Card EMI transactions",
    "Up to 3,000 Instant Discount* with Select Bank Cards & EMI",
    "10% up to ₹2,000 cashback with paytm wallet",
    "No Cost EMI up to 6 months"
];

export const MostSearchedItemData = {
    "iphone": "/images/search/iphone.jpg",
    "laptop": "/images/search/laptop.jpg",
    "watch": "/images/search/watch.jpg",
    "shoes": "/images/search/shoes.jpg",
    "sweater": "/images/search/sweater.jpg",
    "hanger": "/images/search/hanger.jpg",
    "perfume": "/images/search/perfume.webp",
    "sunglasses": "/images/search/sunglasses.jpg",
};

export const CategoryData = {
    "smartphones": <SlScreenSmartphone />,
    "laptops": <GiLaptop />,
    "fragrances": <GiBottleVapors />,
    "skincare": <GiHeartBottle />,
    "groceries": <IoFastFood />,
    "home-decoration": <Si4Chan />,
    "furniture": <GiSofa />,
    "tops": <FaShirt />,
    "womens-dresses": <GiAmpleDress />,
    "womens-shoes": <GiSonicShoes />,
    "mens-shirts": <PiShirtFolded />,
    "mens-shoes": <GiRunningShoe />,
    "mens-watches": <FiWatch />,
    "womens-watches": <CgAppleWatch />,
    "womens-bags": <BsHandbagFill />,
    "womens-jewellery": <GiDropEarrings />,
    "sunglasses": <BsSunglasses />,
    "lighting": <GiCeilingLight />
};