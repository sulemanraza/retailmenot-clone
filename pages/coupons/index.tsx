import { NextPage } from 'next';
import AllCate from '../../components/Category/AllCate';
import CateHero from '../../components/Category/CateHero';

const Category: NextPage = () => {
  return (
    <div>
      <div className="text-center py-5 sm:py-10 shadow-md bg-white text-xl sm:text-2xl font-extrabold">
        Browse Coupons by Category
      </div>
      <div className="bg-[#f7f7f7]">
        <CateHero />
        <AllCate data={Cate} />
      </div>
    </div>
  );
};
const Cate = [
  { name: 'A-level' },
  { name: 'Aaa Membership' },
  { name: 'Travel' },
  { name: 'Pizza' },
  { name: 'Car Rentals' },
  { name: 'Restaurants' },
  { name: 'Fast Food' },
  { name: 'Shoes' },
  { name: 'XBox' },
  { name: 'Weathertech' },
  { name: 'Flight' },
  { name: 'Free Prints' },
  { name: 'Jewelry' },
  { name: 'TV' },
  { name: 'Clothing' },
  { name: 'Bath And Body' },
  { name: 'Hotels' },
  { name: 'Phones' },
  { name: 'Electronics' },
  { name: 'Playstation' },
  { name: 'Movie Theaters' },
  { name: 'Flowers' },
  { name: 'Makeup' },
  { name: 'Photo' },
  { name: 'Food Delivery' },
  { name: 'Furniture' },
  { name: 'Toys' },
  { name: 'IPhone' },
  { name: 'Beauty' },
  { name: 'Birkenstock' },
  { name: 'Nespresso' },
  { name: 'Marathon' },
  { name: 'Video Games' },
  { name: 'Books' },
  { name: 'Pets' },
  { name: 'Tools' },
  { name: 'Baby' },
];

export default Category;
