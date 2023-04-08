import { useState } from "react";
const Navigationbar = () => {
  const [isActive, setIsActive] = useState(false);
  function close() {
    setIsActive((current) => !current);
    // console.log(isActive);
  }
  return (
    <div className="w-full bg-white flex md:justify-around mt-2">
      <a className="w-10 md:hidden" onClick={close} href="#">
        <img src="https://i.ibb.co/ZVLtr3p/menu.png" alt="" />
      </a>

      {isActive ? (
        <div className="top-0 left-0 w-[100vw] bg-white  p-10 pl-20 text-white fixed h-full z-10">
          <button onClick={close} className="absolute left-2 top-1 text-black">
            X
          </button>
          <img
            className="w-[100%] absolute bottom-10 left-0"
            src="https://bdesh.bdjobs.com/images/Joint_venture.png"
            alt=""
          />
          <div className="absolute right-1 top-2 flex gap-2">
            <img
              src="https://i.ibb.co/k1C7z22/facebook.png"
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="https://i.ibb.co/TcVc80T/youtube.png"
              alt=""
              className="w- h-6 cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="inline-flex items-center gap-1 ">
                <img
                  className="w-4"
                  src="https://i.ibb.co/TBv5qtn/user.png"
                  alt=""
                />
                <a className="text-black" href="#">
                  User
                </a>
              </div>

              <a className="text-black" href="/contact">
                Contact
              </a>
            </div>
            <br />
            <div className="border-y-2 flex flex-col gap-5">
              <a
                href="#"
                className=" text-black hover:text-sky-600 ease-in-out duration-300 text-lg sm:text-base"
              >
                Bdjobs
              </a>
              <a
                className="text-black hover:text-sky-600 ease-in-out duration-300 text-lg sm:text-base"
                href="#"
              >
                Jobs
              </a>
              <a
                className="text-black hover:text-sky-600 ease-in-out duration-300 text-lg sm:text-base"
                href="#"
              >
                Job Seeker
              </a>
              <a
                className="text-black hover:text-sky-600 ease-in-out duration-300 text-lg sm:text-base"
                href="#"
              >
                AccountRecruitment Agency/Foreign Employers
              </a>
            </div>
          </div>
          <br />
          <div>
            <h1 className="text-black">Switch to Bangla</h1>
          </div>
        </div>
      ) : null}

      <a href="/" className="ml-auto mr-auto md:ml-0 md:mr-0">
        <img
          className="w-[200px] "
          src="https://bdesh.bdjobs.com/images/logo_bdesh.svg"
          alt=""
        />
      </a>

      <img
        className="hidden md:block"
        src="https://bdesh.bdjobs.com/images/Joint_venture.png"
        alt=""
      />
      <div className="hidden md:block">
        <div className="flex gap-3">
          <div className="inline-flex items-center gap-1">
            <img
              className="w-4"
              src="https://i.ibb.co/TBv5qtn/user.png"
              alt=""
            />
            <a href="#">User</a>
          </div>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
