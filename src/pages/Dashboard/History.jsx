/* eslint-disable no-unused-vars */
import React from "react";
import qrcode from "../../assets/withdraw2.png";

export default function History() {
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
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Type
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1.
              </th>
              <td class="px-6 py-4">70$</td>
              <td class="px-6 py-4 text-[green]">Deposit</td>
              <td class="px-6 py-4">23-04-2024</td>
              <td class="px-6 py-4 text-[green]">Success</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
