/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import List from './components/List';

const CouponsList = () => {
  return (
    <div>
      <div className="hidden sm:mt-3 lg:mt-0 sm:flex items-center justify-between">
        <h1 className=" text-[24px] font-extrabold">Macy's Coupon Codes</h1>
        <div className=" flex items-center cursor-pointer font-bold text-fuchsia-800 hover:text-fuchsia-900">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M15.375 12.875a.625.625 0 1 1 0 1.25h-1.25v1.25a.625.625 0 1 1-1.25 0v-1.25h-1.25a.625.625 0 1 1 0-1.25h1.25v-1.25a.625.625 0 1 1 1.25 0v1.25h1.25zM11.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm2.25 3.657a.344.344 0 0 1-.1.24L6.896 13.65a.347.347 0 0 1-.48 0L1.349 8.584a.34.34 0 0 1 0-.481L8.102 1.35c.064-.064.15-.1.24-.1h5.068a.34.34 0 0 1 .34.34v5.067zm1.25 0V1.59C15 .714 14.287 0 13.41 0H8.343c-.425 0-.824.165-1.124.466L.464 7.219a1.594 1.594 0 0 0 0 2.248l5.068 5.067c.3.301.7.466 1.124.466a1.58 1.58 0 0 0 1.125-.466l6.755-6.754c.299-.3.464-.699.464-1.123z"
                id="tag-add-a"
              ></path>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h16v16H0z"></path>
              <use fill="currentColor" xlinkHref="#tag-add-a"></use>
            </g>
          </svg>
          <div className="ml-2">Submit a Coupon</div>
        </div>
      </div>
      {/* coupon List */}
      <ul className="py-5">
        {deal.map((item, i) => (
          <List key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

const deal = [
  {
    title: '12% Cash Back For Online Purchases Sitewide',
    offerType: 'SELL',
    discount: '12%',
    todayUse: '1.3',
    affLink: 'https://www.google.com/',
    expires: '12/19/2021',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro deserunt debitis soluta doloremque minus, reiciendis, quaerat voluptate expedita saepe illo harum autem odio, sit nemo qui? Modi similique necessitatibus unde. Ea modi, nemo, unde vitae fuga voluptatem porro cumque sunt, quae culpa ab molestias debitis sed repudiandae omnis fugit.',
  },
  {
    title: '24% Cash Back For Online Purchases Sitewide',
    offerType: 'SELL',
    discount: '24%',
    todayUse: '1',
    affLink: 'https://www.google.com/',
    expires: '',
    details: '',
  },
  {
    title: '55% Cash Back For Online Purchases Sitewide',
    offerType: 'Code',
    discount: '55%',
    todayUse: '2.3',
    affLink: 'https://www.google.com/',
    expires: '12/19/2021',
    details: '',
  },
  {
    title: '21% Cash Back For Online Purchases Sitewide',
    offerType: 'code',
    discount: '21%',
    todayUse: '',
    affLink: 'https://www.google.com/',
    expires: '',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro deserunt debitis soluta doloremque minus, reiciendis, quaerat voluptate expedita saepe illo harum autem odio, sit nemo qui? Modi similique necessitatibus unde. Ea modi, nemo, unde vitae fuga voluptatem porro cumque sunt, quae culpa ab molestias debitis sed repudiandae omnis fugit.',
  },
];

export default CouponsList;
