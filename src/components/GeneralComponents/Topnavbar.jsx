import FacebookIco from "../../assets/Facebook.png";
import YoutubeIco from "../../assets/Youtube.png";

const Topnavbar = () => {
  return (
    <div className="hidden sm:flex w-full border place-content-between items-center bg-gray-100 p-1">
      <div className="flex gap-4 items-center">
        <a
          href="#"
          className="hover:text-sky-600 ease-in-out duration-300 text-xs sm:text-base"
        >
          Bdjobs
        </a>
        <a
          className="hover:text-sky-600 ease-in-out duration-300 text-xs sm:text-base"
          href="#"
        >
          Jobs
        </a>
        <a
          className="hover:text-sky-600 ease-in-out duration-300 text-xs sm:text-base"
          href="#"
        >
          Job Seeker
        </a>
        <a
          className="hover:text-sky-600 ease-in-out duration-300 text-xs sm:text-base"
          href="#"
        >
          AccountRecruitment Agency/Foreign Employers
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <img src={FacebookIco} alt="" className="w-6 h-6 cursor-pointer" />
        <img src={YoutubeIco} alt="" className="w- h-6 cursor-pointer" />

        <label className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
          <input id="Toggle4" type="checkbox" className="hidden peer" />
          <span className="px-2 py-0.5 dark:bg-gray-600 peer-checked:dark:bg-gray-300">
            En
          </span>
          <span className="px-2 py-0.5 dark:bg-gray-300 peer-checked:dark:bg-violet-400">
            Bn
          </span>
        </label>
      </div>
    </div>
  );
};

export default Topnavbar;
