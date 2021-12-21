import { NextPage } from 'next';
import AllStore from '../../components/Store/AllStore';
import StoreHero from '../../components/Store/AllStore/Hero';

const Stores: NextPage = () => {
  return (
    <div>
      <div className="text-center py-5 sm:py-10 shadow-md bg-white text-xl sm:text-2xl font-extrabold">
        Browse Coupons by Store
      </div>
      <div className="bg-[#f7f7f7]">
        <StoreHero />
        {store && <AllStore data={store} />}
      </div>
    </div>
  );
};
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

export default Stores;
