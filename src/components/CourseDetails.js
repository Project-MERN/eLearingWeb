import Navbar from "./Navbar";
import USerSidebar from "./UserSidebar";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";



const CourseDetails = () => {
  const userId = Cookies.get("userId");
  if (userId === undefined) {
    return <Navigate to="/Login" />;
  }
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
          <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
            <USerSidebar />
          </div>
          <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl">Course Title</h1>
                <p className="text-sm">By Faculty</p>
              </div>
              <div className="rounded-lg flex items-center gap-1 bg-white px-2 py-2 text-[#5927E5]">
                <AiOutlineClockCircle />
                <p className="text-xs font-medium">5:30Hr</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 w-fit">
              <p className="text-lg">4.7</p>
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
            </div>
            <div className="mt-10 hover:text-white text-gray-300">
              <h1 className="text-xl my-5">What you'll learn</h1>
              <p className=" w-[1000px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className=" w-[1000px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className=" w-[1000px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex justify-end gap-10 my-5">
              <button className="text-white">
                <BsBagCheck style={{ fontSize: "25px" }} />
              </button>
              <button className="bg-white text-[#5927E5] px-8 py-2 rounded-lg">
                 Start
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default CourseDetails