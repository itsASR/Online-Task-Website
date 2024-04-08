/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bg1 from "../assets/register-bg-1.jpg";
import { api } from "../config/api";

export default function Register() {
  const[formError, setFormError] = useState("")
  const[creating,setCreating] = useState(false)

  const [user, setUser] = useState({
    user_name: "",
    mobile: "",
    password: "",
    reffer_by: ""
  });

  const register = async(e) => {
    e.preventDefault();
    setCreating(true)
    if (user.password.length < 6) {
      setFormError("Password should be more then 6 letters");
      setCreating(false);
      return;
    }  else if (user.user_name === "" || user.user_name.length < 3) {
      setFormError("Username required");
      setCreating(false);
      return;
    } else if (user.mobile === "" || user.mobile.length < 10) {
      setFormError("Mobile number required");
      setCreating(false);
      return;
    }
    try {
      await fetch(`${api.API_URL}user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: user.user_name,
          mobile: user.mobile,
          password: user.password,
          reffer_by : user.reffer_by
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setFormError("Something went wrong.");
            setCreating(false);
          }
          return response.json();
        })
        .then((response) => {
          if (response.status === true) {
            window.alert("Thanks for register with us.");
            setCreating(false);
            window.location.href = "/login"
          }
          setFormError(response.message);
          setCreating(false);
        })
        .catch((error) => {
          setFormError("There was an error with the fetch operation:");
          setCreating(false);
        });
    } catch (error) {
      setFormError("There was an error with the fetch operation:");
      setCreating(false);
    }
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { user_name, mobile, password, reffer_by } = user;

  return (
    <div className="">
      <div
        className="bg-no-repeat	bg-cover "
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="flex flex-col items-center  bg-[#c2efffb0] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Your Account
              </h1>
              <p className="text-[red]">{formError}</p>
              <form className="space-y-4 md:space-y-6" onSubmit={register}>
                <div>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="User name"
                    required=""
                    value={user_name}
                    onChange={handleDataChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91-9876543210"
                    required=""
                    value={mobile}
                    onChange={handleDataChange}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={handleDataChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="reffer_by"
                    id="reffer_by"
                    placeholder="Referral code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={reffer_by}
                      onChange={handleDataChange}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-[green]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   dark:focus:ring-primary-800"
                >
                  {creating ? "Creating..." : "Create account"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
