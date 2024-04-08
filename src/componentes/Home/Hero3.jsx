import React from "react";
import './Hero3.css';
import bank from './Bank.jpg'
import upi from './upi.jpg'
import phonepe from './phonepe.png'
import googlepay from './gpay.png'
import paytm from './paytm.png'
import giftcard from './gift card.png'
// import referimg from "../../assets/refer.png";

export default function Hero3() {
  return (
    <>
      <div className="slide5 lg:h-screen flex flex-col-reverse lg:flex-row items-center text-center">
        <div className='slide5right lg:w-1/2'>
          <div className='slide5payments [&>img]:w-24 w-80 mx-auto border-2 border-black rounded-xl grid grid-cols-2 gap-y-5 gap-x-10 justify-center items-center pl-5'>
            <img src={bank}></img>
            <img src={upi}></img>
            <img src={phonepe}></img> 
            <img src={googlepay}></img>
            <img src={paytm}></img>
            <img src={giftcard}></img>
          </div>
        </div>
        {/*   */}
        <div className='slide5left lg:w-1/2 lg:pr-20 py-10'>
          <div>
            <p className="text-5xl text-center font-bold">Now You Can Withdraw Money Easily</p>
            <button className="text-2xl py-2 px-4 rounded-3xl bg-green-400 mt-5 font-semibold">Know More</button>
          </div>
        </div>

      </div>
    </>
  );
}
