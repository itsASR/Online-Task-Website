/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import deposit from "../../assets/deposit.png"
import withdraw from "../../assets/withdraw.png"
import transection from "../../assets/transection.png"
import refer from "../../assets/referel.png"
import vip from "../../assets/vip.png"
import "./dashboard.css"
import UserProfile from './UserProfile'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import History from './History'
import Vip from './Vip'
import Refers from './Refers'

export default function Dashboard() {

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>

        <UserProfile/>

        <div className='container m-auto w-[70vw]  rounded-lg pb-4 pt-4'>
            <div className='font-bold'>Total Balance : $2500</div>
            <div className='flex justify-center justify-between m-auto  text-center align-center mt-4 gap-2 w-[70vw]'>
              <div className='dashboard-card-1 w-[17%] cursor-pointer ' onClick={() => changeTab(1)}> <img alt='icon' src={deposit} className='w-12'/> Deposit</div>
              <div className='dashboard-card-1 w-[17%] cursor-pointer ' onClick={() => changeTab(2)}> <img alt='icon' src={withdraw} className='w-12'/> Withdraw</div>
              <div className='dashboard-card-1 w-[17%] cursor-pointer ' onClick={() => changeTab(3)}> <img alt='icon' src={transection} className='w-12'/> History</div>
              <div className='dashboard-card-1 w-[17%] cursor-pointer ' onClick={() => changeTab(4)}> <img alt='icon' src={vip} className='w-12'/> VIP</div>
              <div className='dashboard-card-1 w-[17%] cursor-pointer ' onClick={() => changeTab(5)}> <img alt='icon' src={refer} className='w-12'/> Referral</div>
            </div>
        </div>

        <div className='container m-auto w-[70vw]  rounded-lg pb-4 pt-4 bg-[#bebbff]'>
          <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
            <Deposit/>
          </div>

          <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
            <Withdraw/>
          </div>

          <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
            <History/>
          </div>

          <div className={`${activeTab === 4 ? 'block' : 'hidden'}`}>
            <Vip/>
          </div>

          <div className={`${activeTab === 5 ? 'block' : 'hidden'}`}>
            <Refers/>
          </div>
        </div>

        
    </div>
  )
}
