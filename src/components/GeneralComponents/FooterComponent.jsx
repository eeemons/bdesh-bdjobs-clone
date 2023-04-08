const FooterComponent = () => {
  return (
    <div className="flex flex-col items-center p-10 md:flex md:flex-row md:justify-between">
      <div className="hidden lg:flex md:flex-col md:items-start md:gap-4">
        <h1 className="text-xl font-bold">আমাদের সম্পর্কে</h1>
        <a className="hover:text-red-500" href="#">
          এই ওয়েবসাইট সম্পর্কিত
        </a>
        <a className="hover:text-red-500" href="#">
          শর্তাবলী এবং নীতিমালা
        </a>
        <a className="hover:text-red-500" href="#">
          ফিডব্যাক
        </a>
      </div>

      <div className="hidden md:flex flex-col items-start gap-4">
        <h1 className="text-xl font-bold">চাকরিপ্রার্থীদের জন্য</h1>
        <a className="hover:text-red-500" href="#">
          নতুন অ্যাকাউন্ট
        </a>
        <a className="hover:text-red-500" href="#">
          ক্যারিয়ার পরামর্শ
        </a>
        <a className="hover:text-red-500" href="#">
          প্রশ্নাবলী
        </a>
      </div>

      <div className="hidden md:flex flex-col items-start gap-4">
        <h1 className="text-xl font-bold">নিয়োগদাতাদের জন্য</h1>
        <a className="hover:text-red-500" href="#">
          অ্যাকাউন্ট তৈরি
        </a>
        <a className="hover:text-red-500" href="#">
          পণ্য/সার্ভিস
        </a>
        <a className="hover:text-red-500" href="#">
          চাকরি পোস্ট
        </a>
        <a className="hover:text-red-500" href="#">
          প্রশ্নাবলী
        </a>
      </div>

      <div className="flex flex-col gap-5 items-center md:items-start">
        <h1 className="font-bold">টুলস ও সামাজিক মিডিয়া</h1>
        <h2>Download Mobile App</h2>
        <a href="#">
          <img
            src="https://bdesh.bdjobs.com/images/google-play-badge.svg"
            alt=""
          />
        </a>
      </div>
      <br />
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-bold">যোগাযোগ</h1>
        <h2>চাকরি সংক্রান্ত যেকোনো প্রয়োজনে সরাসরি</h2>
        <br />

        <h2 className="font-bold">সাহায্যের জন্য কল করুন</h2>
        <div className="flex items-end">
          <img src="https://bdesh.bdjobs.com/images/question-icon.png" alt="" />
          <h3 className="text-2xl">16479</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
