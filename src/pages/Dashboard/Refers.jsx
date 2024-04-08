/* eslint-disable no-unused-vars */
import React from "react";
import qrcode from "../../assets/withdraw2.png";

export default function Refers() {

  const data =[
    {
      id:1,
      name:"Ajay",
      uid: "GRF012H",
      level: 1,
      date: "23-04-2024",
      status : "success",
      commission : "$50",
    },
    {
      id:2,
      name:"Vipul",
      uid: "GRF013K",
      level: 2,
      date: "25-04-2024",
      status : "pending",
      commission : "$0",
    }
  ]
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.No.
              </th>
              <th scope="col" class="px-6 py-3">
                UID
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Level
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Commission
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index)=>(
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}.
              </th>
              <td class="px-6 py-4"> {item.uid} </td>
              <td class={`px-6 py-4  flex align-center ${item.status ===  'pending' ? 'text-[red]' : 'text-[green]' }`}  > {item.name} <span className={`h-3 w-3 mt-1 ml-1 rounded-full ${item.status === 'pending' ? 'bg-[red]' : 'bg-[green]'}`} ></span> </td>
              <td class="px-6 py-4"> {item.level} </td>
              <td class="px-6 py-4"> {item.date} </td>
              <td class={`px-6 py-4 ${item.status === 'pending' ? 'text-[red]' : 'text-[green]'}`}> {item.status} </td>
              <td class="px-6 py-4 text-[green]"> {item.commission} </td>
              
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
