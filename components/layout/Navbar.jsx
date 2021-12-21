/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Navbar = () => {
  const [menuActive, setmenuActive] = useState(false);
  const [focused, setFocused] = useState(false);

  const [inputValue, setinputValue] = useState('');
  const [StoreValue, setStoreValue] = useState('');
  console.log(inputValue);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const router = useRouter();
  useEffect(() => {
    if (inputValue != '') {
      const store = stores.filter((e) =>
        e.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setStoreValue(store);
    }
  }, [inputValue]);

  console.log(StoreValue);
  return (
    <nav className=" main-navbar z-[1000]">
      <div className="logo">
        <Link href="/">
          <a>
            <svg
              className="sc-pRcHn dpwnAt w-[156px] h-[29px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 675.5 612 117.6"
            >
              <g>
                <path d="M102.9 783.8c-4.8-.5-8.5-1.4-12-4.2-3.2-2.6-5.7-6.9-7.7-12.4-4.3-11.9-8.6-26.5-10.7-33.9 27.9-9.7 40.8-22.4 40.8-36.4 0-12.9-10.6-21.4-34-18.4-10.3 1.3-17.9 2.6-25.9 4.2-30 5.8-41.3 18.8-41.3 32.1 0 9 7.9 15.3 17.1 15.3 6.3 0 6.9-3.5 5-4.9-3.9-3-6.3-5.8-6.3-10.8 0-7.8 5.9-17.9 27.5-22.7 1.4-.3 2.5-.5 3.7-.8-3.6 10.2-10 28.1-15.8 43.4C10.4 747.5 0 765.7 0 778.3c0 9.4 7.4 14.8 16.1 14.8 13.4 0 23.8-8.9 32.2-29 3.1-7.3 6.5-15.9 9.7-24.8 2.1 7.8 6 21.5 10.2 32.5 2.4 6.4 4.6 10.9 7.8 14.2 3.9 3.9 9.3 5.9 15.6 5.9 7.5 0 12-2.5 13.1-4.3 1.6-2.1.8-3.6-1.8-3.8zm-69.6-24.3c-7.3 15-11.8 21.3-17.5 22.3-2.5.4-4.6-.8-4.6-4.6 0-4.1 4.5-19.6 28.1-32-2.4 6.2-4.5 11.2-6 14.3zm29.3-32.4c5.7-15.7 11-30.7 14-39.4 12.5-1.4 18.9 2.4 18.9 11.8 0 9.1-7.7 18.1-24.3 24.5-3.1 1-5.9 2.1-8.6 3.1zM415.2 759.8c-2.5 0-6.3 4.1-12.9 4.1-4.5 0-6.9-2.9-6.9-8.9 0-1.5.2-3.1.5-4.8h1.7c21.4 0 34.2-12.4 34.2-24.5 0-8.7-6.7-13.1-13.2-13.1-16 0-35.3 19-38.6 38.4-4.6 7.8-8.4 10.8-10.7 10.7-2.6-.1-2.4-3.8 0-10.8 3.7-10.6 9-24.9 13.7-35.9 9.2-21.8 15-33.9 15.8-36.4.7-2.5-.6-3-3.2-2.5-9.3 1.4-14.5 1-18.4 7.5-6.3 10.4-33.1 52.1-33.1 52.1s7.9-51.6 9.2-56.9c.6-2.9-.8-3.7-3.4-3.1-3 .8-5.6 1.5-9.6 2.8-3.5 1.2-4.2 2.3-6.7 7.9-1.3 3-11.5 33.4-18.8 48.7-7.6 16.3-13.8 25.9-28.2 27-3.9.3-4.1 2.3-3.1 4.8 2.2 5.2 7.8 8.3 12.9 8.3 9 0 15.4-6.4 21.5-21.2 5.1-12.3 12.6-33.4 18.2-49.3-4.7 24.7-10.2 57.6-11 66.3-.4 5.1 6.4 5.2 9.1.2 7.2-13 22.8-39.7 36.8-63.9-5.7 13.7-12.4 29.9-15.5 39-2.1 6.7-4 11.5-4 17.7 0 7.1 4.9 11.3 10.3 11.3 5.5 0 11.9-2.8 18.6-11.3 2 7.1 7.3 11.5 16.3 11.5 11.8 0 20.4-8.1 20.4-13.1.5-1.6-.5-2.6-1.9-2.6zm-.2-36.5c6.7 0 1.5 17.5-15.9 18 4.4-9.3 11.5-18 15.9-18zm-34.8-30.9c-.1.1-.1.2-.2.3.1-.2.2-.2.2-.3zm-39.2-9.6c0-.1 0-.2.1-.3-.1.1-.1.2-.1.3z"></path>
                <path d="M514.4 694.6c6.3-4.5 11-4.8 12.5-6 2.2-1.9-.8-11.1-9.5-11.1-13.9 0-21.1 17.4-26.6 32.7-3.6 10-7.6 22.1-10.7 31.9 1.5-21.5 4.1-55.9 4.2-59.8.1-2 0-3.1-1-3.5.1-.1.1-.1.1-.2h-.7c-.3-.1-.7-.1-1.3-.1-1.9 0-3.6.1-5.4.1h-24.1c-35.4 0-32.7 33.2-10.8 33.2 4 0 4.1-3.9 2.2-5-7.9-4-9.5-18.5 17-18.5h7.2c-3.3 11.3-9.5 30.4-17.4 47.3-8.4 18-13.1 24.7-26.3 28.1-3.8 1-3.5 3.1-2.4 5.5 1.3 3 6 6.1 11.9 6.1 10.4 0 15.9-7.6 21.5-22.9 5.5-14.8 10.1-29.2 13.5-40.4-1 23.9-1.8 54.6-2 60.2-.1 4.2 1.6 4.2 4.9 2.8 6.7-2.9 9-3.9 10.8-9.3 5.6-17.2 11-31.5 17.4-47.6 3.8-10.3 9.8-19.8 15-23.5z"></path>
                <path d="M533.8 714c-27.9 0-41.5 32.3-41.5 46.2 0 9.9 6.3 16 16.8 16 23.3 0 36.7-31.8 36.7-46.4 0-10-4.6-15.8-12-15.8zm-20.2 49.3c-10.4 0 3.4-39 12.7-39 8.7 0-1.7 39-12.7 39z"></path>
                <path d="M607.3 697c-2.3 0-10.5.2-22.9.6 2-4.9 3.6-8.8 4.7-11.4.8-2 .4-3.2-1.7-3.2-1.9 0-5.2.6-9.1 1.7-5.3 1.4-5.9 2.3-8.8 8.5-.6 1.3-1.4 3-2.2 5.1-12.1.4-26.2 1.1-41.7 1.7-6 .3-14.6 7.8-7.2 7.8 14.6 0 30.4.5 44.8 1-2.2 5.9-5 13.2-8.4 21.8-4.2 10.8-10.2 23.7-10.2 32.6 0 6.6 4.5 12.3 12.5 12.3 10 0 14-5.8 12.9-9.2-.6-1.9-2.4-1.9-6.3-1.9-2.6 0-3.6-1.8-3.6-3.8 0-3.1 1.5-6.3 3.1-10.5 5.6-14.6 11.4-29 16.3-40.8 4 .1 7.8.1 11.3.1 8.6 0 11.9-.2 14.9-2.5 2.5-1.9 3.7-3 5.1-4.8 1.6-1.8 2.4-5.1-3.5-5.1zM254.5 711.2c4.6 0 9.2-4.2 10.3-9.4 1.1-5.2-1.7-9.4-6.3-9.4s-9.2 4.2-10.3 9.4c-1.1 5.2 1.7 9.4 6.3 9.4z"></path>
                <path d="M274 764.8c-2.2-.3-2.9-1.8-2.9-4.3 0-3.1.8-7.4 2.3-12.3 36.3-17.1 60.2-69.1 33.1-69.1-18 0-40.5 39.9-47.7 67.1-4 6.5-10.8 16.2-15.6 16.2-3.7 0-2.8-4.9 0-12.2 6.3-17 15.4-34.4 15.4-34.4s-4.6-1.9-10.8-.8c-4 .7-5.8 2.8-7.7 6.4-.2.3-.5.7-.7 1.4-11.8 25.3-19.2 39.6-25.9 39.6-4.7 0-2-5.2.6-12.4 6.3-17 15.4-34.4 15.4-34.4s-4.6-1.9-10.8-.8c-3.9.6-5.7 2.5-7.5 5.9-1.3-3.5-3.9-6.9-9.6-6.9-17.5 0-30.6 22.5-34.3 38.4-3.6 5.5-8.3 11.4-11.8 11.4s-3.5-3.1-.7-10.3c4.5-11.5 13-31.5 19.8-47.2 17.2.4 33.4.7 42.7.7 8.6 0 11.9-.2 14.9-2.5 2.5-1.9 3.7-3 5.1-4.8 1.5-1.8 2.1-5.1-3.7-5.1-3.2 0-26.7.7-54.7 1.8 2.1-4.8 3.8-8.6 4.8-10.8.6-1.4-.3-2.9-2.4-2.6-3.3.3-4.5.7-7.9 1.6-5.3 1.3-6.6 2.9-9.5 9-.4.8-1 2-1.6 3.5-11.1.4-22.5 1-33.1 1.4-6 .3-12.9 7-5.6 7 9.2 0 21.7.2 34.9.5-2.3 5.2-4.9 11.2-7 16.5-.2.4-.5 1-.7 1.6-8.9 20.2-22.5 41.5-37.4 41.5-5.8 0-8.3-3.8-8.3-8.8 0-1.9.3-3.9.7-6 .5 0 1.2.1 1.9.1 21.4 0 34-13.1 34-25.2 0-7.7-6.5-12.3-12.9-12.3-17.6 0-39.1 22.9-39.1 44.1 0 11.4 6.1 19 16.5 19 14 0 24.9-8.6 32.5-18-.4 2.1-.6 4.2-.6 6.3 0 6.6 3.8 11.4 10 11.4 7 0 13-4.2 18.6-11.7 1.2 7.4 5.4 11.7 11.7 11.7 7.4 0 13.8-5.6 18.9-12.4.3 6.1 2.4 12.4 10.6 12.4 5.7 0 11.7-3.1 18.6-12.8.2 6.4 2.9 13.1 10.5 13.1 7.4 0 14-5.3 19.9-13.4.5 8.1 4.9 12.8 11.1 12.8 6.4 0 11.8-4.1 11.4-8.7-.3-3.4-3.3-1.9-5.4-2.2zm31.2-74.4c3.9 0-6.8 28.1-26.5 43.7 8.4-20.6 21.8-43.7 26.5-43.7zM124 722.7c6.8 0 2.6 18.9-15.4 18.9h-.2c4.2-9.8 11.1-18.9 15.6-18.9zm60.4 40.3c-10.2 0 7-38.4 16.7-38.4 3.7 0 5 2.4 5.5 4.5-7.9 18.5-14.5 33.9-22.2 33.9z"></path>
              </g>
            </svg>
          </a>
        </Link>
      </div>
      {/* Search */}
      <div className="search_bar hidden lg:block">
        <div className="form_box">
          <form action="" method="get" className="form border-[1px]">
            <div className="form_inner relative p-0 m-0 bottom-0 ">
              <span className=" absolute inline-block bottom-[1px] w-[18px] h-[18px] translate-y-[-50%] top-[50%] left-[16px] ">
                <Image
                  src="/image/icons/search-icon.png"
                  width="18"
                  height="18"
                  alt="search"
                />
              </span>
              <input
                type="search"
                className="formInput outline-none"
                placeholder="Search on RetailMeNot"
                onFocus={onFocus}
                onChange={(e) => setinputValue(e.target.value.trim())}
              />
            </div>
            {/* search result */}
            {inputValue != '' ? (
              <div
                onBlur={onBlur}
                className="from_resulte relative top-[100%] left-0 text-[#323232] bg-white z-50 shadow-2xl"
              >
                {StoreValue == '' || inputValue == '' ? (
                  <ul className="text-left py-2 border-t-[#e0e0e02f] border-t-[1px]">
                    <li className=" font-bold px-4">Popular at RetailMeNot</li>
                    <li>
                      <a href="/sitemap" className="form_link">
                        Online Codes
                      </a>
                    </li>
                    <li>
                      <a href="/sitemap" className="form_link">
                        In-Store Coupons
                      </a>
                    </li>
                    <li>
                      <a href="/sitemap" className="form_link">
                        Cash Back Offers
                      </a>
                    </li>
                    <li>
                      <a href="/sitemap" className="form_link">
                        Gift Card Deals
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="text-left py-2 border-t-[#e0e0e02f] border-t-[1px]">
                    <li className=" font-bold px-4">Store</li>
                    {StoreValue?.map((site, i) => (
                      <li key={i} onClick={() => setinputValue('')}>
                        <a
                          href={`/site/${site.name
                            .trim()
                            .split(' ')
                            .filter((e) => e != '.')
                            .join('-')
                            .toLowerCase()}`}
                          className="form_link"
                        >
                          {site.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="text-left py-2 border-t-[#e0e0e0ca] border-t-[1px]">
                  <li>
                    <Link href="/">
                      <a className="form_link">
                        How to Save the Most With RetailMeNot
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>

      <div
        className="lg:hidden"
        onClick={() =>
          menuActive ? setmenuActive(false) : setmenuActive(true)
        }
      >
        <p className="menu_icon"></p>
        <p className="menu_icon"></p>
        <p className="menu_icon"></p>
      </div>

      {/* menu */}
      <div className={menuActive ? 'menu active_menu' : 'menu'}>
        <button
          className="menu_link min-w-max max-w-[7rem] h-11"
          onClick={() => router.push('/sitemap')}
        >
          Browse <div className=" inline-block ml-1 text-[12px]"> ▼ </div>
        </button>

        <button
          className="menu_link min-w-max max-w-[5rem] h-11 "
          onClick={() => router.push('https://sulemanraza.com/')}
        >
          Log in
        </button>

        <button
          className="menu_link border-[1px] px-2 lg:w-[10rem] h-11"
          onClick={() =>
            router.push('https://chrome.google.com/webstore', {
              target: '_blank',
            })
          }
        >
          Add to Chrome
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// const stores = [
//   { store: 'spincoupon.com', slug: 'site/spincoupon' },
//   { store: 'flytrip.com', slug: 'site/flytrip' },
//   { store: 'amazon.com', slug: 'site/amazon' },
//   { store: 'aliexpress.com', slug: 'site/aliexpress' },
//   { store: 'domainmesh.com', slug: 'site/domainmesh' },
// ];

const stores = [
  { name: 'A Beka Book' },
  { name: 'A Main Hobbies' },
  { name: "A'GACI" },
  { name: "A'GACI" },
  { name: 'A Pea in the Pod' },
  { name: 'A&W All American Food' },
  { name: 'B-21' },
  { name: 'B.A. Mason' },
  { name: 'B&H Photo' },
  { name: 'Babbel' },
  { name: 'Babiators' },
  { name: 'Cabiators' },
  { name: '1-800 Contacts' },
  { name: 'adidas' },
  { name: 'Advance Auto Parts' },
  { name: 'AliExpress' },
  { name: 'Amazon' },
  { name: 'American Eagle' },
  { name: 'ASOS' },
  { name: 'Bath & Body Works' },
  { name: 'Bob Evans' },
  { name: 'boohoo' },
  { name: 'BrüMate' },
  { name: 'Casetify' },
  { name: 'Chewy' },
  { name: 'Costco' },
  { name: "Domino's Australia" },
  { name: 'DoorDash' },
  { name: 'Edible Arrangements' },
  { name: 'Fashion Nova' },
  { name: 'Fashion to Figure' },
  { name: 'Gap' },
  { name: 'GrubHub' },
  { name: 'H&M' },
  { name: 'Hobby Lobby' },
  { name: 'Hydro Flask' },
  { name: 'JCPenney' },
  { name: 'JoAnn' },
  { name: "Kohl's" },
  { name: "Lowe's" },
  { name: 'Lyft' },
  { name: "Macy's" },
  { name: 'Myntra' },
  { name: 'Office Depot & OfficeMax' },
  { name: 'Old Navy' },
  { name: 'Olive Garden' },
  { name: "Papa John's" },
  { name: 'Peloton' },
  { name: 'PetSmart' },
  { name: 'Redbubble' },
  { name: 'Sephora' },
  { name: 'SHEIN' },
  { name: 'Shutterfly' },
  { name: 'Staples' },
  { name: 'Target' },
  { name: 'Turo' },
  { name: 'Uber' },
  { name: 'Ulta' },
  { name: 'Walgreens Photo' },
  { name: 'Wayfair' },
  { name: 'Wingstop' },
  { name: 'Wish' },
];
