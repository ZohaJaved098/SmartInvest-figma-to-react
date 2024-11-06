export default function About(){
    return(
        <div className="flex w-full h-[529px] mt-10 m-auto justify-evenly items-center max-xl:flex-col max-xl:h-[950px] ">
            <div className="flex flex-col w-[40%] h-[522px] max-xl:w-full max-xl:items-center max-xl:h-[945px] ">
                <div className="w-[40%] h-[418px] max-xl:w-[80%] max-sm:w-[90%] max-sm:h-[500px] ">
                    <div className="w-[551px] h-[98px] flex flex-col my-5  ">
                        <p className="uppercase w-[104px] h-[36px] bg-[#ECAC1A1A] rounded-[100px] px-[13px] py-[10px] self-left text-sm font-medium text-[#ECAC1A]">About us</p> 
                        <h1 className="w-[551px] max-sm:w-[470px] h-[50px] text-[36px] leading-[50px] text-left font-semibold my-5">About CryptoPulse50 (CP50)</h1> 
                    </div>
                    <div className="text-base text-left font-medium leading-8 ">
                        <p className="w-[608px] mb-1 max-xl:w-full max-sm:mt-20">CryptoPulse50 (CP50) is an innovative cryptocurrency that aims to
                        track the performance of the top 50 cryptocurrencies, Uses a weighted 
                        average formula to adjust the composition of the coins based on market 
                        capitalization, trading volume & a combination of factors.</p>

                        <p className="w-[613px] mb-1 max-xl:w-full">CryptoPulse50 (CP50) is a unique and attractive investment opportunity 
                        for those seeking diversified exposure to the cryptocurrency market.</p>

                        <p className="w-[563px] max-xl:w-full">By investing in CP50, you'll get a diversified portfolio of the top 50 
                        cryptocurrencies, providing a comprehensive representation of the 
                        market with a single asset.</p>
                    </div>
                </div>
                <button className="uppercase w-[213px] h-[56px] mt-14 rounded-xl bg-gradient-to-b from-[#ECAC1A] to-[#F5C635] text-[#1A1A1A] text-base font-bold text-center max-xl:mt-4 max-md:mt-10  max-sm:mt-20 ">Start Investment</button>
            </div>
            <div className="flex flex-col w-[40%] h-[525px] items-center justify-center max-xl:mt-40 max-xl:w-[80%] max-lg:mt-20 ">
                <img className="w-[90%] max-xl:w-[80%]" src="/about-pic.svg" alt="about-pic a network tree" />
            </div>
        </div>
    )
}
