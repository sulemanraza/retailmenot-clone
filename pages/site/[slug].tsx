import { GetStaticProps, NextPage } from 'next';
import CouponsList from '../../components/Store/Site/MainList';
import Sidebar from '../../components/Store/Site/Sidebar';

const Store: NextPage = (props: any) => {
  const { result } = props;
  return (
    <div className="px-[2%] py-[30px] sm:px-[4%]   lg:px-[8%] bg-[#f7f7f7]">
      <div className="flex lg:self-end lg:flex-row flex-col box-border">
        {/* content */}
        <div className=" flex-initial  overflow-x-hidden basis-full lg:ml-[30px] order-2  ">
          <CouponsList />
        </div>
        {/* Sidebar */}
        <div className="sidebar w-full basis-full md:min-w-[220px] md:basis-[220px] order-1 ">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'amazon.com' } }, // See the "paths" section below
    ],
    fallback: true, // See the "fallback" section below
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const store = [
    {
      title: "Macy's Coupon Codes",
      about:
        "Rowland H. Macy opened his dry goods store R.H. Macy & Co. in 1858 in New York City. Today, Macy's has over 700 stores across the country, offering a great array of items, including designer clothing, home goods, fine jewelry, shoes, appliances and more. During the holiday season, it often stocks some of the most popular toys and gifts, too. The brand aims to cultivate regular shoppers with frequent Macy's discount codes, deals and sales, which is wonderful news for bargain hunters!",
      desc: "Coupons are probably what Macy's is most famous for—the retailer always seems to be running a discount of some kind—whether that's in the form of a printable coupon that appears in your mailbox or a virtual Macy's promo code that appears in your inbox. Just make sure your account has your most up-to-date physical address and email to start receiving Macy's offers. You can also receive special Macy's promo codes by downloading the Macy's app. See 16 more expert-approved ways to save at Macy's.",
      logo: '/image/home/store/1.jpg',
    },
  ];
  const deal = [
    {
      title: "25% Off Your Next Order With Macy's Email Sign Up",
      type: 'SALE',
      todayUse: '232',
      discount: '25%',
      details:
        "Get a Macy's Coupon for 25% off your next order with email sign up.",
      exclusive: true,
      exclusions:
        'Deals of the Day, Doorbusters, Everyday Values (EDV), Last Act, lowest prices of the season, Macy’s Backstage, specials, Super Buys, The Market @ Macy’s, athletic clothing/shoes/accessories, baby gear & socks, cosmetics/fragrances, designer handbags/sportswear, select designer jewelry/watches, furniture/mattresses/rugs, gift cards, gourmet foods, jewelry trunk shows, maternity, men’s and women’s premium denim, previous purchases, restaurants, select leased & licensed depts., services, kids’ & baby shoes, small appliances, smart watches/jewelry, special orders, special purchases, sterling silver, select tech, toys, Anova, ',
    },
    {
      title: "All Cardmembers! 25% Off Any Day With Macy's Star Passes",
      type: 'SALE',
      todayUse: '353',
      discount: '25%',
      details:
        "Get a Macy's Coupon for All Cardmembers! 25% Off Any Day With Macy's Star Passes",
      exclusive: true,
      exclusions:
        "All Cardmembers! 25% Off Any Day With Macy's Star Passes All Cardmembers! 25% Off Any Day With Macy's Star Passes",
    },
    {
      title: "Earn $10 Macy's Money When You Spent $50",
      type: 'SALE',
      todayUse: '232',
      discount: '25%',
      details: "Get a Macy's Earn $10 Macy's Money When You Spent $50.",
      exclusive: true,
      exclusions:
        "Earn $10 Macy's Money When You Spent $50 Last Act, lowest prices of the season, Macy’s Backstage, specials, Super Buys, The Market @ Macy’s, athletic clothing/shoes/accessories, baby gear & socks, cosmetics/fragrances, designer handbags/sportswear, select designer jewelry/watches, furniture/mattresses/rugs, gift cards, gourmet foods, jewelry trunk shows, maternity, men’s and women’s premium denim, previous purchases, restaurants, select leased & licensed depts., services, kids’ & baby shoes, small appliances, smart watches/jewelry, special orders, special purchases, sterling silver, select tech, toys, Anova, ",
    },
    {
      title: 'Extra 20% Off With Code',
      type: 'SALE',
      todayUse: '112',
      discount: '25%',
      details: "Get a Macy's Extra 20% Off With Code.",
      exclusive: false,
      exclusions:
        'Extra 20% Off With Code Last Act, lowest prices of the season, Macy’s Backstage, specials, Super Buys, The Market @ Macy’s, athletic clothing/shoes/accessories, baby gear & socks, cosmetics/fragrances, designer handbags/sportswear, select designer jewelry/watches, furniture/mattresses/rugs, gift cards, gourmet foods, jewelry trunk shows, maternity, men’s and women’s premium denim, previous purchases, restaurants, select leased & licensed depts., services, kids’ & baby shoes, small appliances, smart watches/jewelry, special orders, special purchases, sterling silver, select tech, toys, Anova, ',
    },
  ];
  const result = [{ store, deal }];
  // ...
  return {
    props: { result },
  };
  // revalidate: 10; // In seconds
};
export default Store;
