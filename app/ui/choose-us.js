export default function Choose(){
    return(
        <div className="flex flex-col w-full h-[529px] justify-between mt-20 mb-20 max-xl:mt-[400px] max-lg:mt-56 max-md:mt-52">
            <div className="flex w-full h-[98px] justify-evenly  max-sm:h-[350px] max-sm:flex-col">
                <div className="w-1/2 h-[98px] flex flex-col my-5 max-sm:m-5">
                    <p className="uppercase w-[114px] h-[36px] bg-[#ECAC1A1A] rounded-[100px] px-[13px] py-[10px]  self-left text-sm font-medium text-[#ECAC1A]">Choose us</p> 
                    <h1 className="w-[551px] h-[50px] text-[36px] leading-[50px] text-left font-semibold my-5">Why Choose Us!</h1> 
                </div>
                <button className="uppercase w-[20%] h-[56px] mt-14 max-sm:m-5 max-sm:text-sm rounded-xl bg-gradient-to-b from-[#ECAC1A] to-[#F5C635] text-[#1A1A1A] text-base font-bold text-center max-md:w-[30%] ">Start Investment</button>
            </div>
            <div className="grid grid-rows-2 grid-flow-col w-[90%] h-[697px] mt-20  max-sm:mt-5 mx-5 border-0 border-white rounded-3xl max-lg:grid-cols-2 max-lg:grid-flow-row ">
                <div className="col-span-2 flex justify-between p-4 border border-white rounded-tl-3xl max-lg:rounded-tr-3xl max-md:col-span-2"> 
                    <div className="w-[306px] h-[160px] max-xl:w-[100px] max-xl:h-[100px] ">
                        <div className="w-[306px] h-[116px]">
                            <h2 className="w-[143px] h-[35px] text-[28px] leading-[35px] font-semibold text-left" >About Us</h2>
                            <p className="w-[306px] h-[69px] text-[16px] leading-[23px] font-normal text-left mt-2" >Lorem Ipsum is simply dummy text of the 
                            printing and typesetting industry. Lorem 
                            Ipsum has been the industry's</p>
                        </div>
                        <div className="flex w-[132px] h-[20px] text-[#ECAC1A]">
                            <a className="flex gap-1 uppercase w-[132px] h-[20px] text-base font-bold text-left" href="/">Learn More <img className="w-[21px] " src="/arrow-1.197cfd60.svg" alt="" /> </a> 
                        </div>
                    </div>
                    <img className="w-[90%] h-[90%] max-xl:w-[60%] max-xl:h-[60%] max-lg:h-full max-lg:w-full max-md:hidden " src="/about-us-phone-image.fc1f9efe.svg" alt="" />
                </div>
                <div className=" p-10 border border-white flex flex-col justify-center items-center rounded-bl-3xl max-lg:rounded-bl-none  max-xl:p-5 ">
                    <div className="flex flex-col justify-center items-center w-[125px] h-[123px] max-xl:w-[100px] max-xl:h-[106px]">
                        <div className="w-[80px] h-[80px] bg-[#333333] rounded-full items-center relative">
                            <img className="w-[30px] h-[30px] absolute top-6 left-6 " src="/united-1.e1bc8cdf.svg" alt="" />
                        </div>
                        <h2 className="w-[125px] h-[25px] my-2 text-lg leading-[25px] font-bold max-sm:text-base">Expert Team</h2>
                    </div>
                    <p className="w-[306px] h-[104px] text-base text-center font-normal max-sm:text-sm max-sm:w-[250px]">Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's  Lorem 
                    Ipsum has been the industry's</p>
                </div>
                <div className=" p-10 border border-white flex flex-col justify-center items-center max-xl:p-5 max-lg:rounded-bl-none">
                    <div className="flex flex-col justify-center items-center w-[125px] h-[123px] max-xl:w-[100px] max-xl:h-[106px] ">
                        <div className="w-[80px] h-[80px] bg-[#333333] rounded-full items-center relative">
                            <img className="w-[30px] h-[30px] absolute top-6 left-6 " src="/gift-1.a28dc20d.svg" alt="" />
                        </div>
                        <h2 className="w-[306px] h-[25px] text-center my-2 text-lg leading-[25px] font-bold max-sm:text-base">Bonus and Rewards</h2>
                    </div>
                    <p className="w-[306px] h-[104px] text-base text-center font-normal max-sm:text-sm max-sm:w-[250px]">Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's  Lorem 
                    Ipsum has been the industry's</p>
                </div>
                <div className=" p-10 border border-white flex flex-col justify-center items-center rounded-tr-3xl max-lg:rounded-tr-none max-xl:p-5 max-lg:rounded-bl-3xl ">
                    <div className="flex flex-col justify-center items-center w-[125px] h-[123px] max-xl:w-[100px] max-xl:h-[106px]">
                        <div className="w-[80px] h-[80px] bg-[#333333] rounded-full items-center relative">
                            <img className="w-[30px] h-[30px] absolute top-6 left-6 " src="/security-1.66cc6575.svg" alt="" />
                        </div>
                        <h2 className="w-[306px] h-[25px] text-center my-2 text-lg leading-[25px] font-bold max-sm:text-base">Security of Funds</h2>
                    </div>
                    <p className="w-[306px] h-[104px] text-base text-center font-normal max-sm:text-sm max-sm:w-[250px]">Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's  Lorem 
                    Ipsum has been the industry's</p>
                </div>
                <div className=" p-10 border border-white flex flex-col justify-center items-center rounded-br-3xl max-xl:p-5 ">
                    <div className="flex flex-col justify-center items-center w-[125px] h-[123px] max-xl:w-[100px] max-xl:h-[106px]">
                        <div className="w-[80px] h-[80px] bg-[#333333] rounded-full items-center relative">
                            <img className="w-[30px] h-[30px] absolute top-6 left-6 " src="/support-1.0e09f757.svg" alt="" />
                        </div>
                        <h2 className="w-[306px] h-[25px] text-center my-2 text-lg leading-[25px] font-bold max-sm:text-base">Support 7*24h </h2>
                    </div>
                    <p className="w-[306px] h-[104px] text-base text-center font-normal max-sm:text-sm max-sm:w-[250px]">Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's  Lorem 
                    Ipsum has been the industry's</p>
                </div>
            </div>
        </div>
    )
}