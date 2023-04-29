import {MdHomeFilled} from 'react-icons/md'
import {
    AiOutlineSearch,
    AiFillPlusSquare,
    AiOutlineCompass,
    AiFillCompass,
    AiFillHeart,
    AiOutlineHeart,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import{ FaSearch} from 'react-icons/fa'

import { RiVideoLine,RiVideoFill,RiMessengerLine,
RiMessengerFill } from "react-icons/ri";

import { CgProfile, CgHome } from "react-icons/cg";


export const menu = [
    {
        title: "Home",
        icon: <CgHome className="text-2xl mr-5" />,
        activeIcon: <MdHomeFilled className="text-2xl mr-5" />,
    },
    {
        title: "Search",
        icon: <AiOutlineSearch className="text-2xl mr-5" />,
        activeIcon: <FaSearch className="text-2xl mr-5" />,
    },
    {
        title: "Explore",
        icon: <AiOutlineCompass className="text-2xl mr-5" />,
        activeIcon: <AiFillCompass className="text-2xl mr-5" />,
    },
    {
        title: "Reels",
        icon: <RiVideoLine className="text-2xl mr-5" />,
        activeIcon: <RiVideoFill className="text-2xl mr-5" />,
    },
    {
        title: "Messages",
        icon: <RiMessengerLine className="text-2xl mr-5" />,
        activeIcon: <RiMessengerFill className="text-2xl mr-5" />,
    },
    {
        title: "Notifications",
        icon: <AiOutlineHeart className="text-2xl mr-5" />,
        activeIcon: <AiFillHeart className="text-2xl mr-5" />,
    },
    {
        title: "Create",
        icon: <AiOutlinePlusSquare className="text-2xl mr-5" />,
        activeIcon: <AiFillPlusSquare className="text-2xl mr-5" />,
    },
    {
        title: "Profile",
        icon: <CgProfile className="text-2xl mr-5" />,
        activeIcon: <CgProfile className="text-2xl mr-5" />,
    },
];