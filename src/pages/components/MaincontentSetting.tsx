import React from "react";
import Arcan from "../../img/Arcane.png";
import { Data } from "../Data/AccountOwnerData";
import { TbPhotoEdit, TbUserEdit } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function MaincontentSetting() {
  return (
    <>
      {Data.map((data) => {
        return (
            <section key={data.id} className="text-gray-600 body-font   w-full">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center ">
                  <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="p-4 md:w-1/3 w-full"
                  >
                    <div className=" text-white text-4xl font-PalanquinDark mb-10">
                      Account Setting{" "}
                    </div>
                    <div className="h-full   bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#302c4bc7] shadow-2xl p-8 rounded-[46px]  ">
                      <div className="flex flex-col justify-center items-center">
                        <img
                          className="w-28 h-28  p-1 rounded-full ring-4 ring-gray-300 dark:ring-[#3b3c5a]"
                          src={Arcan}
                          alt=""
                        />
                        <span className=" font-Lalezar font-bold text-4xl  mt-5 text-white">
                          Jinx
                        </span>
                      </div>
                      <div className=" flex flex-col  items-center">
                        <div className=" flex justify-center items-center my-6 text-sm px-4 md:w-80 bg-gradient-to-tr from-[#3f3b5b7e] via-[#3d395896] to-[#4d477498] shadow-2xl rounded-full p-4">
                          <div className="flex flex-col items-center font-semibold mr-4">
                            <div className="text-sm text-white">
                              Games Played
                            </div>
                            <div className=" text-sm text-gray-500 font-bold">
                              {data.GamesPlayed}
                            </div>
                          </div>
                          <div className="flex flex-col items-center font-semibold mr-4">
                            <div className="text-sm text-white">Win</div>
                            <div className=" text-sm text-gray-500 font-bold">
                              {data.Win}
                            </div>
                          </div>
                          <div className="flex flex-col items-center font-semibold">
                            <div className="text-sm text-white">Loss</div>
                            <div className=" text-sm text-gray-500 font-bold">
                              {data.Loss}
                            </div>
                          </div>
                        </div>
                        <div className=" flex flex-row text-white items-center text-center">
                          <TbUserEdit className="text-2xl" />
                          <div className=" ml-3 text-lg text-center items-center">
                            Edit Profile Photo
                          </div>
                        </div>
                        <div className=" flex flex-row text-white items-center text-center mt-5">
                          <TbPhotoEdit className="text-2xl" />
                          <div className=" ml-3 text-lg text-center items-center">
                            Edit Profile Name
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="p-4 md:w-1/3 w-full space-x-10"
                  >
                    <div className=" text-white text-4xl font-PalanquinDark mb-10 ml-10">
                      Help
                    </div>
                    <div className="h-full  bg-gradient-to-tr from-[#3F3B5B] via-[#2a2742af] to-[#454069c7] shadow-2xl  p-8 rounded-[46px]">
                      <p className="leading-relaxed mb-6">
                        Synth chartreuse iPhone lomo cray raw denim brunch
                        everyday carry neutra before they sold out fixie 90's
                        microdosing. Tacos pinterest fanny pack venmo,
                        post-ironic heirloom try-hard pabst authentic iceland.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
        );
      })}
    </>
  );
}

export default MaincontentSetting;
// import React, { useState } from 'react';
// import Arcan from '../../img/Arcane.png';
// import { Data } from '../Data/AccountOwnerData';
// import { TbPhotoEdit, TbUserEdit } from 'react-icons/tb';
// import { motion } from 'framer-motion';
// import { fadeIn } from './variants';

// function MaincontentSetting() {
//   const [editMode, setEditMode] = useState(false);
//   const [newAvatar, setNewAvatar] = useState<File | null>(null);

//   const toggleEditMode = () => {
//     setEditMode(!editMode);
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files[0];
//     if (file && file.type.startsWith('image/')) {
//       // Validate that the selected file is an image
//       setNewAvatar(file);
//     } else {
//       // Handle invalid file type or no file selected
//       setNewAvatar(null);
//     }
//   };

//   const getCurrentAvatar = () => {
//     if (editMode && newAvatar) {
//       return URL.createObjectURL(newAvatar); // Show the new avatar when in edit mode
//     }
//     return Arcan; // Show the current avatar otherwise
//   };

//   return (
//     <>
//       {Data.map((data) => {
//         return (
//           <>
//             <section className="text-gray-600 body-font w-full">
//               <div className="container px-5 py-24 mx-auto">
//                 <div className="flex flex-wrap -m-4 justify-center">
//                   <motion.div
//                     variants={fadeIn('right', 0.2)}
//                     initial="hidden"
//                     whileInView={'show'}
//                     viewport={{ once: false, amount: 0.7 }}
//                     className="p-4 md:w-1/3 w-full"
//                   >
//                     <div className="text-white text-4xl font-PalanquinDark mb-10">
//                       Account Setting{' '}
//                     </div>
//                     <div className="h-full bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#302c4bc7] shadow-2xl p-8 rounded-[46px]">
//                       <div className="flex flex-col justify-center items-center">
//                         <div className="relative">
//                           <img
//                             className="w-28 h-28 p-1 rounded-full ring-4 ring-gray-300 dark:ring-[#3b3c5a]"
//                             src={getCurrentAvatar()}
//                             alt=""
//                             onClick={toggleEditMode}
//                           />
//                           {editMode && (
//                             <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleFileChange}
//                               />
//                             </div>
//                           )}
//                         </div>
//                         <span className="font-Lalezar font-bold text-4xl mt-5 text-white">
//                           Jinx
//                         </span>
//                         <div  onClick={toggleEditMode}>upload </div>
//                       </div>
//                       {/* ... Other content ... */}
//                     </div>
//                   </motion.div>
//                   {/* ... Other sections ... */}
//                 </div>
//               </div>
//             </section>
//           </>
//         );
//       })}
//     </>
//   );
// }

// export default MaincontentSetting;
