import Banner from "../GeneralComponents/Banner";
import CategoryCard from "../GeneralComponents/CategoryCard";
import Guideline from "../GeneralComponents/Guideline";
import ImportantLinks from "../GeneralComponents/ImportantLinks";

const Category = () => {
  return (
    <div className="grid m-3 sm:m-2 gap-2">
      <div className="md:flex md:gap-5">
        <h1 className="font-bold text-xl">Category</h1>
        <br />
        <div className="flex gap-2 items-center">
          <label className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800">
            <input id="Toggle4" type="checkbox" className="hidden peer" />
            <span className="px-2 py-0.5 dark:bg-gray-600 peer-checked:dark:bg-gray-300">
              Special Skilled
            </span>
            <span className="px-2 py-0.5 dark:bg-gray-300 peer-checked:dark:bg-violet-400">
              General
            </span>
          </label>
        </div>
      </div>
      <br />
      <div className="inline-flex gap-1 flex-col md:flex-row flex-wrap md:max-w-4xl">
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
        <CategoryCard categoryName={"Category"} count={"(10)"} />
      </div>
      <br />
      <div className="flex flex-col gap-2 md:flex-row md:col-start-1 md:row-start-3">
        <Banner
          text={
            "হাজারো চাকরির মাঝে আপনার পছন্দের চাকরি খুঁজে আবেদন করতে জয়েন করুন আমাদের সাইটে।"
          }
        />
        <Banner
          text={"বায়োডাটা তৈরি করতে চান?"}
          subtext={"সহজ কয়েকটি ধাপে এখনই স্বল্প সময়েই তৈরি করুন আপনার সিভি"}
        />
      </div>
      <br />
      <div className="flex flex-col gap-2 md:gap-10 md:col-start-2 md:row-start-2 ">
        <Guideline />
        <ImportantLinks />
      </div>
    </div>
  );
};

export default Category;
