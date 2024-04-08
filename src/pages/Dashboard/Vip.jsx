/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GetPlanDetails } from "../../controller/userController";

export default function Vip() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await GetPlanDetails();
        setData(fetchedData.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <div className="text-center text-2xl font-semibold">
        Your current plan is{" "}
      </div>
      
      <div className="bg-[#e5dfff] p-4 rounded-lg shadow-lg max-w-sm m-auto mt-2">
        <p className="text-center text-3xl font-bold">Free</p>
        <div className="flex justify-center mt-2">
                    <p className="font-extrabold text-2xl text-[#046f17]">
                      {" "}
                      ₹300
                    </p>
                    <p className="text-sm opacity-60 mt-2">/month</p>
                  </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 px-8 gap-10 text-zinc-800 mt-10">
          {data &&
            data.slice(1).map((item, index) => (
              <div className={`flex flex-col items-center bg-[#e5dfff] p-8 rounded-lg shadow-lg max-w-sm ${item.name === "Gold" ? "bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200" : ""}`} >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-20 h-20 absolute -top-11 -left-11 fill-red-400"
            >
              <path
                fill-rule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
              POPULAR
            </p>  
              <div>
                  <h2 className={`font-extrabold text-3xl text-center mb-2 ${item.name ==="Gold" ? "text-[#c77900]" : "text-black"}`} >
                    {item.name}
                  </h2>
                  <p className="opacity-60 text-center">
                    In this {item.name} plan you can earn upto
                  </p>
                  <div className="flex flex-col items-center my-8 mt-4">
                    <p className="font-extrabold text-4xl text-[#046f17]">
                      {" "}
                      ₹{item.earn_upto}
                    </p>
                    <p className="text-sm opacity-60">/month</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <b> {item.total_video} Videos task </b>
                  </p>
                  <p className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <b> {item.total_like} Like task </b>
                  </p>
                  <p className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <b> {item.total_comment} Comment task </b>
                  </p>
                  
                  <p className="flex items-center text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>{" "}
                    {item.name === "Gold" ? "Quick call support" : "Basic support"}
                  </p>
                  {item.name === "Gold" ? (
                    <div>
                      <p className="flex items-center text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>{" "}
                        Instant deposit & withdrawal
                      </p>
                      
                    </div>
                  ) : (
                    <p className="invisible">Hii</p>
                  )}
                  <div className="flex justify-center mt-8 ">
                    <button className="border px-4 py-2 bg-[#00bf63] text-white font-semibold border-violet-400 border-4  rounded-xl">
                      Buy ₹{item.price}/month
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
