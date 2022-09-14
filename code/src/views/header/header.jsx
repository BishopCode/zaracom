import './header.scss';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import ShoppingCart from '../shopping-cart/shopping-cart';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

function Header() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="header">
      {/* Content header */}
      <div className="header__content">
        <Link to="/">
          <div className="image">
            <img src={logo} alt="logo" />
            <span>Mobile</span>
          </div>
        </Link>
        <div className="shopping-cart">
          <ShoppingCart />
          <span className="text">Mi carrito</span>
        </div>
      </div>
      {/* breadcrumbs */}
      <div className="header__breadcrumbs">
        {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
      </div>
    </div>
  );
}

export default Header;
