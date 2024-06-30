/* eslint-disable react/prop-types */
import {useState} from "react";
import {fileUpload} from '../../../utils/cloudinary'
const Images = ({setImages, images}) => {
  const [loading, setLoading] = useState({
    imageOne: false,
    imageTwo: false,
    imageThree: false,
  });
  const [previewImage, setPreviewImage] = useState({
    imageOne: "",
    imageTwo: "",
    imageThree: "",
  });
  
  // const handlePreviewImage = async (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const name = e.target.name;
  //     setLoading({
  //       ...loading,
  //       [name]: true,
  //     });
  //     const file = e.target.files[0];
  //     try {
  //       const imageUrl = await fileUpload(file); // Upload file to Cloudinary
  //       setImages([...images, file]);
  //       setPreviewImage({ ...previewImage, [name]: imageUrl });
  //       console.log("Image uploaded successfully. URL:", imageUrl);
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     } finally {
  //       setLoading({
  //         pdfOne: false,
  //         pdfTwo: false,
  //         pdfThree: false,
  //       });
  //     }
  //   }
  // };
  // const handlePreviewImage = async (event) => {
  //   const files = event.target.files;
  //   const img = event.target.files[0];
  //   if (files.length > 0) {
  //     try {
  //       const urls = await Promise.all(Array.from(files).map(async (file) => {
  //         const imageUrl = await fileUpload(file); // Upload file to Cloudinary
  //         return imageUrl;
  //       }));
  //       setImages([...images, ...urls]);
  //       setPreviewImage({...previewImage, [name]: URL.createObjectURL(img)});

  //     } catch (error) {
  //       console.error("Error uploading images:", error);
  //     }
  //   }
  // };
  const handlePreviewImage = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const name = e.target.name;
      setLoading({
        ...loading,
        [name]: true,
      });
      const files = e.target.files;
      try {
        const urls = await Promise.all(Array.from(files).map(async (file) => {
          const imageUrl = await fileUpload(file); // Upload file to Cloudinary
          return imageUrl;
        }));
        setImages([...images, ...urls]);
        setLoading({
          imageOne: false,
          imageTwo: false,
          imageThree: false,
        });
        setPreviewImage({ ...previewImage, [name]: URL.createObjectURL(files[0]) });
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    }
  };
  
  

  return (

      <div className="flex flex-col space-y-5 md:space-y-0 font-medium gray600">
        <div>
          <label className="text-[16px] md:text-xl capitalize">images (up to 3)</label>
          <p className="text-[12px] md:text-lg font-normal pt-1 md:pb-3">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* image one */}
          <div className="relative">
            {previewImage.imageOne  ? (
              <div className="flex justify-center items-center rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px]  box-border border-2 border-gray-100 custom-shadow">
                <img className="object-cover h-full rounded-md" src={previewImage.imageOne} alt="" />
              </div>
            ) : (
              <label required htmlFor="image-one" className="">
                <div className="rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px]  box-border border-2 border-gray-100 outline-none bg-[#DCF0FC] shadow-[-5px_-5px_20px_rgba(255,_255,_255,_0.8),_5px_5px_20px_rgba(0,_0,_0,_0.2)]">
                  {loading.imageOne ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <div className="flex flex-col justify-center items-center absolute top-8 lg:top-12 xl:top-16 2xl:top-14 3xl:top-20 w-full">
                      <img src="/upload.svg" className="h-3" />
                      <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
                      <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
                    </div>
                  )}
                </div>
              </label>
            )}{" "}
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
                                                            focus:outline-none  bg-white text-gray-900 hidden"
              type="file"
              name="imageOne"
              id="image-one"
              onChange={handlePreviewImage}
              accept="image/*"
              required
            />
          </div>
          {/* image two */}
          <div className="relative ">
            {previewImage.imageTwo ? (
              <div className="flex justify-center items-center rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px]  box-border border-2 border-gray-100 custom-shadow">
                <img className="object-cover h-full rounded-md" src={previewImage.imageTwo} alt="" />
              </div>
            ) : (
              <label required htmlFor="image-two" className="">
                <div className="rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px]  box-border border border-gray-100 outline-none  bg-[#DCF0FC] shadow-[-5px_-5px_20px_rgba(255,_255,_255,_0.8),_5px_5px_20px_rgba(0,_0,_0,_0.2)]">
                  {loading.imageTwo ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <div className="flex flex-col justify-center items-center absolute top-8 lg:top-12 xl:top-16 2xl:top-14 3xl:top-20 w-full">
                      <img src="/upload.svg" className="h-3" />
                      <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
                      <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
                    </div>
                  )}
                </div>
              </label>
            )}{" "}
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
                                                            focus:outline-none  bg-white text-gray-900 hidden"
              type="file"
              name="imageTwo"
              id="image-two"
              onChange={handlePreviewImage}
              accept="image/*"
              required
            />
          </div>
          {/* image three */}
          <div className="relative"> 
            {previewImage.imageThree  ? (
              <div className="flex justify-center items-center rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px] box-border border-2 border-gray-100 custom-shadow">
                <img className="object-cover h-full rounded-md" src={previewImage.imageThree} alt="" />
              </div>
            ) : (
              <label required htmlFor="image-three" className="">
                <div className="rounded-lg h-[110px] w-[200px] md:w-[150px] lg:h-[150px] lg:w-[220px]  xl:h-[170px] xl:w-[300px] 3xl:h-[200px] 3xl:w-[330px]  box-border border-2 border-gray-100 outline-none bg-[#DCF0FC] shadow-[-5px_-5px_20px_rgba(255,_255,_255,_0.8),_5px_5px_20px_rgba(0,_0,_0,_0.2)]">
                  {loading.imageThree ? (
                    <span className="loading loading-spinner loading-xs"></span>
                  ) : (
                    <div className="flex flex-col justify-center items-center absolute top-8 lg:top-12 xl:top-16 2xl:top-14 3xl:top-20 w-full">
                      <img src="/upload.svg" className="h-3" />
                      <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
                      <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
                    </div>
                  )}
                </div>
              </label>
            )}{" "}
            <input
              className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
                                                            focus:outline-none  bg-white text-gray-900 hidden"
              type="file"
              name="imageThree"
              id="image-three"
              onChange={handlePreviewImage}
              accept="image/*"
              required
            />
          </div>
        </div>
      </div>
    
  );
};

export default Images;
// {/* image one */}
// <div className="relative ">
// {previewImage.imageOne !== "" ? (
//   <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 custom-shadow">
//     <img className="object-cover h-full rounded-md" src={previewImage.imageOne} alt="" />
//   </div>
// ) : (
//   <label required htmlFor="image-one" className="">
//     <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 outline-none custom-shadow bg-white">
//       {loading.imageOne ? (
//         <span className="loading loading-spinner loading-xs"></span>
//       ) : (
//         <div className="flex flex-col justify-center items-center absolute top-8 xl:top-10 2xl:top-14 w-full">
//           <img src="/upload.svg" className="h-3" />
//           <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
//           <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
//         </div>
//       )}
//     </div>
//   </label>
// )}{" "}
// <input
//   className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
//                                                 focus:outline-none  bg-white text-gray-900 hidden"
//   type="file"
//   name="imageOne"
//   id="image-one"
//   onChange={handlePreviewImage}
//   accept="image/*"
//   required
// />
//</div>
//{/* image two  */}
//<div className="relative ">
// {previewImage.imageTwo !== "" ? (
//   <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 custom-shadow">
//     <img className="object-cover h-full rounded-md" src={previewImage.imageTwo} alt="" />
//   </div>
// ) : (
//   <label required htmlFor="image-two" className="">
//     <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 outline-none custom-shadow bg-white">
//       {loading.imageTwo ? (
//         <span className="loading loading-spinner loading-xs"></span>
//       ) : (
//         <div className="flex flex-col justify-center items-center absolute top-8 xl:top-10 2xl:top-14 w-full">
//           <img src="/upload.svg" className="h-3" />
//           <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
//           <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
//         </div>
//       )}
//     </div>
//   </label>
// )}{" "}
// <input
//   className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
//                                                 focus:outline-none  bg-white text-gray-900 hidden"
//   type="file"
//   name="imageTwo"
//   id="image-two"
//   onChange={handlePreviewImage}
//   accept="image/*"
//   required
// />
//</div>
//{/* image three */}
//<div className="relative ">
// {previewImage.imageThree !== "" ? (
//   <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 custom-shadow">
//     <img className="object-cover h-full rounded-md" src={previewImage.imageThree} alt="" />
//   </div>
// ) : (
//   <label required htmlFor="image-three" className="">
//     <div className="rounded-lg h-[100px] md:w-[150px]  xl:h-[130px] xl:w-[200px] 2xl:h-[150px] 2xl:w-[150px]  box-border border-2 border-gray-100 outline-none custom-shadow bg-white">
//       {loading.imageThree ? (
//         <span className="loading loading-spinner loading-xs"></span>
//       ) : (
//         <div className="flex flex-col justify-center items-center absolute top-8 xl:top-10 2xl:top-14 w-full">
//           <img src="/upload.svg" className="h-3" />
//           <p className="text-[10px] md:text-[12px] font-normal capitalize">drag & drop a photo or</p>
//           <p className="text-[10px] md:text-[12px] font-medium capitalize text-blue-500">browse</p>
//         </div>
//       )}
//     </div>
//   </label>  bg-[#e9f2f9] shadow-[-2px_-3px_6px_1px_rgba(255,_255,_255,_0.9),_4px_4px_6px_rgba(182,_182,_182,_0.6)]
// )}{" "}
// <input
//   className=" px-3 py-2 rounded-lg shadow-sm border  border-none w-full
//                                                 focus:outline-none  bg-white text-gray-900 hidden"
//   type="file"
//   name="imageThree"
//   id="image-three"
//   onChange={handlePreviewImage}
//   accept="image/*"
//   required
// />
//</div>
//const Group = () => {
// return (
//   <div className="w-full relative h-[117px]">
//     <div className="absolute h-[calc(100%_+_3px)] w-[calc(100%_+_3px)] top-[-1.5px] right-[-1.5px] bottom-[-1.5px] left-[-1.5px] shadow-[-5px_-5px_20px_rgba(255,_255,_255,_0.8),_5px_5px_20px_rgba(0,_0,_0,_0.2)] rounded-[7px] bg-aliceblue-100 box-border border-[1.5px] border-solid border-white" />
//   </div>
// );
//;
//
//xport default Group;
