import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import "./postCard.css";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineSmile } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { SlPaperPlane } from "react-icons/sl";

function PostCard() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };
    const handleLikeClick = () => {
        setIsPostLiked(!isPostLiked);
    };
    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };
    {
    }
    return (
        <div>
            <div className="border rounded-md border-gray-200 shadow">
                <div className="flex items-center mt-6 justify-between">
                    <div
                        className="flex items-center space-x-2
                    "
                    >
                        <img
                            className=" h-10 w-10 ml-1 object-cover rounded-full"
                            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div>
                            <p className="text-xs font-semibold">WhyShivam_</p>
                            <p className="text-xs font-light">Raipur</p>
                        </div>
                    </div>
                    <div
                        className="p-3 dropdown cursor-pointer "
                        onClick={handleDropdownClick}
                    >
                        <BsThreeDots className="inline-block mt-4 mr-4" />
                        <div className="dropdown-content">
                            {showDropdown && (
                                <p className="bg-black block text-white  py-1 px-4 rounded-md cursor-pointer text-xs font-light">
                                    Report
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="h-auto w-full object-cover mt-4 p-2">
                    <img
                        src="https://cdn.pixabay.com/photo/2023/04/29/10/26/owl-7958228_640.jpg"
                        alt=""
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-3 p-3">
                        {isPostLiked ? (
                            <AiFillHeart
                                className="text-xl hover:opacity-50 cursor-pointer text-red-600"
                                onClick={handleLikeClick}
                            />
                        ) : (
                            <AiOutlineHeart
                                onClick={handleLikeClick}
                                className="text-xl hover:opacity-50 cursor-pointer "
                            />
                        )}

                        <FaRegComment className="text-xl hover:opacity-50 cursor-pointer " />
                        <SlPaperPlane className="text-xl hover:opacity-50 cursor-pointer " />
                    </div>
                    <div className="p-3">
                        {isSaved ? (
                            <BsBookmarkFill
                                className="text-xl hover:opacity-50 cursor-pointer"
                                onClick={handleSaveClick}
                            />
                        ) : (
                            <BsBookmark
                                onClick={handleSaveClick}
                                className="text-xl cursor-pointer "
                            />
                        )}
                    </div>
                </div>
                <div className="w-full py-2 px-5 text-sm">
                    <p>10 Likes</p>
                    <p className="opacity-50 cursor-pointer py-2">
                        View all comments
                    </p>

                    <div className="border-t w-full">
                        <div className="flex w-full items-center px-5 ">
                            <AiOutlineSmile />
                            <input
                                className="comment-input"
                                type="text"
                                name=""
                                id=""
                                placeholder="Add a comment..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
