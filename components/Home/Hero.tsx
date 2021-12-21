/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="py-2 md:py-5 px-[7%] sm:px-[8%] bg-[#f7f7f7]">
      <h1 className="text-center pt-6 text-[20px] md:text-[24px] lg:text-[30px] font-bold">
        Shop Today's Trending Deals and Save Big
      </h1>
      {/* Card */}
      <div className=" relative flex mt-3 px-0 overflow-auto ">
        <div className="flex justify-between py-[6px] min-w-min">
          {/* 1 */}
          <div className=" relative w-[33%] mr-6 min-w-[275px] max-w-[364px]">
            <a href="https://google.com" className=" relative">
              <Image
                src="/image/home/card-1.jpg"
                alt="home"
                width="400"
                height="300"
                className=" block rounded-md shadow-md"
              />
              <div className="absolute left-0 bottom-1 w-[100%] pt-[22px] pb-4 px-3 text-white rounded-b-[8px] bg-[#00000080]">
                <div className=" absolute top-[-52px] left-3 w-[80px] h-[60px] p-0 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/image/home/logo.jpg"
                    width="160"
                    height="120"
                    alt="logo"
                    className=" block max-w-[80%] max-h-[100%] rounded-[8px]"
                  />
                </div>
                <div className=" text-xs uppercase mb-[2px] whitespace-nowrap font-bold text-ellipsis overflow-hidden ">
                  Saks Fifth Avenue Sale
                </div>
                <div className="whitespace-nowrap font-[400] text-base overflow-hidden text-ellipsis">
                  $50 Promotional Gift Card
                </div>
              </div>
            </a>
          </div>
          {/* 1 */}
          <div className=" relative w-[33%] mr-6 min-w-[275px] max-w-[364px]">
            <a href="https://google.com" className=" relative">
              <Image
                src="/image/home/card-2.jpg"
                alt="home"
                width="400"
                height="300"
                className=" block rounded-md shadow-md"
              />
              <div className="absolute left-0 bottom-1 w-[100%] pt-[22px] pb-4 px-3 text-white rounded-b-[8px] bg-[#00000080]">
                <div className=" absolute top-[-52px] left-3 w-[80px] h-[60px] p-0 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/image/home/site/6.jpg"
                    width="160"
                    height="120"
                    alt="logo"
                    className=" block max-w-[80%] max-h-[100%] rounded-[8px]"
                  />
                </div>
                <div className=" text-xs uppercase mb-[2px] whitespace-nowrap font-bold text-ellipsis overflow-hidden ">
                  The Children's Place Sale
                </div>
                <div className="whitespace-nowrap font-[400] text-base overflow-hidden text-ellipsis">
                  Up to 60% Off Entire Site
                </div>
              </div>
            </a>
          </div>
          {/* 3 */}
          <div className=" relative w-[33%] mr-6 min-w-[275px] max-w-[364px] max-h-[272px]">
            <a href="https://google.com" className=" relative">
              <Image
                src="/image/home/card-3.jpg"
                alt="home"
                width="400"
                height="300"
                className=" block rounded-md shadow-md"
              />
              <div className="absolute left-0 bottom-1 w-[100%] pt-[22px] pb-4 px-3 text-white rounded-b-[8px] bg-[#00000080]">
                <div className=" absolute top-[-52px] left-3 w-[80px] h-[60px] p-0 rounded-lg bg-white flex items-center justify-center">
                  <Image
                    src="/image/home/site/2.jpg"
                    width="160"
                    height="120"
                    alt="logo"
                    className=" block max-w-[80%] max-h-[100%] rounded-[8px]"
                  />
                </div>
                <div className=" text-xs uppercase mb-[2px] whitespace-nowrap font-bold text-ellipsis overflow-hidden ">
                  Nasty Gal Code
                </div>
                <div className="whitespace-nowrap font-[400] text-base overflow-hidden text-ellipsis">
                  Sale! 72% Off Everything
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* tearm */}
      <p className="my-4 text-center text-xs text-[#757575]">
        When you buy through links on RetailMeNot we may earn a commission.{' '}
        <Link href="/">
          <a className=" font-semibold underline">Learn more</a>
        </Link>
      </p>
    </div>
  );
};

export default Hero;
