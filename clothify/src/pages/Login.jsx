import React from "react";
import Image from "../assets/login.png"
import Logo from "../../public/logo.png"

export default function Login() {
    return (
        <div className="w-full h-screen bg-[#fbfcf0] dark:bg-black mt-0  overflow-hidden flex">
            <div className="items-center h-full w-[55%]  flex max-lg:hidden">
                <img src={Image} className="w-[80%] mx-12" alt="Stylish women" />
            </div>
            <div className="flex flex-col gap-8 h-full items-center justify-center w-[45%] mt-[-5%]">
                <img src={Logo} />
                <h1 className="tracking-8 dark:text-white tracking-[8px] text-lg">WELCOME TO CLOTHIFY</h1>
                <form className=" w-[70%] mt-5">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" class="bg-[#FFFFFF] px-5 mb-10 h-11 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none"   placeholder="clothify@gmail.com" required />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" class="bg-[#FFFFFF] h-11 px-5 border focus:outline-inherit border-black text-gray-900 text-sm rounded-sm focus:ring-black focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:outline-none" placeholder="•••••••••" required />
                    </div>
                </form>
            </div>
        </div>
    )
}