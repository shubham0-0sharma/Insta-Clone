import React from "react";
import ProfileUserDetails from "../../components/profileComps/ProfileUserDetails";
import ReqUserPostPart from "../../components/profileComps/ReqUserPostPart";
import ReqUserPostCard from "../../components/profileComps/ReqUserPostCard";

function Profile() {
    return (
        <div className="px-20">
            <div>
                <ProfileUserDetails />
                
            </div>
            <div><ReqUserPostPart/></div>
            
        </div>
    );
}

export default Profile;
