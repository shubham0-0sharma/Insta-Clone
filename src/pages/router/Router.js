import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Homepage from "../main/Homepage";
import Profile from "../profile/Profile";

function Router() {
    return (
        <div>
            <div className="flex">
                <div className="w-[16%] border border-l-slate-500 ">
                    <Sidebar />
                </div>
                <div className="space-x-20 w-full">
                    <Routes>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/username" element={<Profile />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Router;
