import { RiSettings3Fill } from "react-icons/ri";
function ProfileUserDetails() {
    return (
        <div className="py-10 ">
            <div className="flex justify-center">
                <div className="w-[15%]">
                    <img
                        className="rounded-full w-40 h-40 object-cover"
                        src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg"
                        alt=""
                    />
                </div>
                <div className="ml-12 space-y-5 space-x-9 w-[50%] ">
                    <div className="flex space-x-8 items-center  ">
                        <p className="ml-10">Shubham0_0Sharma</p>
                        <button>Edit Profile</button>
                        <RiSettings3Fill />
                    </div>
                    <div className="flex space-x-6  ">
                        <div>
                            <span className="font-semibold mr-2">2</span>
                            <span className="font-semibold mr-2">posts</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">72 </span>
                            <span className="font-semibold mr-2">
                                followers
                            </span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">230</span>
                            <span className="font-semibold mr-2">
                                following
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>shubham sharma</p>
                        <p className="font-thin text-sm">
                            Hello all DM for Promotions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileUserDetails;
