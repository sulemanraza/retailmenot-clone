import React, { useState } from 'react';

const List = (props: any) => {
  const { item } = props;
  const [activemore, setactivemore] = useState(false);
  const [activeDetails, setactiveDetails] = useState(true);
  const [addComm, setaddComm] = useState(false);
  const details = () => {
    setactiveDetails(true);
    setaddComm(false);
  };
  const addComment = () => {
    setactiveDetails(false);
    setaddComm(true);
  };

  return (
    <li className="mb-2 bg-white list-none border-[1px] border-[#e0e0e0] rounded-lg shadow-sm hover:shadow-md ">
      <div className="grid sm:grid-cols-5 gap-2">
        <div className=" sm:col-span-1  ">
          <div className="whitespace-nowrap uppercase p-2 sm:p-4 text-[#741fa2] overflow-hidden font-[900] flex items-center text-center sm:flex-col justify-center flex-wrap">
            <div className="m-0 text-[1.5em] leading-8	  md:text-[2.1em]">
              {item.discount}
            </div>
            <div className="sm:m-0 text-[1.5em] ml-2   md:text-[1.8em]">
              OFF
            </div>
          </div>
        </div>
        <div className=" sm:col-span-3 px-3 py-2 w-full">
          <div className=" font-bold text-sm uppercase text-fuchsia-700">
            {item.offerType}
          </div>
          <h2 className=" text-[17px] lg:text-[22px] sm:text-[20px] text-[#323232] py-2 font-[600] break-words">
            {item.title}
          </h2>
          {item.todayUse != '' ? (
            <div className="flex flex-wrap text-[#595959] text-[0.875rem]">
              <div className="u">Verified</div>
              <div className="ml-1">{item.todayUse}k uses today</div>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="flex items-center justify-center p-2">
          <button className="p-2 rounded-full w-full bg-fuchsia-700 hover:bg-fuchsia-900 text-white text-center">
            Get Deal
          </button>
        </div>
      </div>
      {/* Footer Section */}
      <div className="w-full bg-[#f7f7f7] border-t-[1px] rounded-b-xl p-2">
        <button
          onClick={() =>
            activemore ? setactivemore(false) : setactivemore(true)
          }
          className="px-7 flex items-center text-[13px] font-semibold text-[#595959"
        >
          <div> See Details</div>{' '}
          {activemore ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.478l2.954-2.517a.77.77 0 0 1 1.058 0l.014.015a.721.721 0 0 1-.009 1.052L8.53 10.04a.767.767 0 0 1-1.048.008L3.975 7.02a.719.719 0 0 1-.001-1.042l.015-.015a.767.767 0 0 1 1.048-.01L8 8.477z"
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
            >
              <path
                d="M8 7.523l2.954 2.518a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L8.53 5.96a.767.767 0 0 0-1.048-.009l-3.506 3.03a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L8 7.523z"
                fill="currentColor"
                fillRule="nonzero"
              ></path>
            </svg>
          )}
        </button>
        {/* on Activte More Details */}
        {activemore && (
          <div className="px-7">
            <div className="  flex text-#595959 border-b-[1px]">
              {item.expires != '' || item.details != '' ? (
                <button
                  onClick={details}
                  className={
                    activeDetails
                      ? 'inline-block py-[11px] mr-[30px] font-bold text-[#741fa2] border-b-[#741fa2] border-b-2'
                      : 'inline-block py-[11px] mr-[30px] font-bold text-[#323232]'
                  }
                >
                  Details
                </button>
              ) : (
                ''
              )}
              <button
                onClick={addComment}
                className={
                  addComm
                    ? ' inline-block py-[11px] mr-[30px] font-bold text-[#741fa2] border-b-[#741fa2] border-b-2'
                    : ' inline-block py-[11px] mr-[30px] font-bold text-[#323232]  '
                }
              >
                Add a Comment
              </button>
            </div>
            {/* Details Start here */}
            {item.expires != '' || item.details != ''
              ? activeDetails && (
                  // if have end date
                  <div className="py-3">
                    {item.expires != '' ? (
                      <div className="flex items-center">
                        <strong>Expires: </strong>
                        <span className="ml-2">{item.expires}</span>
                      </div>
                    ) : (
                      ''
                    )}
                    {item.details != '' ? (
                      // if have details of coupon
                      <div className="flex pt-4">
                        <strong>Details: </strong>
                        <p className="ml-2">{item.details}</p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )
              : ''}
            {/* Add Comment */}
            {addComm && (
              <div className="py-5  ">
                <div className="flex items-center">
                  <svg
                    className="LiveChat__Icon-sc-1l39b66-2 fEIIBQ svgIcon w-8 h-8 fill-fuchsia-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      className="cls-1"
                      d="M15.24 13.26a4.87 4.87 0 0 0 .76-2.6 5.2 5.2 0 0 0-2.7-4.44v-.1a.68.68 0 0 0 0-.13V5.7a.67.67 0 0 0 0-.14A6.42 6.42 0 0 0 6.66 0C3 0 0 2.7 0 6a5.55 5.55 0 0 0 .85 2.94 3.28 3.28 0 0 1-.67 1.94.67.67 0 0 0 .5 1.12 5.56 5.56 0 0 0 2.7-.8 6.7 6.7 0 0 0 .7.3A5.92 5.92 0 0 0 10 16a6.37 6.37 0 0 0 2.92-.7 5.12 5.12 0 0 0 2.44.7.67.67 0 0 0 .48-1.13 2.72 2.72 0 0 1-.6-1.6zM3.34 9.73a.67.67 0 0 0-.4.15 3.32 3.32 0 0 1-1 .54 5.76 5.76 0 0 0 .26-1.67.66.66 0 0 0-.1-.37A4.24 4.24 0 0 1 1.33 6c0-2.57 2.4-4.67 5.32-4.67s5.24 2 5.32 4.53a5.16 5.16 0 0 1-5.32 4.8 5.53 5.53 0 0 1-3-.83.67.67 0 0 0-.3-.1zM14.1 14.4a2.8 2.8 0 0 1-.75-.4.67.67 0 0 0-.77 0 5 5 0 0 1-2.6.7 4.68 4.68 0 0 1-4.4-2.75 7.1 7.1 0 0 0 1.08.05A6.64 6.64 0 0 0 13 7.63a3.8 3.8 0 0 1 1.66 3 3.57 3.57 0 0 1-.65 2 .66.66 0 0 0-.1.38 5.1 5.1 0 0 0 .2 1.4z"
                    ></path>
                  </svg>
                  <span className="text-sm ml-3 text-fuchsia-800">
                    Need Help?
                  </span>
                </div>
                <div className="w-full mt-6 ">
                  <form
                    action=""
                    method="post"
                    className="w-full mt-6 grid place-items-center "
                  >
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="First Name "
                      className="block w-[50%] outline-none indent-2 mb-2 border-[1px] rounded-lg p-1 border-[#e0e0e0]"
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="Add a comment..."
                      className="block w-[50%] h-[150px]  outline-none indent-2  border-[1px] rounded-lg p-1 border-[#e0e0e0]"
                    ></textarea>
                    <button
                      type="submit"
                      className=" bg-fuchsia-700 rounded-full hover:bg-fuchsia-900 text-white text-center p-2 w-[30%] mt-2 "
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

export default List;
