import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("Home");

    const handleTabClick = (title) => {
        setActiveTab(title);
        if (title === "Profile") {
            navigate("/username");
        } else if (title == "Home") {
            navigate("/");
        }
    };

    return (
        <div className="sticky top-0 h-[100vh] ">
            <div className="flex flex-col justify-between h-full px-6">
                <div>
                    <div className="pt-10">
                        <img
                            className="w-24"
                            src="https://i.imgur.com/zqpwkLQ.png"
                            alt=""
                        />
                    </div>

                    <div className="mt-10">
                        {menu.map((item) => (
                            <div
                                onClick={() => handleTabClick(item.title)}
                                className="flex text-sm mb-6 cursor-pointer"
                            >
                                {activeTab === item.title
                                    ? item.activeIcon
                                    : item.icon}
                                <p
                                    className={`${
                                        activeTab === item.title
                                            ? "font-bold "
                                            : "font-semibold"
                                    }`}
                                >
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center cursor-pointer mb-10 text-sm">
                    <IoReorderThreeOutline />
                    <p className="ml-6">More</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
