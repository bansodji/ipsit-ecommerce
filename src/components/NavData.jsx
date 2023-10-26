import { IoBagOutline, IoShirtOutline, IoPricetagsOutline } from "react-icons/io5";
import { IoBag, IoShirt, IoPricetags } from "react-icons/io5";
import { AiFillHome,AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory, MdCategory } from "react-icons/md";
import { LuCrown, LuBox, LuHeadphones, LuTicket,LuPenSquare,LuSettings, LuHeart, LuShoppingCart } from "react-icons/lu";

export const NavData = ["home", "shop", "category", "trend"];

export const NavIcons = {
    "home" : <AiOutlineHome />,
    "shop" : <IoBagOutline />,
    "category" : <MdOutlineCategory />,
    "trend" : <IoPricetagsOutline />
};

export const NavIconsSolid = {
    "home" : <AiFillHome />,
    "shop" : <IoBag />,
    "category" : <MdCategory />,
    "trend" : <IoPricetags />
};

export const UserNavList1Data = {
    "orders": <LuBox/>,
    "insider": <LuCrown/>,
    "help center": <LuHeadphones/>,
    "coupons": <LuTicket/>
}

export const UserNavList2Data = {
    "manage account": <LuPenSquare/>,
    "wishlist": <LuHeart/>,
    "cart": <LuShoppingCart/>,
    "setting": <LuSettings/>
}

export const UserNavList3Data = ["faq", "about us", "terms of use", "privacy policy"];

