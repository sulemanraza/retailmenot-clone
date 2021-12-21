import Image from 'next/image';
import { useRouter } from 'next/router';
import { Key } from 'react';
import Card from './Card';
import { data } from './offer_data';
const Offers = () => {
  const router = useRouter();
  const baseurl = '/image/home/site/';
  return (
    <div className="px-[2%] sm:px-[4%] md:px-[6%] lg:px-[8%] py-4 md:py-10">
      <h2 className=" text-center sm:text-left font-bold  text-[22px] mb-10">
        Top Offers
      </h2>
      <div className=" grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data
          ? data.map((item: any, i: Key | null | undefined) => (
              <Card key={i} item={item} />
            ))
          : ''}
      </div>
    </div>
  );
};

export default Offers;
