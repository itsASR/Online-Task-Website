import React from 'react'
import MaximizedEarnings from '../Compare Pics/Maximized Earnings.png'
import  Variety from '../Compare Pics/Task Variety.png'
import Sooners from '../Compare Pics/Get Your Money Sooners.png'
import Trust from '../Compare Pics/trust.png'
import Rewards from '../Compare Pics/rewards.png'
import Mobile from '../Compare Pics/mobileexp.png'

function Hero5() {
    return (
        <>
            <div className="slide7 mb-10">
            {/* slide7Heading text-center text-4xl font-bold pb-20 */}
                <p className='text-center font-bold py-10 text-4xl px-10 sm:text-5xl md:py-20'>Why We are Better than others?</p>
                {/* pb-10 pl-28 grid grid-cols-3 gap-y-10 items-center justify-center text-center */}
                <div className='md:pb-10 grid items-center justify-center text-center  gap-y-10 sm:gap-x-10 md:gap-x-0 sm:grid-cols-2 lg:grid-cols-3  sm:px-10 md:px-0'>

                    <div
                        className="hover:scale-110 block max-w-[20rem] mx-auto sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96 ">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                className="w-20 mx-auto pt-5"
                                src={MaximizedEarnings}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Maximized Earnings</p>
                            <p className="">
                                Earn more money for the tasks you complete compared to other platforms. With higher payouts, your efforts translate into more significant rewards, helping you reach your financial goals faster.                            </p>
                        </div>
                    </div>

                    <div
                        className="hover:scale-110  block max-w-[20rem] mx-auto sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                class="w-20 mx-auto pt-5"
                                src={Variety}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Task Variety Tailored to You</p>
                            <p className="">
                            Enjoy a diverse range of tasks that match your interests and skills. Whether you prefer Like a post, comment, watching videos, or other activities, there's something for everyone, ensuring you have fun while earning. </p>                       </div>
                    </div>

                    <div
                        className="hover:scale-110  block max-w-[20rem] mx-auto sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                class="w-20 mx-auto pt-5"
                                src={Sooners}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Get Your Money Sooners</p>
                            <p class="">
                            Receive your earnings quickly and hassle-free. With fast payouts, you can access your hard-earned money without delay, providing peace of mind and flexibility in managing your finances.                            </p>
                        </div>
                    </div>



                    <div
                        class="hover:scale-110  block max-w-[20rem] mx-auto sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                class="w-20 mx-auto pt-5"
                                src={Trust}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Trust and Transparency</p>
                            <p class="">
                            Feel confident knowing exactly what to expect. Our platform prioritizes transparency, ensuring clear communication about task requirements, payout structures, and terms of service, so you can trust that you're being treated fairly. </p>
                        </div>
                    </div>

                    <div
                        class="hover:scale-110  block max-w-[20rem] mx-auto sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                class="w-20 mx-auto pt-5"
                                src={Rewards}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Exclusive Rewards Just for You</p>
                            <p class="">
                            Access special deals and bonuses that are unique to our platform. Take advantage of exclusive offers from our partners, enhancing your earning potential and making your experience even more rewarding. </p>
                        </div>
                    </div>

                    <div
                        class="hover:scale-110  block max-w-[20rem] mx-auto max-w-[20rem]sm:max-w-[18rem] md:max-w-[20rem] rounded-lg bg-gray-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-96 ">
                        <div class="relative overflow-hidden bg-cover bg-no-repeat">
                            <img
                                class="w-20 mx-auto pt-5"
                                src={Mobile}
                                alt="" />
                        </div>
                        <div class="p-6">
                            <p className='font-bold text-2xl pb-2'>Seamless Mobile Experience</p>
                            <p class="">
                            Earn money on the go with our mobile-friendly platform. Whether you're at home, commuting, or waiting in line, you can complete tasks conveniently from your smartphone or tablet, maximizing your earning opportunities wherever you are.  </p>
                        </div>
                    </div>




                </div>



            </div>
        </>
    )
}

export default Hero5