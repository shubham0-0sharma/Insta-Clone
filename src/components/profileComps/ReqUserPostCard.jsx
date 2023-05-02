import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./reqUserPostCard.css";

function ReqUserPostCard() {
    return (
        <div className="p-2">
            <div className=" post bg-cover w-100 h-60">
                <img
                    className="cursor-pointer"
                    src="https://cdn.pixabay.com/photo/2022/10/20/07/23/eurasian-pygmy-owl-7534220_960_720.jpg"
                    alt=""
                />
                <div className="overlay">
                    <div className=" overlay-text flex justify-between">
                        <div>
                            <AiFillHeart /> <span>20</span>
                        </div>
                        <div>
                            <FaComment />
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReqUserPostCard;
