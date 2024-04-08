import React from 'react'
import Header from '../layout/header'
import './Banner.css'
import ayush from './Aisha.png'

function Banner() {
  return (
    <>
    <Header></Header>
    {/* slide1 h-screen bg-cover bg-no-repeat flex justify-between bg-center text-white px-12 items-center */}
      <div className='lg:bg-fullimg bg-mobileimg 
      bg-cover bg-no-repeat bg-center h-screen lg:flex justify-between text-white items-center lg:px-12'>
      {/* slide1Left text-4xl w-2/5 [&>p]:py-2 font-semibold */}
        <div className="slide1Left lg:text-4xl lg:w-2/5 text-2xl md:text-3xl lg:[&>p]:py-2 font-semibold px-3 text-center pt-20 lg:pt-0">
          <p>"Unlock the path to earning with <span style={{color:'yellow'}}>zero Investment!</span> Start now and Grow your Money!"</p>
          <p className='animate-pulse	lg:text-xl text-sm pt-5'>All you Need is PC/Mobile and Internet Connection.</p>
          <button className='bg-white text-green-400 text-3xl py-1 border-0 px-3 rounded-2xl mt-4 font-sans '>START EARNING</button>
          {/* bg-white text-green-400 text-3xl py-1 border-0 px-3 rounded-2xl mt-4 font-sans */}
        </div>
       
      </div>
    </>
  )
}

export default Banner