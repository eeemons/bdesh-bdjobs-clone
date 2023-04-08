const ImportantLinks = () => {
  return (
    <div>
      <div>
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              সরকারি গুরুত্বপূর্ণ লিংক সমূহ
            </h5>
            <ul>
              <li className="text-white hover:text-red-700">
                <span>&#10061;</span>ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর
              </li>
              <li className="text-white hover:text-red-700">
                <span>&#10061;</span>বাংলাদেশ কারিগরি শিক্ষা বোর্ড
              </li>
              <li className="text-white hover:text-red-700">
                <span>&#10061;</span>জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো
              </li>
              <li className="text-white hover:text-red-700">
                <span>&#10061;</span>প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান
                মন্ত্রণালয়
              </li>
            </ul>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ImportantLinks;
