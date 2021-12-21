import { useRouter } from 'next/router';

const CateFilter = () => {
  const router = useRouter().query;
  let slug: any = router.slug;
  return (
    <ul className="flex flex-row flex-wrap px-[10px] sm:px-[24px] bg-white m-0 border-0 ">
      {data.map((e, i) =>
        e.name.toLowerCase() == slug ? (
          <li
            key={i}
            className="flex-auto  mb-0 text-center mx-[3px] cursor-pointer  border-b-[3px]  border-[#741fa2]"
          >
            <a
              href={`/coupons/${e.slug.toLowerCase()}`}
              className="inline-block text-[18px] leading-8 hover:text-[#741fa2] "
            >
              {e.name}
            </a>
          </li>
        ) : (
          <li
            key={i}
            className="flex-auto  mb-0 text-center mx-[3px] cursor-pointer border-b-[3px] border-transparent hover:border-b-[3px] hover:border-[#741fa2]"
          >
            <a
              href={`/coupons/${e.slug.toLowerCase()}`}
              className="inline-block text-[18px] leading-8 hover:text-[#741fa2] "
            >
              {e.name}
            </a>
          </li>
        )
      )}
    </ul>
  );
};
const data = [
  {
    name: 'A',
    slug: 'A',
  },
  {
    name: 'B',
    slug: 'B',
  },
  {
    name: 'C',
    slug: 'C',
  },
  {
    name: 'D',
    slug: 'D',
  },
  {
    name: 'E',
    slug: 'E',
  },
  {
    name: 'F',
    slug: 'F',
  },
  {
    name: 'G',
    slug: 'G',
  },
  {
    name: 'H',
    slug: 'H',
  },
  {
    name: 'I',
    slug: 'I',
  },
  {
    name: 'J',
    slug: 'J',
  },
  {
    name: 'K',
    slug: 'K',
  },
  {
    name: 'L',
    slug: 'L',
  },
  {
    name: 'M',
    slug: 'M',
  },
  {
    name: 'N',
    slug: 'N',
  },
  {
    name: 'O',
    slug: 'O',
  },
  {
    name: 'P',
    slug: 'P',
  },
  {
    name: 'Q',
    slug: 'Q',
  },
  {
    name: 'R',
    slug: 'R',
  },
  {
    name: 'S',
    slug: 'S',
  },
  {
    name: 'T',
    slug: 'T',
  },
  {
    name: 'U',
    slug: 'U',
  },
  {
    name: 'V',
    slug: 'V',
  },
  {
    name: 'W',
    slug: 'W',
  },
  {
    name: 'X',
    slug: 'X',
  },
  {
    name: 'Y',
    slug: 'Y',
  },
  {
    name: 'Z',
    slug: 'Z',
  },
];
export default CateFilter;
