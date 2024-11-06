export default function TopBar() {
    return (
      <div className='flex justify-between p-5 w-full bg-black h-[10%] max-lg:h-[15%]'>
        <div className="flex items-start w-[60%] ps-5">
          <div className="flex justify-between items-center me-4 p-2 h-[20px] gap-1">
            <img className="w-[28px] h-[28px]" src="/mdi-facebook.e9cd7c6c.svg" alt="facebook-icon" />
            <img className="w-[28px] h-[28px]" src="/basil-instagram-solid.553208a9.svg" alt="instagram-icon" />
            <img className="w-[28px] h-[28px]" src="/prime-twitter.89c6b509.svg" alt="twitter-icon" />
          </div>
        </div>
        <div className="  max-md:hidden flex justify-end w-[25%]">
          <div className="flex items-end gap-3 ">
            <img src="/Group 8.svg" className="h-[30px] w-[90px]" alt="language-selection" />
            <img src="/Group 5.svg" className="h-[30px] w-[90px]" alt="theme-changer" />
          </div>
        </div>
      </div>
    );
  }
  