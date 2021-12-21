import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
const Card = (props: any) => {
  const { item } = props;
  const router = useRouter();
  const baseurl = '/image/home/site/';
  return (
    <>
      <button
        onClick={() => router.push('https://www.google.com')}
        className=" shadow-md hover:shadow-lg border-[1px] block h-[100%] w-[100%] border-[#e0e0e0] rounded-md "
      >
        <div className="h-[100%] overflow-hidden">
          <div className="relative  w-[100%] min-w-max h-auto bg-white border-b-[1px] p-0 m-0 border-[#7070702b] ">
            <Image
              src={baseurl + item.logo}
              width="270"
              height="122.5"
              layout="responsive"
              alt="home"
              className="absolute min-h-[100%] rounded-t-md  top-[50%] left-[50%] right-[-50%] bottom-[-50%] "
            />
          </div>
          <div className=" relative flex flex-col px-4  pt-2 pb-3 ">
            <div className=" text-xs mb-2 uppercase text-[#757575] font-semibold text-left">
              <p>{item.type}</p>
            </div>
            <div className=" flex-1 min-h-[48px] overflow-hidden text-[16px] font-normal mb-[10px] text-left">
              <h2>{item.title}</h2>
            </div>
            <div className="text-[0.75rem] mt-[6px] text-left">
              {item.sponsored ? (
                <p>Sponsored</p>
              ) : (
                <p>{`${
                  item.todayuse >= 1000 ? item.todayuse + 'k' : item.todayuse
                } uses today`}</p>
              )}
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default Card;
