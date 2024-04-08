import React from 'react'
import usericon from "../../assets/user.jpg"
import "./dashboard.css"



export default function UserProfile() {
  return (
    <div>
      <div className='container m-auto w-[70vw]'>
            <div className='flex   m-auto bg-[#bebbff] justify-center justify-around p-6 mt-2 rounded-lg'>
                <div className='w-[20%] '> <img alt='user' src={usericon} className='w-[50%] rounded-full  '/> </div>
                <div className='w-[80%] '>
                    <div className='user-detail-1'>UID : 1000</div>
                    <div className='user-detail-1'>Name : Vipul Gehlot</div>
                    <div className='user-detail-1'>Email : mail@gmail.com</div>
                    <div className='user-detail-1'>Mobile : +91-8690708302</div>
                </div>
            </div>
      </div>
    </div>
  )
}
