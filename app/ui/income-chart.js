import '../globals.css'
export default function Income(){
    return(
        <div className="flex flex-col w-full h-auto mt-20 gap-5 ">
            <div className="flex w-[95%] h-[166px] m-5 justify-around max-md:flex-col max-md:h-auto max-md:m-auto p-3">
                <div className="w-[40%] h-[166px] flex flex-col justify-start my-5 max-md:w-[80%]">
                    <p className="uppercase w-[90px] h-[36px] bg-[#ECAC1A1A] rounded-[100px] px-[13px] py-[10px] text-sm font-medium text-[#ECAC1A]">Income</p> 
                    <h1 className="w-[551px] max-md:w-full h-[52px] max-xl:w-[420px] text-[36px] max-xl:text-3xl max-lg:text-xl leading-[50px] font-semibold my-1">Time to earn passive Income</h1> 
                    <p className='w-[613px] max-md:w-full h-[65px] max-xl:w-[450px] max-lg:w-[330px] font-normal text-[16px] leading-[26px] text-left'>The CryptoPulse50 (CP50) platform offers a great way to generate passive income by staking CP50 coins at higher APY.</p>
                </div>
                <div className="flex w-[40%] h-[166px] justify-between gap-5 my-5 max-md:w-[80%] max-md:m-auto">
                    <div className="flex w-[60%] h-[166px] rounded-[22px] justify-center items-center gradient-5 border border-solid border-[#FFFFFF26] 
                    p-3 relative">
                        <div className="border-2 border-solid border-[#F5C635] rounded-sm w-[123px] absolute top-[-3px]"/>
                        <div className="border-2 border-solid border-[#F5C635] rounded-sm w-[81px] absolute top-[75px] left-[-40px] rotate-90"/>
                        <div className="border-2 border-solid border-[#F5C635] rounded-sm w-[81px] absolute top-[75px] right-[-40px] rotate-90"/>
                        <div className="border-2 border-solid border-[#F5C635] rounded-sm w-[123px] absolute top-[165px]"/>
                        <div className="flex flex-col justify-center items-center w-[15%] h-[102px] ">
                            <div className='w-[74px] h-[67px] text-center'>
                                <div className="w-[74px] h-[50px] text-[#ecac1a] text-[40px] max-lg:text-4xl leading-[50px] font-bold ">
                                    780
                                </div>
                                <div className="w-[61px] h-[18px] font-medium text-sm  uppercase">
                                    Stakers
                                </div>
                            </div>
                            <p className='uppercase w-[185px] h-[23px] tracking-wide max-lg:tracking-normal max-lg:w-[130px] mt-5'>Total Stakers</p>
                        </div>
                    </div>
                    <div className="flex w-[60%] h-[166px] rounded-[22px] justify-center items-center gradient-6 border border-solid border-[#FFFFFF26] p-3 relative">                        
                        <div className="border-2 border-solid border-[#4EE39D] rounded-sm w-[123px] absolute top-[-3px]"/>
                        <div className="border-2 border-solid border-[#4EE39D] rounded-sm w-[81px] absolute top-[75px] left-[-40px] rotate-90"/>
                        <div className="border-2 border-solid border-[#4EE39D] rounded-sm w-[81px] absolute top-[75px] right-[-40px] rotate-90"/>
                        <div className="border-2 border-solid border-[#4EE39D] rounded-sm w-[123px] absolute top-[165px]"/>
                        <div className="flex flex-col justify-center items-center w-[15%] h-[102px] ">
                            <div className='w-[100px] h-[67px] text-center'>
                                <div className="w-[74px] h-[50px] text-[#4EE39D] text-[40px] max-lg:text-4xl leading-[50px] font-bold ">
                                    500
                                </div>
                                <div className="w-[98px] h-[18px] font-medium text-sm uppercase"> CP50 TOKENS </div>
                            </div>
                            <p className='uppercase w-[185px] h-[23px] trtracking-wide max-lg:tracking-normal max-lg:w-[130px]  mt-5'>Total Staked</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[95%] h-auto justify-around m-5 gap-5 max-xl:gap-2 max-lg:gap-1 max-md:flex-wrap max-md:gap-4 max-md:justify-center">
                <div className="flex w-[25%] max-md:w-[45%] max-md:m-auto max-lg:w-[23%] h-[127px] rounded-[22px] justify-start items-center gradient-5 border border-solid border-[#FFFFFF26] p-3 relative">
                    <div className="w-[272px] h-[87px] ml-2">
                        <h2 className='w-[237px] h-[25px] text-xl leading-[25px] max-lg:text-lg font-semibold mb-4'>1- Aurum Vault</h2>
                        <h3 className='w-[88px] h-[20px] text-[#ecac1a] text-[16px] leading-[20px] font-semibold mb-1'>APY 12%</h3>
                        <p className='w-[272px] h-[18px] max-xl:w-[200px] max-lg:w-[150px] text-[14px] leading-[17.5px] font-normal capitalize' >minimum 100 CP50 Tokens</p>
                    </div>
                </div>
                <div className="flex w-[25%] max-md:w-[45%] max-md:m-auto max-lg:w-[23%] h-[127px] rounded-[22px] justify-start items-center gradient-6 border border-solid border-[#FFFFFF26] p-3 relative">
                    <div className="w-[272px] h-[87px] ml-2">
                        <h2 className='w-[237px] h-[25px] text-xl leading-[25px] max-lg:text-lg font-semibold mb-4'>2- Ruby Vault</h2>
                        <h3 className='w-[88px] h-[20px] text-[#4EE39D] text-[16px] leading-[20px] font-semibold mb-1'>APY 18% </h3>
                        <p className='w-[272px] h-[18px] max-xl:w-[200px] text-[14px] leading-[17.5px] font-normal capitalize' >minimum 25,000 CP50 Tokens</p>
                    </div>
                </div>
                <div className="flex w-[25%] max-md:w-[45%] max-md:m-auto max-lg:w-[23%] h-[127px] rounded-[22px] justify-start items-center gradient-7 border border-solid border-[#FFFFFF26] p-3 relative">
                    <div className="w-[272px] h-[87px] ml-2">
                        <h2 className='w-[237px] h-[25px] text-xl leading-[25px] max-lg:text-lg font-semibold mb-4'>3- Platinum Vault</h2>
                        <h3 className='w-[88px] h-[20px] text-[#2AF6FF] text-[16px] leading-[20px] font-semibold mb-1'>APY 24%</h3>
                        <p className='w-[272px] h-[18px] max-xl:w-[200px] text-[14px] leading-[17.5px] font-normal capitalize' >minimum 300,000 CP50 Tokens</p>
                    </div>
                </div>
                <div className="flex w-[25%] max-md:w-[45%] max-md:m-auto max-lg:w-[23%] h-[127px] rounded-[22px] justify-start items-center gradient-8 border border-solid border-[#FFFFFF26] p-3 relative">
                    <div className="w-[272px] h-[87px] ml-2">
                        <h2 className='w-[237px] h-[25px] text-xl leading-[25px] max-lg:text-lg  font-semibold mb-4'>4- Celestia Vault</h2>
                        <h3 className='w-[88px] h-[20px] text-[#B0F127] text-[16px] leading-[20px] font-semibold mb-1'>APY 36%</h3>
                        <p className='w-[272px] h-[18px] max-xl:w-[200px] text-[14px] leading-[17.5px] font-normal capitalize' >minimum 1 million CP50 Tokens</p>
                    </div>
                </div>
            </div>
        </div>
    )
}