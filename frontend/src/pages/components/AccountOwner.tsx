import React from "react";
import Arcane from "../../img/Arcane.png";
import { Data } from "../Data/AccountOwnerData";
import scr from "../../img/Screenshot.png";
import Cover from "../../img/bg33.png";
import { MdModeEditOutline } from "react-icons/md";

function AccountOwner() {
  return (
    <div className="bg-[#3f3b5b91] min-w-screen rounded-3xl mb-11 shadow-2xl">
      {Data.map((data) => {
        return (
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
                  src={data.src}
                  alt=""
                />
              </div>
            </div>
            {/* <div className="flex mt-16 justify-between items-center w-full">
              <div>first</div>
              <div>second</div>
              <div>therd</div> */}
            <div
              className=" flex flex-col w-full lg:flex-row  mt-10 justify-between space-x-2
             flex-col-reverse px-20"
            >
              <div className="mt-4 flex md:!gap-14 -mr-48">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {data.GamesPlayed}
                  </h3>
                  <p className="text-[#A3AED0] text-sm font-normal w-24">
                    Games Played
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{data.Win}</h3>
                  <p className="text-[#A3AED0] text-sm font-normal">Win</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{data.Loss}</h3>
                  <p className="text-[#A3AED0] text-sm font-normal">Loss</p>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center pl-60">
                <h4 className="text-white text-4xl flex-row font-bold lg:mt-4 mt-0">
                  {data.name}
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
          // <div key={data.id} className="flex w-full max-w-[900px] h-72 pl-10 pt-10 mb-5  rounded-[46px] mx-auto bg-gradient-to-tr from-[#3F3B5B] via-[#2A2742] to-[#3f3a5f] shadow-2xl">
          //   <img className=" w-16 h-16 lg:w-28 lg:h-28  p-1 rounded-full ring-4 ring-gray-300 dark:ring-[#3b3c5a]" src={data.src} alt="" />
          //   <div className="flex flex-col text-white">
          //     <h3 className=" font-Lalezar font-bold text-3xl ml-3 lg:ml-10">Jinx</h3>
          //     <hr className=" text-gray-400 mx-14 my-8 md:w-96" />
          //     <div className='flex flex-row mb-4'>
          //       <span className=' -ml-16 lg:ml-9 text-sm'>Games Played</span> <span className=' ml-5 lg:ml-10 text-sm text-gray-400'>{data.GamesPlayed}</span>
          //     </div>
          //     <div className='flex flex-row mb-4'>
          //       <span className='-ml-16 lg:ml-9 text-sm'>Win</span> <span className=' ml-5 lg:ml-10 text-sm text-gray-400'>{data.Win}</span>
          //     </div>
          //     <div className='flex flex-row'>
          //       <span className='-ml-16 lg:ml-9 text-sm' >Loss</span> <span className='ml-5 lg:ml-10 text-sm text-gray-400'>{data.Loss}</span>
          //     </div>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
}

export default AccountOwner;
