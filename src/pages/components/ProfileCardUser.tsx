import React, { useState } from "react";
import TopStreamer from "./TopStreamer";
import logo from "../../img/logo.png";
import AccountOwner from "./AccountOwner";
import Achievements from "./Achievements";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import bages from "../../img/bdg.png";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { handelProfile } from "./RightbarData";
import { useParams } from "react-router-dom";
import { online } from "../Data/online";
import Cover from "../../img/bg33.png";
import { MdModeEditOutline } from "react-icons/md";
import ProgressBar from "@ramonak/react-progress-bar";

const ProfileCardUser: React.FC = () => {
  const { friendId } = useParams<{ friendId: string }>();
  const friendIdNumber = friendId ? parseInt(friendId, 10) : undefined;

  const friendInfo = online.find((friend) => friend.id === friendIdNumber);

  return (
    <main className=" overflow-scroll resultUserContainer flex flex-col w-full  overflow-y-auto mb-14">
      <div className="flex w-full mx-auto pr-5 lg:px-6 py-8 ">
        <div className="flex flex-col w-full h-full text-gray-900 text-xl ">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex md:flex-row flex-col w-full justify-center h-full text-gray-900 text-xl "
          >
            {/* <AccountOwner /> */}
            <div className="bg-[#3f3b5b91] min-w-screen rounded-3xl mb-11 shadow-2xl">
              <div className="dark:!bg-navy-800 shadow-shadow-500 mb-5 shadow-3xl flex justify-center rounded-primary relative mx-auto  h-full w-full max-w-[90rem] flex-col items-center bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
                <div
                  className="relative flex h-60 w-full md:w-[35rem] lg:w-[86rem] justify-center items-end rounded-3xl bg-cover -mt-3 shadow-lg"
                  title="object-center"
                  style={{
                    // backgroundImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca2fa29-36c0-4b87-aa20-6848ad75c66b/d62n5by-9ef8ff16-8b2d-41c6-849f-093129d3ac3a.jpg/v1/fill/w_1203,h_664,q_70,strp/mercenaries_by_real_sonkes_d62n5by-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgzIiwicGF0aCI6IlwvZlwvYmNhMmZhMjktMzZjMC00Yjg3LWFhMjAtNjg0OGFkNzVjNjZiXC9kNjJuNWJ5LTllZjhmZjE2LThiMmQtNDFjNi04NDlmLTA5MzEyOWQzYWMzYS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cj4Pf9CSyiVk-cjTsZKAeHUcLPPKP6h-el1mMuLDJmo")',
                    backgroundImage: `url(${Cover})`,
                  }}
                >
                  <div className=" flex h-[98px] w-[98px] items-center -m-11 justify-center rounded-full border-[4px] border-white bg-pink-400">
                    <img
                      className="h-full w-full rounded-full "
                      src={friendInfo?.src}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className=" flex flex-col w-full lg:flex-row  mt-10 justify-between space-x-2
             flex-col-reverse px-20"
                >
                  <div className="mt-4 flex md:!gap-14 -mr-48">
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">
                        {friendInfo?.GamesPlayed}
                      </h3>
                      <p className="text-[#A3AED0] text-sm font-normal w-24">
                        Games Played
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">
                        {friendInfo?.Win}
                      </h3>
                      <p className="text-[#A3AED0] text-sm font-normal">Win</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">
                        {friendInfo?.Loss}
                      </h3>
                      <p className="text-[#A3AED0] text-sm font-normal">Loss</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center pl-60">
                    <h4 className="text-white text-4xl flex-row font-bold lg:mt-4 mt-0">
                      {friendInfo?.name}
                    </h4>

                    <MdModeEditOutline className=" w-6 flex items-center justify-center mx-2 text-gray-400" />
                  </div>
                  <div className="flex justify-center mt-4 md:mt-4">
                    <button className="bg-gradient-to-br from-[#fe764dd3] to-[#ce502ad3] rounded-2xl px-3 mx-4 shadow-2xl">
                      Edit Profile Photo
                    </button>
                    <button className="bg-gradient-to-br from-[#fe764dd3] to-[#ce502ad3] rounded-2xl px-3 shadow-2xl">
                      Add Friend
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col items-center  w-full ">
            <div className="flex lg:flex-row flex-col space-y-2 justify-center lg:space-x-3 lg:space-y-0">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex-1 p-4 bg-[#3f3b5b91] rounded-3xl md:w-1/5 shadow-2xl justify-center"
              >
                <div className="flex-1 p-4 ml-4 md:ml-20">
                  <div className=" text-white -ml-4 md:-ml-20 flex justify-center items-center -mt-3 text-4xl font-PalanquinDark">
                    About Me
                  </div>
                  <p className=" text-white max-w-sm w-1 flex justify-center px-3"></p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex-1 p-4 rounded-3xl md:w-1/2 bg-[#3f3b5b91] shadow-2xl mx-2 md:mb-9 lg:mb-0 md:mx-10 justify-center "
              >
                <div className="text-white flex text-center justify-center font-PalanquinDark text-4xl mb-5">
                  Game History
                </div>
                <div className="my-1 flex flex-col max-w-[30rem] mx-auto">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex my-3 lg:w-[30rem] mx-auto px-6 py-8 rounded-[20px] bg-black/20 shadow-2xl"
                    ></div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex-1 p-4 bg-[#3f3b5b91] rounded-3xl md:w-1/2 shadow-2xl mx-2 md:mx-10"
              >
                <div className="flex-1 p-4 ml-4 md:ml-20">
                  <div className=" text-white -ml-4 md:-ml-20 flex justify-center items-center -mt-3 text-4xl font-PalanquinDark">
                    Achievements
                  </div>
                  <div className="flex w-full max-w-2xl h-72 px-4 md:px-12 rounded-[46px]  mx-auto">
                    <div className="flex flex-col text-white ">
                      <div className="flex flex-row -ml-20 -mr-11 mt-5 ">
                        <Achievements />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full flex flex-col items-center justify-center mt-2 space-y-10 lg:flex-row lg:space-x-8 lg:justify-center"
          >
            <div className="bg-[#3f3b5b91] rounded-3xl flex flex-col items-center lg:w-1/2">
              <div className="text-white text-center mt-5 text-3xl font-bold">
                Progress
              </div>
              <div className="w-full px-4  mt-5">
                <div className="mb-8 w-full">
                  <div className="bg-light relative flex h-7 w-full  max-w-3xl rounded-2xl bg-slate-300">
                    <div className="bg-[#ce502ad3] absolute top-0 left-0 flex h-full w-[90%] items-center justify-center rounded-2xl text-xs font-semibold text-white">
                      90%
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-96">
              <ProgressBar bgColor='#b22a28' animateOnRender={true} completed={60}/>

              </div> */}
            </div>
            <div className="bg-[#3f3b5b91] rounded-3xl flex flex-col items-center lg:mx-10">
              <p className="text-3xl font-bold text-white mt-5">Badges</p>
              <div className="grid justify-items-end grid-cols-2 md:grid-cols-3 gap-1 space-x-10 m-5 justify-center ">
                <img className="w-24 flex" src={bages} alt="" />
                <img className="w-24 flex" src={bages} alt="" />
                <img className="w-24 flex" src={bages} alt="" />
                <img className="w-24 flex" src={bages} alt="" />
                <img className="w-24 flex" src={bages} alt="" />
                <img
                  className="w-24 flex justify-center items-center mb-5"
                  src={bages}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCardUser;

// interface ProfileCardUserProps {
//   id: number;
//   name: string;
//   src: string;
// }
// const ProfileCardUser: React.FC<ProfileCardUserProps> = ({ id, name, src }) => {
//   console.log(name);
