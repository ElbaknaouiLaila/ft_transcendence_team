import React, { useState } from "react";
import TopStreamer from "./TopStreamer";
import Raket from "../../img/Raket.png";
import Astronaut from "../../img/Astronaut.png";
import Rakets from "../../img/Rakets.png";
import Group from "../../img/Group.png";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Maskgroup from "../../img/Maskgroupp.png";

function Maincontent() {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="overflow-scroll resultContainer flex flex-col w-full  overflow-x-hidden overflow-y-auto mb-14">
      <div className="flex w-full mx-auto px-6  ">
        <div className="flex flex-col w-full h-full text-gray-900 text-xl">
          <div className="flex w-full h-full text-gray-900 text-xl space-x-0 lg:space-x-20 flex-col xl:flex-row">
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex w-full  min-w-[40%] lg:max-w-[60%] h-96 pl-2 lg:pl-10 pt-10 mt-10 rounded-[46px] mx-auto bg-gradient-to-tr from-[#2A2742] via-[#3f3a5f] to-[#2A2742] shadow-2xl"
            >
              <div className="flex flex-col text-white">
                <p className="w-auto text-stone-300 text-xs font-normal ">
                  FREE-TO-PLAY . PLAY-TO-EARN
                </p>
                <h1 className="font-Lemon text-2xl lg:text-[50px] w-[30px] leading-[40px] lg:leading-[50px] mt-1 mb-2">
                  WELCOME TO PING PONG GAME
                </h1>
                <p className="max-w-[60%] text-stone-300 text-xs mt-1 font-normal">
                  Enter the world of paddles and balls Begin your Pong journey
                </p>
              </div>
              <img
                className="max-w-6xl -mt-20 xl:ml-auto hidden lg:block lg:"
                src={Group}
                alt=""
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex w-full justify-between min-w-[40%] lg:max-w-lg h-96 p-12 mt-10 rounded-[46px] mx-auto bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#302c4bc7] shadow-2xl"
            >

              <div className="flex flex-col text-white">
                <h1 className=" text-2xl lg:text-[40px] mb-5">Top Streamer</h1>
                <div className="flex flex-row ">
                  <TopStreamer toggle={toggle} />
                </div>
              </div>
              <img className=" flex -mr-12 h-80" src={Maskgroup} alt="" />
            </motion.div>
            {/* <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
              <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div> */}
          </div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-white font-PalanquinDark text-4xl ml-5 my-8 "
          >
            Game mode
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex w-full max-w-xl h-60 items-center justify-center mt-72 lg:-mt-1 mx-auto"
          >
            <div className="flex flex-col lg:flex-row max-w-5xl  mx-auto gap-8 space-x-4 group">
              <div className="bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#2A2742] justify-start lg:h-60 lg:w-96 md:w-60 w-52 h-56  duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[46px] group-hover:mix-blend-luminosity hover:!mix-blend-normal shadow-2xl">
                <img className="mx-auto md:w-20 lg:w-44" src={Raket} alt="" />
                <h4 className="uppercase text-xl font-bold text-white">
                  classic
                </h4>
              </div>
              <div className="bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#2A2742] lg:h-60 lg:w-96 w-52 h-56 ml-[30rem]  p-0.5 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[46px] group-hover:mix-blend-luminosity hover:!mix-blend-normal shadow-2xl">
                <img className="mx-auto w-40 -mt-7" src={Astronaut} alt="" />
                <span className="uppercase text-xl font-bold text-white ml-8">
                  BOT
                </span>
              </div>
              <div className=" bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#2A2742] lg:h-60 lg:w-96 w-52 h-54  duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[46px] group-hover:mix-blend-luminosity hover:!mix-blend-normal shadow-2xl">
                <img className="mx-auto" src={Rakets} alt="" />
                <h4 className="uppercase text-xl font-bold text-white">
                  Random palyer
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
export default Maincontent;



// <div className="flex flex-row space-y-2 justify-center lg:space-x-2 lg:space-y-0">
//               <motion.div
//                 variants={fadeIn("right", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
                
//                 className="flex-1 p-4 bg-[#3f3b5b91] rounded-3xl md:w-1/5 shadow-2xl justify-center"
//               >
//                 {/* <div className="flex-1 p-4 ml-4 md:ml-20">
//                   <div className=" text-white -ml-4 md:-ml-20 flex justify-center items-center -mt-3 text-4xl font-PalanquinDark">
//                     About Me
//                   </div>
//                   <div className="flex w-full max-w-2xl h-72 px-4 md:px-12 rounded-[46px]  mx-auto">
//                     <div className="flex flex-col text-white "> */}
//                       {/* <div className="flex flex-row -ml-20 -mr-11 mt-5 ">
//                           <Achievements />
//                         </div> */}
//                     {/* </div>
//                   </div>
//                 </div> */}
//                 <div>test1</div>
//               </motion.div>

//               <motion.div
//                 variants={fadeIn("right", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
//                 className="flex-1 p-4 rounded-3xl md:w-1/2 bg-[#3f3b5b91] shadow-2xl mx-2 md:mb-9 lg:mb-0 md:mx-10 justify-center "
//               >
//                 {/* <div className="text-white flex text-center justify-center font-PalanquinDark text-4xl mb-5">
//                   Game History
//                 </div>
//                 <div className="my-1 flex flex-col max-w-[30rem] mx-auto">
//                   {[1, 2, 3].map((item) => (
//                     <div
//                       key={item}
//                       className="flex my-3 w-[30rem] mx-auto px-6 py-8 rounded-[20px] bg-black/20 shadow-2xl"
//                     ></div>
//                   ))}
//                 </div> */}
//                 <div>test2</div>
//               </motion.div>

//               <motion.div
//                 variants={fadeIn("right", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
//                 className="flex-1 p-4 bg-[#3f3b5b91] rounded-3xl md:w-1/2 shadow-2xl mx-2 md:mx-10"
//               >
//                 {/* <div className="flex-1 p-4 ml-4 md:ml-20">
//                   <div className=" text-white -ml-4 md:-ml-20 flex justify-center items-center -mt-3 text-4xl font-PalanquinDark">
//                     Achievements
//                   </div>
//                   <div className="flex w-full max-w-2xl h-72 px-4 md:px-12 rounded-[46px]  mx-auto">
//                     <div className="flex flex-col text-white ">
//                       <div className="flex flex-row -ml-20 -mr-11 mt-5 ">
//                         <Achievements />
//                       </div>
//                     </div>
//                   </div>
//                 </div> */}
//                 <div>test3</div>
//               </motion.div>
//               {/* </div> */}
//             </div>