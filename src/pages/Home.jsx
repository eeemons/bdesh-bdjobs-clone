import Carousel from "../components/HomepageComponents/Carousel";
import FindJob from "../components/HomepageComponents/FindJob";
import Countrylist from "../components/HomepageComponents/CountryList";
import Category from "../components/HomepageComponents/Category";
import JobsCarousel from "../components/HomepageComponents/JobsCarousel";
function Home() {
  return (
    <div className="grid items-center sm:grid-cols-3">
      <div>
        <FindJob />
      </div>
      <div className="row-start-1 sm:col-start-2">
        <Carousel />
      </div>
      <div>
        <Countrylist />
      </div>
      <div className="flex row-start-2 justify-around w-screen bg-white mt-2">
        <div className="sm:flex items-center gap-2">
          <img
            className="w-10 bg-red-500 rounded-full"
            src="https://i.ibb.co/hXz7fGW/cogwheel.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2>No. of vacancies</h2>
            <h3 className="text-red-500">130</h3>
          </div>
        </div>
        <div className="sm:flex items-center gap-2">
          <img
            className="w-10 bg-green-500 rounded-full"
            src="https://i.ibb.co/TBv5qtn/user.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2>No. of vacancies</h2>
            <h3 className="text-green-500">130</h3>
          </div>
        </div>
        <div className="sm:flex items-center gap-2">
          <img
            className="w-10 bg-orange-500 rounded-full"
            src="https://i.ibb.co/k6YpN61/world.png"
            alt=""
          />
          <div className="flex flex-col">
            <h2>No. of vacancies</h2>
            <h3 className="text-orange-500">130</h3>
          </div>
        </div>
      </div>
      <div className="sm:row-start-3 bg-gray-200 w-screen">
        <Category />
      </div>
      <div className="sm:row-start-4 w-screen sm:col-start-1 bg-green-400">
        <JobsCarousel />
      </div>
    </div>
  );
}

export default Home;
