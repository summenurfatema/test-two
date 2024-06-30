import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useGetSingleUserQuery } from "../../features/auth/authApi";
import { useState,useEffect, useContext, } from "react";
import { useAuthCheck } from "../../utils/useAuthCheck";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/UserContext";
const DekstopSidebar = ({
  handleCreateProject,
  handleDashboard,
  handleFriendRqst,
  handleFund,
  handleMeeting,
  handleProfile,
  handleProject,
  handleRequest,
  handleSetting,
  openCreateProject,
  openDashboard,
  openFrndRqst,
  openFund,
  openMeet,
  openProfile,
  openProject,
  openRequest,
  openSetting,
  openRequestOption,
  setOpenRequestOption,
  userData,
  logout
}) => {
  const{singleUser} = useContext(AuthContext);
  const userImage = singleUser?.data?.profilePic ?  singleUser?.data?.profilePic  : "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802088_1msBk8PpBRCCVo012WJTpWG90KHvoMWf.jpg"
  return (
    <div className="hidden lg:flex py-4 flex-col justify-center items-center space-y-12 lg:w-[270px]  xl:w-3/12  rounded-[33px] bg-[#f3f6f8] shadow-[-2px_-3px_6px_1px_rgba(255,_255,_255,_0.9),_4px_4px_6px_rgba(182,_182,_182,_0.6)]">
      <div
        onClick={handleDashboard}
        className={`bg-[#e4ecf7] py-4
          } flex justify-around relative space-x-12 rounded-[20px] items-center py-2 px-5 lg:px-8 xl:px-12 3xl:px-16 mt-5 shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset] h-[71.2px]`}
      >
        <img src="/dashboard1.svg" className="h-6" />
        <Link
          to="/dashboard"
          className="lg:text-[18px] xl:text-[22px] font-semibold gray600 relative -left-5"
        >
          Dashboard
        </Link>
      </div>

      {/* top */}
      <div className="m-4 lg:w-[230px] xl:w-[290px] 2xl:w-[300px] 3xl:w-[310px] pt-2 pb-9 flex justify-center items-center rounded-[25px] bg-[#e4ecf7] shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset]">
        <ul className="text-xl font-semibold relative">
          <li
            onClick={handleProject}
            className={`${
              openProject === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative  mt-3 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
            <div
              className={`${
                !openProject && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
            to="/dashboard/all-projects"
              className={`${
                openProject === true ? "bg-[#f3f6f8] rounded-l-2xl py-2" : "bg-[#e4ecf7] py-3"
              } flex relative lg:space-x-2 xl:space-x-4  items-center  lg:pl-5 xl:pl-3`}
            >
              <img src="/project2.svg" className="h-7" />
              <p className="lg:text-[18px] xl:text-[22px] font-medium gray600">
                All Project
              </p>
            </Link>

            <div
              className={`${
                openProject === true ? "block" : "hidden"
              } bg-[#e4ecf7]  h-5 rounded-tr-[50px]`}
            ></div>
          </li>
          <li
            className={`${
              openRequestOption === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative  mt-3 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
           <div
              className={`${
                !openRequest && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
              to="/dashboard/sent-request"
              
              className={`${
                openRequestOption === true
                  ? "bg-[#f3f6f8] rounded-l-2xl py-2"
                  : "bg-[#e4ecf7] py-3"
              } flex relative space-x-4 rounded-l-[40px] it items-start  pl-4 `}
            >
              <img  src="/rqst.svg" className="h-5 mt-1" />
              <div  onClick={() => { handleRequest();  }}>
                <p onClick={() => setOpenRequestOption(!openRequestOption)} className=" lg:text-[18px] xl:text-[22px] font-medium gray600">
                  Request
                </p>
                {openRequestOption && (
                  <div className="pl-3 space-y-[1px] pt-1">
                    <p className="lg:text-[16px] 3xl:text-[19px] font-normal gray600">
                    <Link to="/dashboard/sent-request">
                      Sent
                    </Link>
                    </p>
                    <p className="lg:text-[16px] 3xl:text-[19px] font-normal gray600">
                    <Link to="/dashboard/recieve-request">
                      Recieve
                    </Link>
                    </p>
                    
                    
                  </div>
                )}
              </div>
              <img
              onClick={() => setOpenRequestOption(!openRequestOption)}
                src="/down-arrow.svg"
                className={`${
                  openRequestOption ? "right-5 top-4" : " right-5 top-6"
                } h-3 absolute`}
              />
            </Link>

            <div
              className={`${
                openRequestOption === true
                  ? "block rounded-tr-[50px]"
                  : "hidden"
              } bg-[#e4ecf7]  h-5 `}
            ></div>
          </li>
          <li
            onClick={handleCreateProject}
            className={`${
              openCreateProject === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative  ml-1 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
            <div
              className={`${
                !openCreateProject && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
            to="/dashboard/create-projects"
              className={`${
                openCreateProject === true ? "bg-[#f3f6f8] rounded-l-2xl py-2" : "bg-[#e4ecf7] py-3"
              } flex space-x-3 items-center pl-3 lg:pr-14`}
            >
              <img src="/video.svg" className="h-4" />
              <p className="lg:text-[18px] xl:text-[22px] font-medium text-xl gray600 xl:pr-5">
                Create Project  
              </p>
            </Link>

            <div
              className={`${
                openCreateProject === true ? "block" : "hidden"
              } bg-[#e4ecf7]  h-5 rounded-tr-[50px]`}
            ></div>
          </li>
        </ul>
      </div>
      {/* center */}
      <div className="m-4 lg:w-[230px] xl:w-[290px] 2xl:w-[300px] 3xl:w-[310px] pt-2 pb-9 flex justify-center items-center rounded-[25px] bg-[#e4ecf7] shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset]">
        <ul className="text-xl font-semibold relative">
          <li
            onClick={handleFund}
            className={`${
              openFund === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative  mt-3 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
            <div
              className={`${
                !openFund && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
            to="/dashboard/fund-proposal"
              className={`${
                openFund === true ? "bg-[#f3f6f8] rounded-l-2xl py-2" : "bg-[#e4ecf7] border-b border-white py-3"
              } flex relative lg:space-x-2 xl:space-x-4  items-center  lg:pl-5 xl:pl-3`}
            >
              <img src="/fund2.svg" className="h-7" />
              <p className="lg:text-[18px] xl:text-[22px] font-medium gray600">
                Fund Proposal
              </p>
            </Link>

            <div
              className={`${
                openFund === true ? "block" : "hidden"
              } bg-[#e4ecf7]  h-5 rounded-tr-[50px]`}
            ></div>
          </li>
          <li
            onClick={handleFriendRqst}
            className={`${
              openFrndRqst === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative ml-1 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
            <div
              className={`${
                !openFrndRqst && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
              to="/dashboard/friend-request"
              className={`${
                openFrndRqst === true
                  ? "bg-[#f3f6f8] rounded-l-2xl py-2"
                  : "bg-[#e4ecf7] border-b border-white py-3"
              } flex relative space-x-4  items-center pl-3 `}
            >
              <img src="/rqst2.svg" className="h-6" />
              <p className="lg:text-[18px] xl:text-[22px] font-medium gray600">
                Friend Request
              </p>
            </Link>

            <div
              className={`${
                openFrndRqst === true ? "block" : "hidden"
              } bg-[#e4ecf7]  h-5 rounded-tr-[50px]`}
            ></div>
          </li>
          <li
            onClick={handleMeeting}
            className={`${
              openMeet === true ? "show-content" : "hide-content"
            } border-b  cursor-pointer  relative  ml-1 lg:-right-[7px] xl:-right-[11px] 2xl:-right-[16px] 3xl:-right-[23px]`}
          >
            <div
              className={`${
                !openMeet && "hidden"
              } bg-[#e4ecf7] h-5 rounded-br-[60px]`}
            ></div>

            <Link
            to="/dashboard/meeting-schedule"
              className={`${
                openMeet === true ? "bg-[#f3f6f8] rounded-l-2xl py-2" : "bg-[#e4ecf7] py-3"
              } flex space-x-3 items-center pl-3 pr-4`}
            >
              <img src="/video.svg" className="h-4" />
              <p className="lg:text-[18px] xl:text-[22px] font-medium text-xl gray600 xl:pr-5">
                Meeting Schedule
              </p>
            </Link>

            <div
              className={`${
                openMeet === true ? "block" : "hidden"
              } bg-[#e4ecf7]  h-5 rounded-tr-[50px]`}
            ></div>
          </li>
        </ul>
      </div>
      {/* bottom */}
    <a href='/user/edit-profile'
        className={`${
          openProfile === true ? "bg-[#dce2ea]" : "bg-[#e4ecf7] py-4 "
        } flex flex-col justify-center items-center relative rounded-[15px] py-2 lg:px-[66px] xl:px-[75px] 3xl:px-[90px]    shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset]`}
      >
        

      
        <img
          src={userImage}
          className="h-16 w-16 -mt-10 rounded-full"
        />
        <p className="lg:text-[18px] xl:text-[22px]  font-medium gray600 text-center pb-5 capitalize">
    
        {userData?.data?.name?.firstName} {userData?.data?.name?.lastName}
        </p>
        </a>
      {/* setting logout */}
      <div className="space-y-3">
        <div
        onClick={handleSetting}
          className={`${
            openSetting === true ? "bg-[#dce2ea]" : "bg-[#e4ecf7] py-4"
          } flex justify-evenly relative space-x-14 rounded-[20px] items-center py-2 lg:px-[41px] xl:px-14 3xl:px-[70px] mt-5  shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset] h-[71.2px]`}
        >
          <img src="/setting.svg" className="h-8" />
          <p className="lg:text-[18px] xl:text-[22px]  font-medium gray600 relative -left-5">
            Setting
          </p>
        </div>
        <div
        onClick={logout}
          className={`${
            openDashboard === true ? "bg-[#dce2ea]" : "bg-[#e4ecf7] py-4"
          } flex justify-around relative space-x-14 cursor-pointer rounded-[20px] items-center py-2 lg:px-[41px] xl:px-14 3xl:px-[70px]  mt-5  shadow-[-2px_-3px_9px_rgba(255,_255,_255,_0.88)_inset,_2px_3px_14px_#c7d3e1_inset] h-[71.2px]`}
        >
          <img src="/logout.svg" className="h-8" />
          <p className="lg:text-[18px] xl:text-[22px]  font-medium gray600 relative -left-5">
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default DekstopSidebar;

DekstopSidebar.propTypes = {
  handleCreateProject: PropTypes.func.isRequired,
  handleDashboard: PropTypes.func.isRequired,
  handleFriendRqst: PropTypes.func.isRequired,
  handleFund: PropTypes.func.isRequired,
  handleMeeting: PropTypes.func.isRequired,
  handleProfile: PropTypes.func.isRequired,
  handleProject: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  handleSetting: PropTypes.func.isRequired,
  openCreateProject: PropTypes.bool.isRequired,
  openDashboard: PropTypes.bool.isRequired,
  openFrndRqst: PropTypes.bool.isRequired,
  openFund: PropTypes.bool.isRequired,
  openMeet: PropTypes.bool.isRequired,
  openProfile: PropTypes.bool.isRequired,
  openProject: PropTypes.bool.isRequired,
  openRequest: PropTypes.bool.isRequired,
  openSetting: PropTypes.bool.isRequired,
  openRequestOption: PropTypes.bool.isRequired,
  setOpenRequestOption: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};