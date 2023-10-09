import { type } from "os";
import React, {FC,useState, useMemo, useRef, useEffect } from "react";
import {RE_DIGIT} from "../constants"
import OtpInput from 'react-otp-input';
import { constants } from "buffer";

// type Props ={
//   value: string;
//   valueLength: number;
//   onChange: (value: string) => void;
// }

// function Otpinput({value, valueLength, onChange}: Props)
// {
//   const valueItems = useMemo(() =>{
//     const valueArray = value.split('');
//     const items: Array<string> = [];
//     for(let i = 0; i< valueLength; i++){
//       const char = valueArray[i];
//       // const re = new RegExp(/^d+$/);

//       if(RE_DIGIT.test(char)){
//         items.push(char);
//       }else{
//         items.push('');
//       }
//     }
//     return items;
//   }, [value, valueLength]);

//   const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, idx:number)=>{
//     const target = e.target;
//     let targetValue = target.value;
//     const isTargetValueDigit = RE_DIGIT.test(targetValue);


//     if(!isTargetValueDigit && targetValue !== '')
//     {
//       return;
//     }
    
//     targetValue = isTargetValueDigit ? targetValue : ' ';

//     const newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
//     onChange(newValue);

//     if(!isTargetValueDigit)
//       return;
//     const nextElementSibling = target.nextElementSibling as HTMLInputElement | null;

//     if (nextElementSibling){
//       nextElementSibling.focus();
//     }
//   }

//   return(
//     <div className='relative flex flex-col justify-center p-8 items-center md:p-14'>
//       <div className='flex flex-row justify-center p-3 md:pl-14 md:pr-14'>
//         {valueItems.map((digit, idx) =>(
//           <input 
//             key={idx} 
//             type="text"
//             inputMode="numeric"
//             autoComplete="one-time-code"
//             pattern="\d{1}"
//             maxLength={6}
//             className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1'
//             value={digit}
//             onChange={(e) => inputOnChange(e, idx)}
//             />
//         ))}
//         {/* <input type="text" className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1'/>
//         <input type="text" className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-3'/>
//         <input type="text" className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1'/>
//         <input type="text" className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1'/>
//         <input type="text" className='bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1'/> */}
//       </div>
//       <button className='font-bold w-1/2 text-white hover:scale-105 duration-300 bg-[#FE754D] p-2 rounded-full mb-3 mt-3'>Verify</button>
//     </div>
//   );
// }
interface Props {}

const Otpinput:FC<Props>=(props): JSX.Element=>{
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnChange=({target}: React.ChangeEvent<HTMLInputElement>, index:number):void =>{
    const {value} = target;
    const newOTP:string[] = [...otp]

    newOTP[index] = value.substring(value.length-1);
    
    if(!value) setActiveOTPIndex(index - 1);
    else setActiveOTPIndex(index + 1);
    setOtp(newOTP)
  };
  useEffect(()=>{
    inputRef.current?.focus();
  }, [activeOTPIndex])
  return(
    <div className='relative flex flex-col justify-center p-8 items-center md:p-14'>
      <div className='flex flex-row justify-center p-3 md:pl-14 md:pr-14'>
        {otp.map((_, index)=>{
          return(
            <React.Fragment key={index}>
              <input
              ref = {index === activeOTPIndex ? inputRef : null}
                type="number"
                className='remove-arrow bg-[#B7B7C9] rounded-[10px] w-10 h-10 mr-1 text-[#3b3760] font-bold text-center font-zcool'
                onChange={(e)=>handleOnChange(e, index)}
                value={otp[index]}
              />
              {
                
              }
            </React.Fragment>
          )
        })}
      </div>
      <button className='font-bold w-1/2 text-white hover:scale-105 duration-300 cursor-pointer bg-gradient-to-br from-[#FE754D] to-[#ce502a] p-2 rounded-full mb-3 mt-3 shadow-2xl'>Verify</button>
      {/* i h-16 w-64 bg-gradient-to-br from-yellow-400 to-yellow-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out */}
    </div>);
}
export default Otpinput;