import { AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';
import { Cart } from './';

const Navbar = () => (
  <div className="navbar-container">
    <p className="logo">
      <Link href="/">Buyzon Sounds</Link>
    </p>
    <button className="cart-icon" type="button" onClick="">
      <AiOutlineShopping />
      <span className="cart-item-qty">1</span>
    </button>
    <Cart />
  </div>
);

export default Navbar;
