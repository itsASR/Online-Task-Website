import React from 'react'
import qrcode from "../../assets/qr.png"

export default function Deposit() {
  return (
    <div>
        <div className='flex flex-wrap justify-between justify-center mt-4'>
            <div className='w-[45%] '> <img alt='qr' src={qrcode} className='w-[72%] m-auto'/> </div>
            <div className='w-[45%] '>
            <section class="">
            <div class="flex flex-col items-center justify-center px-6 py-8 pt-0  mx-auto ">
                
                <div class="w-full  rounded-lg  sm:max-w-md xl:p-0 ">
                    <div class=" space-y-4 md:space-y-6 ">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Complete your deposit
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="text" name="utr" id="refrence_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your UPI transection id" required=""/>
                            </div>
                            <div>
                                <input type="number" name="amount" id="amount" placeholder="Amount" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>

                            <div>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />    
                            </div>
                            
                            <button type="submit" class="w-full text-white bg-[#00bf63] py-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Deposit</button>
                            
                        </form>
                    </div>
                </div>
            </div>
          </section>
            </div>
        </div>
    </div>
  )
}
