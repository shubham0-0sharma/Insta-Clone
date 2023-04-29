import { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { CgBookmark } from "react-icons/cg";
import { RiVideoAddLine } from "react-icons/ri";

function ReqUserPostPart() {
    const tabs = [
        {
            title: "POSTS",
            icon: <AiOutlineTable />,
            activeTab: "",
        },
        {
            title: "REELS",
            icon: <RiVideoAddLine />,
            activeTab: "",
        },
        {
            title: "SAVED",
            icon: <CgBookmark />,
            activeTab: "",
        },
        {
            title: "TAGGED",
            icon: <AiOutlineUser />,
            activeTab: "",
        },
    ];
    const [activeTab, setActiveTab] = useState("POST");
    return (
        <div>
            <div className="flex mt-20  space-x-14  border-t relative justify-center">
                {tabs.map((tab) => (
                    <div
                        onClick={() => setActiveTab(tab.title)}
                        className={`${
                            activeTab === tab.title
                                ? "border-t border-black"
                                : "opacity-60"
                        }  flex items-center cursor-pointer text-sm`}
                    >
                        <p>{tab.icon} </p>
                        <p className="m-3">{tab.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReqUserPostPart;
