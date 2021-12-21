import Link from 'next/link';
import React from 'react';
import CateFilter from './CateFilter';

const AllCate = (props: any) => {
  const { data } = props;
  return (
    <div className="lg:px-[8%] md:px-[4%] sm:px-[4%] px-[2%] mt-4 py-4">
      <h2 className="sm:text-2xl text-center sm:text-left text-xl font-bold mb-4">
        All Categories
      </h2>
      <div className="bg-white shadow-sm mb-0 border-[1px] border-[#e0e0e0]">
        <div className="pt-2 border-b-[1px] border-[#e0e0e0]">
          <CateFilter />
        </div>

        {data.length != 0 ? (
          <ul className="px-5 py-4 flex flex-wrap">
            {data.map(
              (
                site: {
                  name:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                },
                i: React.Key | null | undefined
              ) => (
                <li key={i} className=" min-w-[200px] p-3 max-w-[250px] w-auto">
                  <Link href="/site/name">
                    <a className="text-[#727272] hover:text-fuchsia-700">
                      {site.name}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
        ) : (
          <p className="text-center py-10 text-2xl font-bold">
            Result not found{' '}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCate;
