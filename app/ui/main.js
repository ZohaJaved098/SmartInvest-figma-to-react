'use client';
import { useState } from "react";
export default function Main(){
    const [navOpen, setNavOpen]=useState(false);
    const toggleNavMenu=()=>{
        setNavOpen(!navOpen)

    }

    return(
        <>
            <div className='bg-gradient-bg h-full w-full bg-cover bg-center '>
                <div className="flex flex-col justify-center p-20 max-lg:p-10  ">
                    <nav className="flex items-center justify-between w-full h-[100px] max-lg:relative">
                        <img className="w-[100px] h-[100px]" src="/logo.c8dfb856.svg" alt="logo" />
                        <img
                            className="cursor-pointer w-[50px] h-[50px] items-end bg-[#b6b6b6] p-3 rounded-lg lg:hidden" onClick={toggleNavMenu} 
                            src="/menu.svg" alt="menu icon"/>
                        <div className={`flex flex-row justify-center items-center gap-2 uppercase max-lg:flex-col max-lg:absolute max-lg:top-[90%] max-lg:left-[50%] max-lg:-translate-x-1/2 max-lg:transition-transform max-lg:duration-300 max-lg:ease-in-out ${navOpen ? 'max-lg:flex max-lg:opacity-100 max-lg:translate-y-0' : 'max-lg:hidden max-lg:opacity-0 max-lg:-translate-y-10'} `}>
                            <a className="p-2" href="/">Home</a>
                            <a className="p-2" href="/">About Us</a>
                            <a className="p-2" href="/">Features</a>
                            <a className="p-2" href="/">Blogs</a>
                            <a className="p-2" href="/">Contact Us</a>
                            <button className="border border-solid border-[#f5c635] text-[#f5c635] px-9 py-4 rounded-xl font-bold bg-[#333]">
                            Log In
                            </button>
                            <button className="border border-solid border-[#f5c635] text-black px-9 py-4 rounded-xl font-bold bg-[#f5c635]">
                            Sign Up
                            </button>
                        </div>
                    </nav>
                    <div className={`transition-transform duration-300 ease-in-out ${navOpen ? 'mt-[300px]' : 'mt-0'}`}>
                        <div className="flex flex-row justify-between items-centers my-20 w-full max-lg:flex-col max-lg:my-2">
                            <div className="w-[40%] h-[470px] flex flex-col gap-4 leading-9 my-16 max-lg:w-full max-lg:h-[380px] max-md:h-[420px]">
                                <h1 className="font-bold text-5xl max-lg:leading-relaxed" >Crypto Platform <br />For <b className="
                                bg-gradient-to-r from-[#ecac1a] to-[#ffffff] text-transparent bg-clip-text
                                ">CryptoPluse50</b></h1>
                                <p>Relax and let us handle the market volatility- our experts will handle the market ups and downs for you.</p>
                                <p>
                                    CryptoPulse50 (CP50) is a unique and attractive investment opportunity for those seeking diversified exposure to the cryptocurrency market.
                                </p>
                                <div className="flex gap-5 mt-8 max-sm:flex-col">
                                    <button className='max-lg:px-20 max-lg:py-2 uppercase border border-solid border-[#f5c635] text-[#f5c635] px-9 py-4 rounded-xl font-bold bg-[#333]' >Learn More</button>
                                    <button className='max-lg:px-20 max-lg:py-2 uppercase border border-solid border-[#f5c635] text-black px-9 py-4 rounded-xl font-bold bg-[#f5c635]'>Get Started</button>
                                </div>
                            </div>
                            <div className="w-[40%] h-[540px] flex justify-end max-lg:w-full max-lg:justify-center max-sm:mt-10 ">
                                <img className="w-[540px] h-[540px]" src="/main-header-right-image.358ec9c5.svg" alt="header-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
