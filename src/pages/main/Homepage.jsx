import React from "react";
import StoryCircle from "../../components/story/StoryCircle";
import HomeRight from "../../components/homeRight/HomeRight";
import PostCard from "../../components/posts/PostCard";

function Homepage() {
    return (
        <div>
            <div className="flex w-max-screen justify-center ">
                <div className="w-[40%] ml-32 mt-8  ">

                    <div className="flex justify-start space-x-8 items-center border border-gray-300 p-4 w-full rounded-md">
                        {[1, 1, 1, 1].map((item) => (
                            <StoryCircle />
                        ))}
                    </div>
                    <div>
                        <div>
                            {[1,1].map((item)=> <PostCard/>)}
                        </div>
                    </div>
                </div>
                <div className="w-[40%]">
                    <HomeRight />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
