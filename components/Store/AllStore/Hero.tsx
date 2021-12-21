import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StoreHero = () => {
  return (
    <div className="lg:px-[8%] md:px-[4%] sm:px-[4%] px-[2%] py-4">
      <h2 className=" hidden sm:block text-2xl font-bold">Popular Stores</h2>
      <ul className="flex flex-wrap justify-center py-[1rem]">
        {data.map((e, i) => (
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
    name: "Domino's Australia",
    logo: '/image/home/store/1.jpg',
  },
  {
    name: 'Redbubble',
    logo: '/image/home/store/2.jpg',
  },
  {
    name: "Macy's",
    logo: '/image/home/store/3.jpg',
  },
  {
    name: "Papa John's",
    logo: '/image/home/store/4.jpg',
  },
  {
    name: 'Amazon',
    logo: '/image/home/store/5.jpg',
  },
  {
    name: 'Peloton',
    logo: '/image/home/store/6.jpg',
  },
  {
    name: 'DoorDash',
    logo: '/image/home/store/7.jpg',
  },
  {
    name: 'Target',
    logo: '/image/home/store/8.jpg',
  },
  {
    name: '1-800 Contacts',
    logo: '/image/home/store/9.jpg',
  },
  {
    name: 'Lyft',
    logo: '/image/home/store/10.jpg',
  },
  {
    name: 'AliExpress',
    logo: '/image/home/store/11.jpg',
  },
  {
    name: "Lowe's",
    logo: '/image/home/store/12.jpg',
  },
];
export default StoreHero;
