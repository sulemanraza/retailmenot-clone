import { NextPage } from 'next';
import Hero from '../components/Home/Hero';
import MoreCate from '../components/Home/MoreCate';
import Offers from '../components/Home/Offers';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Offers />
      <MoreCate cate={Cate} store={store} />
    </>
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

const store = [
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

export default Home;
