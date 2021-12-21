import Link from 'next/link';
import React, { useState } from 'react';

const MoreCate = (props: any) => {
  const { cate, store } = props;
  const [storeActive, setstoreActive] = useState(false);
  const [cateActive, setcateActive] = useState(false);
  return (
    <div className="mt-10 hidden md:block">
      {/* store */}
      <div className=" border-b-[1px] border-t-[1px]">
        <div
          onClick={() =>
            storeActive ? setstoreActive(false) : setstoreActive(true)
          }
          className="py-5 cursor-pointer text-2xl text-center text-[#741fa2]"
        >
          <div className="flex justify-center items-center">
            <span>Popular Stores </span>
            {storeActive ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[blue] w-4 h-4 ml-5"
              >
                <path
                  d="M8 7.523l2.954 2.518a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L8.53 5.96a.767.767 0 0 0-1.048-.009l-3.506 3.03a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L8 7.523z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[blue] w-4 h-4 ml-5"
              >
                <path
                  d="M8 8.478l2.954-2.517a.77.77 0 0 1 1.058 0l.014.015a.721.721 0 0 1-.009 1.052L8.53 10.04a.767.767 0 0 1-1.048.008L3.975 7.02a.719.719 0 0 1-.001-1.042l.015-.015a.767.767 0 0 1 1.048-.01L8 8.477z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            )}
          </div>
        </div>
        {storeActive ? (
          <div className="py-4 grid md:grid-cols-4 md:text-center lg:grid-cols-5 gap-3 px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]">
            {store.map((site: any, key: React.Key | null | undefined) => (
              <Link key={key} href="/">
                <a className=" text-sm capitalize text-[#595959] hover:underline hover:text-blue-500">
                  {site.name}
                </a>
              </Link>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
      {/* cate */}
      <div className=" ">
        <div
          onClick={() =>
            cateActive ? setcateActive(false) : setcateActive(true)
          }
          className="py-5 cursor-pointer text-2xl text-center text-[#741fa2]"
        >
          <div className="flex justify-center items-center">
            <span>Popular Categories </span>
            {cateActive ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[blue] w-4 h-4 ml-5"
              >
                <path
                  d="M8 7.523l2.954 2.518a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L8.53 5.96a.767.767 0 0 0-1.048-.009l-3.506 3.03a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L8 7.523z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[blue] w-4 h-4 ml-5"
              >
                <path
                  d="M8 8.478l2.954-2.517a.77.77 0 0 1 1.058 0l.014.015a.721.721 0 0 1-.009 1.052L8.53 10.04a.767.767 0 0 1-1.048.008L3.975 7.02a.719.719 0 0 1-.001-1.042l.015-.015a.767.767 0 0 1 1.048-.01L8 8.477z"
                  fill="currentColor"
                  fillRule="nonzero"
                ></path>
              </svg>
            )}
          </div>
        </div>
        {cateActive ? (
          <div className="py-4  ease-in duration-700 grid md:grid-cols-4 md:text-center lg:grid-cols-5 gap-3 px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%]">
            {cate.map((catetagies: any, key: React.Key | null | undefined) => (
              <Link key={key} href="/">
                <a className=" inline-block text-sm capitalize text-[#595959] hover:underline hover:text-blue-500">
                  {catetagies.name}
                </a>
              </Link>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MoreCate;
