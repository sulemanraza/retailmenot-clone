import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div>
      {/* Logo */}
      <div className="rounded-lg lg:rounded-0 sm:w-full lg:border-0 sm:grid sm:grid-cols-4 lg:block lg:p-0 lg:m-0 sm:m-0 sm:p-3 p-5  mt-[-10px] border bg-white">
        <div className="relative border lg:border-0 sm:p-2 p-5 rounded  w-[100%] md:w-full min-w-max h-auto bg-white border-b-[1px] md:p-0 md:m-0 border-[#7070702b] ">
          <Image
            src="/image/home/store/1.jpg"
            width="270"
            height="270"
            layout="responsive"
            alt="home"
            className="absolute min-h-[100%] rounded-md  top-[50%] left-[50%] right-[-50%] bottom-[-50%] "
          />
        </div>
        <div className=" lg:hidden sm:col-span-3 p-3 flex flex-col justify-between">
          <h2 className="text-[30px] text-center sm:text-left mt-2 sm:mt-0 ">
            Macys.com
          </h2>
          <p className=" hidden sm:block  text-sm">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            cumque?
          </p>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-md mt-2 text-white bg-fuchsia-800 hover:bg-fuchsia-900 text-center text-xl uppercase p-2
         sm:block sm:p-3  grid place-items-center"
          >
            Visite Store
          </a>
        </div>
      </div>
      <div className="text-[12px] mt-2 text-[#757575] text-center">
        When you buy through links on RetailMeNot we may earn a commission.{' '}
        <Link href="/">
          <a className=" underline">Learn More</a>
        </Link>
      </div>
      <div className=" hidden  lg:block">
        <div className="text-xl font-bold my-3">45 Offers Available</div>
        <div className=" ">
          <h2 className="text-sm font-bold text-[#5c5c5c]">About Macy’s</h2>
          <p className="text-sm text-justify py-3 text-[#757575]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            temporibus voluptatem ut ipsam quae at ducimus delectus possimus
            totam. Eius adipisci dolor iusto aliquam totam expedita ipsam at,
            delectus reiciendis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti, temporibus voluptatem ut ipsam quae at
            ducimus delectus possimus totam. Eius adipisci dolor iusto aliquam
            totam expedita ipsam at, delectus reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
