import '../globals.css'
export default function Benefits(){
    
    return(
        <div className="flex flex-col w-[90%] m-auto h-auto items-center justify-between mt-96 max-sm:mt-[450px] relative ">
            <div className="w-full h-[98px] flex flex-col justify-center items-center my-5">
                <p className="uppercase w-[114px] h-[36px] bg-[#ECAC1A1A] rounded-[100px] px-[13px] py-[10px] self-center text-sm font-medium text-[#ECAC1A]">Benefits</p> 
                <h1 className="w-[551px] h-[50px] text-[36px] leading-[50px] text-center font-semibold my-5">Investor Benefits</h1> 
            </div>
            <div className="flex justify-between w-[75%] h-[215px] mt-20 max-lg:flex-col max-lg:gap-10 max-lg:h-auto max-lg:w-[40%] max-md:w-[55%] max-sm:w-[65%] ">
                <div className=" relative">
                    <img className="w-[366px] h-[215px] border border-solid gradient-2 relative max-md:h-[240px] " src="/benefits-card.svg" alt="" />
                    <div className="flex flex-col m-5 absolute top-0 max-lg:left-0 max-md:left-1 max-md:top-2 ">
                        <div className="w-[56px] h-[56px] rounded-full border border-solid border-[#ECAC1A]"/>
                        <div className="w-[56px] h-[56px] absolute top-2 left-2 rounded-full gradient-3">
                            <img className="w-[26px] h-[26px] absolute top-[15px] left-[15px]" src="/exam-1.d4524195.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='absolute top-24 left-5 max-md:left-4 max-md:top-28 max-lg:left-8 w-[200px] h-[25px] text-[20px] font-bold leading-[25px] text-left'>Simplified investing</h2>
                        <p className='absolute top-32 left-5 max-md:left-4 max-md:top-36 max-lg:left-8 w-[337px] h-[52px] text-[16px] font-normal leading-[26px] text-left'>Gain exposure to the top 50 cryptocurrencies with a single investment.</p>
                    </div>
                    <div className='w-[12px] h-[12px] rounded-full bg-white absolute top-[210px] left-[178px] max-lg:hidden'/>
                    <div className='w-[2px] h-[124px] rounded-t-[100px] gradient-4 absolute top-[214px] left-[50%] max-lg:hidden'/>
                </div>
                <div className=" relative">
                    <img className="w-[366px] h-[215px] border border-solid gradient-2 relative max-md:h-[240px]" src="/benefits-card.svg" alt="" />
                    <div className="flex flex-col m-5 absolute top-0 max-lg:left-0 max-md:top-2 max-md:left-1">
                        <div className="w-[56px] h-[56px] rounded-full border border-solid border-[#ECAC1A]"/>
                        <div className="w-[56px] h-[56px] absolute top-2 left-2 rounded-full gradient-3">
                            <img className="w-[26px] h-[26px] absolute top-[15px] left-[15px]" src="/click 1.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='absolute top-24 left-5 max-md:left-4 max-md:top-28 max-lg:left-8 w-[200px] h-[25px] text-[20px] font-bold leading-[25px] text-left'>Convenience</h2>
                        <p className='absolute top-32 left-5 max-md:left-4 max-md:top-36 max-lg:left-8 w-[337px] h-[52px] text-[16px] font-normal leading-[26px] text-left'>No need to constantly monitor and adjust individual cryptocurrency holdings.</p>
                    </div>
                    <div className='w-[12px] h-[12px] rounded-full bg-white absolute top-[210px] left-[178px] max-lg:hidden'/>
                    <div className='w-[2px] h-[213px] rounded-t-[100px] gradient-4 absolute top-[214px] left-[50%] max-lg:hidden'/>
                </div>
            </div>
            <div className=" relative mt-20 max-lg:mt-10">
                <img className="w-[366px] h-[215px] border border-solid gradient-2 relative " src="/benefits-card.svg" alt="" />
                <div className="flex flex-col m-5 absolute top-0">
                    <div className="w-[56px] h-[56px] rounded-full border border-solid border-[#ECAC1A]"/>
                    <div className="w-[56px] h-[56px] absolute top-2 left-2 rounded-full gradient-3">
                        <img className="w-[26px] h-[26px] absolute top-[15px] left-[15px]" src="/distribution-of-wealth 1.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='absolute top-24 left-5 w-[200px] h-[25px] text-[20px] font-bold leading-[25px] text-left'>Diversification</h2>
                    <p className='absolute top-32 left-5 w-[337px] h-[52px] text-[16px] font-normal leading-[26px] text-left'>Spread risk across a broad range of assets</p>
                </div>
                <div className='w-[12px] h-[12px] rounded-full bg-white absolute top-[-6px] left-[178px] max-lg:hidden'/>
                <div className='w-[2px] h-[260px] rounded-t-[100px] transform rotate-180 gradient-4 absolute top-[-259px] left-[50%] max-lg:hidden'/>
            </div>
            <div className='absolute top-[140px] left-5 '>
                <div className='w-[69px] h-[69px] rounded-full border border-solid gradient-border bg-[#333] relative' >
                    <img className="w-[45px] h-[45px] absolute top-3 left-3" src="/payment.svg" alt="" />
                </div>
                <div className='w-[3px] h-[306px] rounded-t-[100px] gradient-4 absolute top-[69px] left-8'/>
            </div>
            <div className='absolute top-[560px] left-72 max-lg:left-36 max-md:left-16 max-sm:left-0'>
                <div className='w-[69px] h-[69px] rounded-full border border-solid gradient-border bg-[#333] relative' >
                    <img className="w-[55px] h-[55px] absolute top-1 left-2" src="/globe.svg" alt="" />
                </div>
                <div className='w-[3px] h-[212px] rounded-t-[100px] gradient-4 absolute top-[69px] left-8'/>
            </div>
            <div className='absolute top-[630px] right-64 max-lg:right-36 max-md:right-16 max-sm:right-0 '>
                <div className='w-[69px] h-[69px] rounded-full border border-solid gradient-border bg-[#333] relative' >
                    <img className="w-[44px] h-[44px] absolute top-3 left-2" src="/security.svg" alt="" />
                </div>
                <div className='w-[3px] h-[149px] rounded-t-[100px] gradient-4 absolute top-[69px] left-8'/>
            </div>
            <div className='absolute top-[250px] right-2 '>
                <div className='w-[69px] h-[69px] rounded-full border border-solid gradient-border bg-[#333] relative' >
                    <img className="w-[42px] h-[42px] absolute top-3 left-3" src="/processor.svg" alt="" />
                </div>
                <div className='w-[3px] h-[306px] rounded-t-[100px] gradient-4 absolute top-[69px] left-8'/>
            </div>
            
            <div>
                <button className="uppercase w-[213px] h-[56px] mt-14 rounded-xl bg-gradient-to-b from-[#ECAC1A] to-[#F5C635] text-[#1A1A1A] text-base font-bold text-center ">Start Investment</button>
            </div>
            <div className="flex mt-20 w-full h-auto m-auto items-center justify-between max-lg:flex-col max-xl:gap-3">
                <div className=" relative">
                    <div className="w-[630px] max-xl:w-[530px] max-sm:w-[400px] h-[242px] max-sm:h-[300px] rounded-[20px] bg-[#333] "/>
                    <div className="flex flex-col m-5 absolute top-0">
                        <div className="w-[56px] h-[56px] rounded-full border border-solid border-[#ECAC1A]"/>
                        <div className="w-[56px] h-[56px] absolute top-2 left-2 rounded-full gradient-3">
                            <img className="w-[26px] h-[26px] absolute top-[15px] left-[15px]" src="/automation.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='absolute top-24 left-5 w-[331px] h-[25px] text-[20px] font-bold leading-[25px] text-left'>Automated Rebalancing</h2>
                        <p className='absolute top-32 left-5 w-[576px] max-xl:w-[500px] max-sm:w-[350px] h-[78px] text-[16px] font-normal leading-[26px] text-left'>
                        Implement a mechanism that automatically rebalances the coin's composition to maintain the desired weightage of each cryptocurrency, ensuring that the coin stays aligned with the market
                        </p>
                    </div>
                </div>
                <div className=" relative">
                    <div className="w-[630px] max-xl:w-[530px] max-sm:w-[400px] h-[242px] max-sm:h-[240px] rounded-[20px] bg-[#333] "/>
                    <div className="flex flex-col m-5 absolute top-0">
                        <div className="w-[56px] h-[56px] rounded-full border border-solid border-[#ECAC1A]"/>
                        <div className="w-[56px] h-[56px] absolute top-2 left-2 rounded-full gradient-3">
                            <img className="w-[26px] h-[26px] absolute top-[15px] left-[15px]" src="/opacity 1.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='absolute top-24 left-5 w-[331px] h-[25px] text-[20px] font-bold leading-[25px] text-left'>Transparency and Regular Audits</h2>
                        <p className='absolute top-32 left-5 w-[576px] max-xl:w-[500px] max-sm:w-[350px] h-[78px] text-[16px] font-normal leading-[26px] text-left'>
                        We ensure transparency by publishing regular audits and updates on the coin's composition, weightage, and performance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}