import React from 'react'
// import referimg from "../../assets/refer.png"
import './Hero2.css'
import Aisha from './Aisha.png'
import pic2 from '../Compare Pics/pic2.png'
import pic1 from '../Compare Pics/pic1.png'
import pic3 from '../Compare Pics/pic3.png'
import CountUp from 'react-countup';

export default function Hero2() {
    return (
        <>
            <div className='slide4 md:flex'>
                <div className='md:w-1/2'>
                    {/*  pl-10*/}
                    <p className='slide4P text-4xl text-center py-10 font-bold px-2 '>JOIN OUR COMMUNITY </p>
                    <div className='[&>*]:pb-6 md:[&>*]:pb-12 font-semibold flex flex-col mx-auto text-center items-center '>
                        <div className='slide4InfoSubDiv'>
                            <p><CountUp
                                end={24576}
                                duration={15} />+</p>
                            <p>Active Users</p>
                        </div>
                        <div className='slide4InfoSubDiv'>
                            <p>RS <CountUp
                                end={553142}
                                duration={15} />+</p>
                            <p>WITHDRAWAL</p>
                        </div>
                        <div className='slide4InfoSubDiv'>
                            <p><CountUp
                                end={50}
                                duration={15} />+</p>
                            <p>COUNTRIES</p>
                        </div>
                    </div>

                </div>

                <div className='comments  w-80 md:w-96 h-96 border-2 border-black m-auto rounded-lg overflow-hidden px-5 py-5 '>

                    <div className='mega-comment'>
                        <div className='comment1 '>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic2} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Mohammed</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Impressive earning potential and diverse tasks. My favorite platform for extra income</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic1} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Anita</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Thanks for the user-friendly experience and fast payouts. Keep it up!</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic3} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Santosh</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Appreciate the transparency and trustworthiness. Peace of mind while earning!</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic1} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Love the supportive community vibe. Makes earning even more enjoyable!</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic2} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Grateful for a platform that listens to user feedback. Always improving!</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic3} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Thankful for the emphasis on security and privacy. Earn with confidence</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic2} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Fantastic platform! Always exceeding my expectations.</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic1} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Been a game-changer for me. Thanks for the extra income opportunities</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic3} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Impressive earning potential and diverse tasks. My favorite platform for extra income</div>
                                </div>
                            </div>
                        </div>

                        <div className='comment1'>

                            <div class="items-center gap-4 bg-gray-300 py-3 rounded-lg px-2 mb-8">
                                <div className='flex items-center'>
                                    <img class="w-20 h-20 rounded-full" src={pic1} alt="" />
                                    <div class="font-medium dark:text-white">
                                        <div className='text-2xl pl-5 font-bold'>Jese Leos</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-md pt-2  dark:text-gray-400">Impressive earning potential and diverse tasks. My favorite platform for extra income</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='slide4end'></div>
            </div>
        </>
    )
}
