import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CateHero = () => {
  return (
    <div className="lg:px-[8%] md:px-[4%] sm:px-[4%] px-[2%] py-4 bg-white">
      <ul className="flex flex-wrap justify-center py-[1rem]">
        {data.slice(0, 12).map((e, i) => (
          <li
            key={i}
            className="flex flex-col mb-4 sm:w-[11.5rem] sm:h-[11.5rem] w-[9.5rem] h-[9.5rem] "
          >
            <Link href="/">
              <a className="h-full text-center grid place-items-center  text-[#323232] hover:text-[#741fa2]">
                <div className=" hover:p-1 hover:shadow-md hover:border-[#741fa2] hover:border-2 hover:rounded-[50%] sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem]">
                  <Image
                    src={e.logo}
                    width="200"
                    height="200"
                    alt="Domino's Australia"
                    className=" rounded-[50%] h-full w-auto max-w-full border-[#741fa2]  border-2"
                  />
                </div>
                <div className="font-[700] sm:leading-8 sm:text-[18px]  leading-5  text-[15px]  ">
                  {e.name}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const data = [
  {
    name: 'Accessories',
    logo: '/image/home/cate/1.png',
  },
  {
    name: 'Auto',
    logo: '/image/home/cate/2.png',
  },
  {
    name: 'Baby',
    logo: '/image/home/cate/3.png',
  },
  {
    name: 'Beauty',
    logo: '/image/home/cate/4.png',
  },
  {
    name: 'Books',
    logo: '/image/home/cate/5.png',
  },
  {
    name: 'Clothing',
    logo: '/image/home/cate/6.png',
  },
  {
    name: 'Clothing',
    logo: '/image/home/cate/7.png',
  },
  {
    name: 'Electronics',
    logo: '/image/home/cate/8.png',
  },
  {
    name: 'Entertainment',
    logo: '/image/home/cate/9.png',
  },
  {
    name: 'Flowers',
    logo: '/image/home/cate/10.png',
  },
  {
    name: 'Food & Dining',
    logo: '/image/home/cate/11.png',
  },
  {
    name: 'Pets',
    logo: '/image/home/cate/12.png',
  },
];
export default CateHero;
