import circle from "../../assets/projectDetail/block.png";
import qr from "../../assets/projectDetail/qr1.png";
import gdrive from "../../assets/projectDetail/drive.png";
import blockChain from "../../assets/projectDetail/block-chain.png";
import docx from "../../assets/projectDetail/docx.png";
import pdf from "../../assets/projectDetail/pdf1.png";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useGetAllProjectQuery } from "../../features/project/projectApi";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import ProjectDescription from "./ProjectDescription";
import OpenPdf from "./OpenPdf";
import OpenDocx from "./OpenDocx";
import TaskTable from "./TaskTable";
import { useCreateProjectJoinRequestMutation } from "../../features/projectJoinRequest/projectJoinRequestApi";
import Swal from "sweetalert2";
import LikeIcon from "../../icons/LikeIcon";
import CommentIcon from "../../icons/CommentIcon";
import FundIcon from "../../icons/FundIcon";
import ShareIcon from "../../icons/ShareIcon";
import { IoIosArrowDown, IoIosArrowUp, IoLogoYoutube } from "react-icons/io";
import feedWhiteBorder from "../../assets/home/feed-w-b.png";
import feedDarkBorder from "../../assets/home/feed-d-b.png";
import { Link, useNavigate } from "react-router-dom";

const FindProject = ({
  amounts,
  setAmounts,
  selectedTasks,
  setSelectedTasks,
}) => {
  const { user } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.theme);
  const requestedId = user?._id;
  //const [selectedTasks, setSelectedTasks] = useState([]);
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);
  const [showPdfList, setShowPdfList] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const [
    createProjectJoinRequest,
    { data: responseData, error: responseError },
  ] = useCreateProjectJoinRequestMutation();
  const {
    data: allProjects,
    isLoading: isFetchingProject,
    error,
  } = useGetAllProjectQuery();
  const projects = allProjects?.data;

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (responseData?.success && responseData?.data) {
      window.open("https://buy.stripe.com/test_7sIfZP7d6bha3Qs5kk", "_blank");
      Swal.fire({
        icon: "success",
        title: "Hurry!",
        text: "Your request has been sent successfully!",
      });
      setAmounts(0);
    } else if (responseError?.data) {
      console.log(responseError.data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: responseError?.data?.message,
      });
    }
  }, [responseData, responseError]);

  const toggleDescription = (i) => {
    setOpenDescriptionIndex(openDescriptionIndex === i ? null : i);
  };
  //   window.location.href = "https://buy.stripe.com/test_7sIfZP7d6bha3Qs5kk";
  const handleJoinClick = (project) => {
    if (!user) {
      navigate("/login");
    } else if (selectedTasks?.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Oops !",
        text: "I Think, You Forget to Select Task.",
      });
    } else {
      setSelectedProject(project);
      const data = {
        projectId: project?._id,
        requestedBy: requestedId,
        requestedTo: project?.user?._id,
        status: "Pending",
        tasks: selectedTasks,
      };
      createProjectJoinRequest(data);
    }
  };
  const togglePdf = () => {
    setShowPdfList(true);
    setShowDocuments(false);
  };
  const toggleDocx = () => {
    setShowPdfList(false);
    setShowDocuments(true);
  };
  console.log(projects);
  return (
    <>
      <div className=" py-1 w-10/12 sm:w-full">
        <div className="mx-3 md:mx-6 3xl:mx-20 my-5 p-3 xl:p-3 space-y-5 ">
          <>
            {projects?.map((project, i) => (
              <div
                key={i}
                className={`${
                  theme !== "light" &&
                  "p-[1px] bg-gradient-to-r from-[#4EEBFF] from-10% via-[#AA62F9] via-30% to-[#F857FF] to-90%  rounded-[27px]"
                }`}
              >
                <div
                  key={i}
                  className={`${
                    theme === "light"
                      ? "bg-[#fff] shadow-[-1px_0px_56px_-6px_rgba(134,_134,_134,_0.25)]]"
                      : "bg-[url('/gradient-background1.png')] bg-no-repeat bg-cover "
                  } py-6 md:px-4 px-6  rounded-[27px]`}
                >
                  {/* projet name & join */}
                  <div className="flex justify-between">
                    {/* profile */}
                    <Link to={`/user/profile/${project?.user?._id}`}>
                    <div className="flex space-x-2">
                      <div className="relative">
                        <img
                          src={project?.user?.profilePic ||
                            "https://as1.ftcdn.net/v2/jpg/01/68/80/20/1000_F_168802088_1msBk8PpBRCCVo012WJTpWG90KHvoMWf.jpg"
                          }
                          alt=""
                          className="h-9 w-9 md:h-10 md:w-10 lg:w-8 lg:h-8 xl:w-16 xl:h-16  rounded-full p-[6px]"
                        />
                        <img
                          className="h-9 w-9 md:h-10 md:w-10 lg:w-8 lg:h-8 xl:w-16 xl:h-16 absolute top-0  md:right-0"
                          src={
                            theme === "light" ? feedDarkBorder : feedWhiteBorder
                          }
                          alt="dashedborder"
                        />
                      </div>

                      <div>
                        <p
                          className={`${
                            theme === "light" ? "graish" : "text-white"
                          } text-[14px] md:text-[16px] xl:text-[20px] font-semibold`}
                        >
                          <span className=" pl-1 font-medium capitalize">
                            {" "}
                            {project?.user?.name?.firstName}{" "}
                            {project?.user?.name?.lastName}
                          </span>
                        </p>
                        <p
                          className={`${
                            theme === "light" ? "graish" : "text-white"
                          } text-[14px] md:text-[16px] xl:text-[20px]`}
                        >
                          <span
                            className={`${
                              theme === "light" ? "text-gray-500" : "text-white"
                            } capitalize text-[13px] md:text-[15px] xl:text-[19px] font-normal pl-1`}
                          >
                            {project?.user?.country}
                          </span>
                        </p>
                      </div>
                    </div>
                    </Link>
                    { selectedProject?._id === project?._id &&  amounts > 0 && (
                      <p className="font-bold text-red-600">
                        *** You need to pay ${amounts}
                      </p>
                    )}
                    <div onClick={() => handleJoinClick(project)}>
                      {theme === "light" ? (
                        <div
                          className={`${
                            selectedTasks?.length > 0
                              ? "cursor-pointer"
                              : "cursor-not-allowed"
                          } flex justify-center items-center px-3 py-1 md:px-6 md:py-3 text-[16px] md:text-xl text-white font-semibold shadow-[0px_10px_10px_rgba(46,_213,_115,_0.15)] rounded-[25px] md:rounded-[27px] [background:linear-gradient(-84.24deg,_#2adba4,_#65f7c9)]`}
                        >
                          <p className="text-[14px] md:text-[16px] xl:text-[20px] font-semibold pr-1">
                            Join
                          </p>
                          <FaPlus className="text-[15px] md:text-lg ml-1 md:ml-2" />
                        </div>
                      ) : (
                        <button className="joinBtn">
                          <p>
                            Join <FaPlus className="text-[15px] ml-1 md:ml-2" />
                          </p>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Task Table */}
                  <TaskTable
                    tasks={project?.tasks}
                    selectedTasks={selectedTasks}
                    setSelectedTasks={setSelectedTasks}
                    theme={theme}
                  />

                  {/* bor=ttom div */}
                  {openDescriptionIndex === i && (
                    <div className="py-7 ">
                      <div className="flex justify-between md:px-10 lg:px-2">
                        {/* left */}
                        <div className="relative flex justify-center items-center lg:justify-start space-x-2 md:space-x-3 py-5 md:py-2 xl:py-2 xl:ml-8">
                          <div>
                            <div
                              onClick={toggleDocx}
                              className="bg-[#f5eefc] p-2 md:p-3 rounded-md"
                            >
                              <img
                                className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
                                src={docx}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
                              <img
                                onClick={togglePdf}
                                className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
                                src={pdf}
                              />
                            </div>
                          </div>
                          {/* <a>
                            <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
                              <img
                                className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
                                src={gdrive}
                              />
                            </div>
                          </a> */}

                          <a href={project?.videoUrl} target="blank">
                            <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
                              {project?.videoUrl.includes("docs.google") ? (
                                <img
                                  className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
                                  src={gdrive}
                                />
                              ) : (
                                <IoLogoYoutube className="text-[20px] md:text-[33px] xl:text-[40px] 3xl:text-[44px] text-red-500" />
                              )}
                            </div>
                            {/* <img
                             className="h-12 xl:h-20"
                             src={
                               project?.videoUrl.includes("docs.google")
                                ?
                                  gdrive
                                  :
                                  <IoLogoYoutube />
                             }
                           /> */}
                          </a>
                          {showPdfList && (
                            <div className="absolute top-14 left-24 md:left-72 lg:left-10 xl:left-24 xl:top-20  z-40">
                              <OpenPdf
                                pdfFiles={project?.pdfFiles}
                                showPdfList={showPdfList}
                              />
                            </div>
                          )}
                          {showDocuments && (
                            <div className="absolute top-14 left-2 md:left-56 lg:left-0 xl:top-20  z-40">
                              <OpenDocx
                                documents={project?.documents}
                                showDocuments={showDocuments}
                              />
                            </div>
                          )}

                          {/* <div className="absolute top-14 left-24 md:left-72 lg:left-10 xl:left-24 xl:top-20  z-40">
                            <OpenPdf
                              pdfFiles={project?.pdfFiles}
                              showPdfList={showPdfList}
                            />
                          </div>

                          <div className="absolute top-14 left-2 md:left-56 lg:left-0 xl:top-20  z-40">
                            <OpenDocx
                              documents={project?.documents}
                              showDocuments={showDocuments}
                            />
                          </div> */}
                        </div>
                        {/* right */}

                        <div className="flex items-center space-x-1 xs:space-x-2 md:space-x-3 ">
                          <div>
                            <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
                              <img
                                className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
                                src={circle}
                              />
                            </div>
                          </div>
                          <img
                            className="h-14 md:h-16 xl:h-20"
                            src={blockChain}
                          />
                          <div>
                            <div className="bg-[#f5eefc] h-8 w-8 md:h-14 3xl:h-16 3xl:w-16 md:w-14 rounded-md flex justify-center items-center">
                              <img
                                className=" rounded-md cursor-pointer"
                                src={qr}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row space-y-3 justify-start lg:justify-between items-center px-3 lg:px-24">
                        <div className="flex justify-center  w-11/12 lg:w-5/12">
                          <div>
                            {/* <img
                             src={des}
                             className="h-40 md:h-48 lg:h-52 xl:h-[300px]"
                             alt="hero"
                           /> */}
                            <ImageSlider images={project?.images} />
                          </div>
                        </div>
                        <ProjectDescription
                          description={project?.description}
                          theme={theme}
                        />
                      </div>
                    </div>
                  )}
                  <div
                    onClick={() => toggleDescription(i)}
                    className={`${
                      theme === "light" ? "graish" : "text-white"
                    } flex justify-center items-center cursor-pointer pb-5 lg:pb-0 3xl:py-5`}
                  >
                    <div className="flex flex-col justify-center items-center -space-y-1">
                      {openDescriptionIndex === i && (
                        <IoIosArrowUp className={`3xl:text-xl`} />
                      )}
                      <p className="3xl:text-xl font-semibold">
                        {openDescriptionIndex !== i ? "read more" : "read less"}
                      </p>
                      {openDescriptionIndex !== i && <IoIosArrowDown />}
                    </div>
                  </div>
                  <div
                    className={`${
                      theme === "light" ? "graish" : "text-white"
                    } flex justify-between items-center border-b pb-3`}
                  >
                    <p className="text-[14px] lg:text-[16px] 3xl:text-[20px] font-medium">
                      React [5]
                    </p>
                    <p className="text-[14px] lg:text-[16px] 3xl:text-[20px] font-medium">
                      2 Comments, 5 Shares
                    </p>
                  </div>

                  <ul
                    className={`${
                      theme === "light" ? "graish" : "text-white"
                    } flex space-x-3 md:space-x-6 pt-5`}
                  >
                    <li className="flex items-center space-x-2">
                      <LikeIcon theme={theme} />
                      <p className="hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
                        Like
                      </p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FundIcon theme={theme} />
                      <p className=" hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
                        Fund
                      </p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CommentIcon theme={theme} />
                      <p className="hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
                        Comment
                      </p>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ShareIcon theme={theme} />
                      <p className="hidden sm:block  text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
                        Share
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};
// const FindProject = () => {
//   const { user } = useSelector((state) => state.auth);
//   const theme = useSelector((state) => state.theme.theme);
//   const requestedId = user?._id;
//   const [selectedTasks, setSelectedTasks] = useState([]);
//   const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);
//   const [showPdfList, setShowPdfList] = useState(false);
//   const [showDocuments, setShowDocuments] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     setIsLoading(true);
//     // Simulate loading for 2 seconds
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);
//   }, []);

//   //******** post project
//   const [
//     createProjectJoinRequest,
//     { data: responseData, error: responseError },
//   ] = useCreateProjectJoinRequestMutation();
//   const {
//     data: allProjects,
//     isLoading: isFetchingProject,
//     error,
//   } = useGetAllProjectQuery();
//   const projects = allProjects?.data;

//   // ******* fetch request
//   //  const {
//   //   data: allRequest,
//   //   isLoading: isFetchingRequest,

//   // } = useGetAllProjectByRequestedByQuery(user?._id);

//   const toggleDescription = (i) => {
//     const duration = 100;
//     setTimeout(() => {
//       setOpenDescriptionIndex(openDescriptionIndex === i ? null : i);
//     }, duration);
//   };

//   const handleSubmit = (project) => {
//     const data = {
//       projectId: project?._id,
//       requestedBy: requestedId,
//       requestedTo: project?.user?._id,
//       status: "Pending",
//       tasks: selectedTasks,
//     };
//     console.log("Data to be sent:", data);
//     createProjectJoinRequest(data);
//   };

//   useEffect(() => {
//     if (!responseData?.status) {
//       console.log(responseData?.message);
//     }
//     if (responseError?.data) {
//       console.log(responseError.data);
//     }
//     if (responseData?.success && responseData?.data) {
//       console.log(responseData);
//       // navigate("/dashboard/books");
//       Swal.fire({
//         icon: "success",
//         title: "Hurry !",
//         text: "Your request has been sent successfully !",
//       });
//     }
//   }, [responseData, responseError]);
//   console.log(openDescriptionIndex);

//   // data-aos="zoom-in"
//   // data-aos-duration="500"
//   // data-aos-offset="300"
//   // data-aos-easing="ease-in-sine"

//   return (
//     <>
//       <div className=" py-1 w-10/12 sm:w-full">
//         <div className="mx-3 md:mx-6 3xl:mx-20 my-5 p-3 xl:p-3 space-y-5 ">
//           <>
//             {projects?.map((project, i) => (
//               <div
//                 key={i}
//                 className={`${
//                   theme !== "light" &&
//                   "p-[1px] bg-gradient-to-r from-[#4EEBFF] from-10% via-[#AA62F9] via-30% to-[#F857FF] to-90%  rounded-[27px]"
//                 }`}
//               >
//                 <div
//                   key={i}
//                   className={`${
//                     theme === "light"
//                       ? "bg-[#fff] shadow-[-1px_0px_56px_-6px_rgba(134,_134,_134,_0.25)]]"
//                       : "bg-[url('/gradient-background1.png')] bg-no-repeat bg-cover "
//                   } py-6 md:px-4 px-6  rounded-[27px]`}
//                 >
//                   {/* projet name & join */}
//                   <div className="flex justify-between">
//                     {/* profile */}
//                     <div className="flex space-x-2">
//                       <div className="relative">
//                         <img
//                           src="https://source.unsplash.com/150x150/?portrait?3"
//                           alt=""
//                           className="h-9 w-9 md:h-10 md:w-10 lg:w-8 lg:h-8 xl:w-16 xl:h-16  rounded-full p-[6px]"
//                         />
//                         <img
//                           className="h-9 w-9 md:h-10 md:w-10 lg:w-8 lg:h-8 xl:w-16 xl:h-16 absolute top-0  md:right-0"
//                           src={
//                             theme === "light" ? feedDarkBorder : feedWhiteBorder
//                           }
//                           alt="dashedborder"
//                         />
//                       </div>

//                       <div>
//                         <p
//                           className={`${
//                             theme === "light" ? "graish" : "text-white"
//                           } text-[14px] md:text-[16px] xl:text-[20px] font-semibold`}
//                         >
//                           <span className=" pl-1 font-medium capitalize">
//                             {" "}
//                             {project?.user?.name?.firstName}{" "}
//                             {project?.user?.name?.lastName}
//                           </span>
//                         </p>
//                         <p
//                           className={`${
//                             theme === "light" ? "graish" : "text-white"
//                           } text-[14px] md:text-[16px] xl:text-[20px]`}
//                         >
//                           <span
//                             className={`${
//                               theme === "light" ? "text-gray-500" : "text-white"
//                             } text-[13px] md:text-[15px] xl:text-[19px] font-normal pl-1`}
//                           >
//                             Bangladesh
//                           </span>
//                         </p>
//                       </div>
//                     </div>
//                     <div onClick={() => handleSubmit(project)}>
//                       {/* join */}
//                       {theme === "light" ? (
//                         <div className="flex justify-center items-center  px-3 py-1 md:px-6 md:py-3 text-[16px] md:text-xl text-white font-semibold shadow-[0px_10px_10px_rgba(46,_213,_115,_0.15)] rounded-[25px] md:rounded-[27px] [background:linear-gradient(-84.24deg,_#2adba4,_#65f7c9)]">
//                           <p className="text-[14px] md:text-[16px] xl:text-[20px] font-semibold pr-1">
//                             Join
//                           </p>
//                           <FaPlus className="text-[15px] md:text-lg  ml-1 md:ml-2" />
//                         </div>
//                       ) : (
//                         // <img src={joinButton} className="h-16 w-24" alt="join" />
//                         <button className="joinBtn">
//                           <p>
//                             Join{" "}
//                             <FaPlus className="text-[15px]   ml-1 md:ml-2" />
//                           </p>
//                         </button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Task Table */}
//                   <TaskTable
//                     tasks={project?.tasks}
//                     handleSubmit={handleSubmit}
//                     selectedTasks={selectedTasks}
//                     setSelectedTasks={setSelectedTasks}
//                     theme={theme}
//                   />

//                   {/* bor=ttom div */}
//                   {openDescriptionIndex === i && (
//                     <div className="py-7 ">
//                       <div className="flex justify-between md:px-10 lg:px-2">
//                         {/* left */}
//                         <div className="relative flex justify-center items-center lg:justify-start space-x-2 md:space-x-3 py-5 md:py-2 xl:py-2 xl:ml-8">
//                           <div>
//                             <div
//                               onClick={() => setShowDocuments(!showDocuments)}
//                               className="bg-[#f5eefc] p-2 md:p-3 rounded-md"
//                             >
//                               <img
//                                 onClick={() => setShowPdfList(!showPdfList)}
//                                 className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
//                                 src={docx}
//                               />
//                             </div>
//                           </div>
//                           <div>
//                             <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
//                               <img
//                                 onClick={() => setShowPdfList(!showPdfList)}
//                                 className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
//                                 src={pdf}
//                               />
//                             </div>
//                           </div>
//                           <a>
//                             <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
//                               <img
//                                 onClick={() => setShowPdfList(!showPdfList)}
//                                 className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
//                                 src={gdrive}
//                               />
//                             </div>
//                           </a>

//                           {/* <a href={project?.videoUrl} target="blank">
//                            <img
//                              className="h-12 xl:h-20"
//                              src={
//                                project?.videoUrl.includes("youtu.be")
//                                  ? ytube
//                                  : gdrive
//                              }
//                            />
//                          </a> */}

//                           <div className="absolute top-14 left-24 md:left-72 lg:left-10 xl:left-24 xl:top-20  z-40">
//                             <OpenPdf
//                               pdfFiles={project?.pdfFiles}
//                               showPdfList={showPdfList}
//                             />
//                           </div>

//                           <div className="absolute top-14 left-2 md:left-56 lg:left-0 xl:top-20  z-40">
//                             <OpenDocx
//                               documents={project?.documents}
//                               showDocuments={showDocuments}
//                             />
//                           </div>
//                         </div>
//                         {/* right */}

//                         <div className="flex items-center space-x-1 xs:space-x-2 md:space-x-3 ">
//                           <div>
//                             <div className="bg-[#f5eefc] p-2 md:p-3 rounded-md">
//                               <img
//                                 className="h-5 md:h-8 xl:h-10 rounded-md cursor-pointer"
//                                 src={circle}
//                               />
//                             </div>
//                           </div>
//                           <img
//                             className="h-14 md:h-16 xl:h-20"
//                             src={blockChain}
//                           />
//                           <div>
//                             <div className="bg-[#f5eefc] h-8 w-8 md:h-14 3xl:h-16 3xl:w-16 md:w-14 rounded-md flex justify-center items-center">
//                               <img
//                                 className=" rounded-md cursor-pointer"
//                                 src={qr}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex flex-col lg:flex-row space-y-3 justify-start lg:justify-between items-center px-3 lg:px-24">
//                         <div className="flex justify-center  w-11/12 lg:w-5/12">
//                           <div>
//                             {/* <img
//                              src={des}
//                              className="h-40 md:h-48 lg:h-52 xl:h-[300px]"
//                              alt="hero"
//                            /> */}
//                             <ImageSlider images={project?.images} />
//                           </div>
//                         </div>
//                         <ProjectDescription
//                           description={project?.description}
//                           theme={theme}
//                         />
//                       </div>
//                     </div>
//                   )}
//                   <div
//                     onClick={() => toggleDescription(i)}
//                     className={`${
//                       theme === "light" ? "graish" : "text-white"
//                     } flex justify-center items-center cursor-pointer pb-5 lg:pb-0 3xl:py-5`}
//                   >
//                     <div className="flex flex-col justify-center items-center -space-y-1">
//                       {openDescriptionIndex === i && (
//                         <IoIosArrowUp className={`3xl:text-xl`} />
//                       )}
//                       <p className="3xl:text-xl font-semibold">
//                         {openDescriptionIndex !== i ? "read more" : "read less"}
//                       </p>
//                       {openDescriptionIndex !== i && <IoIosArrowDown />}
//                     </div>
//                   </div>
//                   <div
//                     className={`${
//                       theme === "light" ? "graish" : "text-white"
//                     } flex justify-between items-center border-b pb-3`}
//                   >
//                     <p className="text-[14px] lg:text-[16px] 3xl:text-[20px] font-medium">
//                       React [5]
//                     </p>
//                     <p className="text-[14px] lg:text-[16px] 3xl:text-[20px] font-medium">
//                       2 Comments, 5 Shares
//                     </p>
//                   </div>

//                   <ul
//                     className={`${
//                       theme === "light" ? "graish" : "text-white"
//                     } flex space-x-3 md:space-x-6 pt-5`}
//                   >
//                     <li className="flex items-center space-x-2">
//                       <LikeIcon theme={theme} />
//                       <p className="hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
//                         Like
//                       </p>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <FundIcon theme={theme} />
//                       <p className=" hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
//                         Fund
//                       </p>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <CommentIcon theme={theme} />
//                       <p className="hidden sm:block text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
//                         Comment
//                       </p>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <ShareIcon theme={theme} />
//                       <p className="hidden sm:block  text-[10px] md:text-[14px] lg:text-[16px] 3xl:text-[20px]  font-medium">
//                         Share
//                       </p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </>
//         </div>
//       </div>
//     </>
//   );
// };

export default FindProject;

// const checkIfRequestExists = (projectId, requestedBy) => {
//   return allRequest?.data?.map(request => request.projectId === projectId && request.requestedBy === requestedBy);
//  };

//  const handleSubmit = (project) => {
//   if (checkIfRequestExists(project._id,requestedId)) {
//      alert("Request already sent");
//   } else {
//      const data = {
//        projectId: project?._id,
//        requestedBy: requestedId,
//        requestedTo: project?.user?._id,
//        status: "Pending",
//        tasks: selectedTasks
//      };

//      console.log("Data to be sent:", data);
//   }
//  };
