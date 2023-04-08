const Banner = (props) => {
  return (
    <div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.text}
          </h5>
          <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {props.subtext}
          </p>
          <button className="btn">একাউণ্ট খুলুন</button>
        </div>
      </a>
    </div>
  );
};

export default Banner;
