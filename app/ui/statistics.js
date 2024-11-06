import '../globals.css'
export default function Statistics(){
    return(
        <div className="flex justify-between items-center h-[100px] w-full gradient-1 border-solid border-y-[1px] ">
            <div className="flex justify-between w-[90%] h-[68px] m-auto uppercase">
                <div className="flex flex-col justify-around items-center ">
                    <div className="bg-gradient-to-b from-[#ecac1a] to-[#ffffff] text-transparent bg-clip-text text-4xl text-left font-bold ">
                        100+
                    </div>
                    <div className="font-medium text-base text-left tracking-[0.25em]">
                        Assets staked
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center ">
                    <div className="bg-gradient-to-b from-[#ecac1a] to-[#ffffff] text-transparent bg-clip-text text-4xl text-left font-bold ">
                        200k+
                    </div>
                    <div className="font-medium text-base text-left tracking-[0.25em]">
                        Users
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center ">
                    <div className="bg-gradient-to-b from-[#ecac1a] to-[#ffffff] text-transparent bg-clip-text text-4xl text-left font-bold ">
                        $40M+
                    </div>
                    <div className="font-medium text-base text-left tracking-[0.25em]">
                        Rewards Paid
                    </div>
                </div>
            </div>
        </div>
    )
}
