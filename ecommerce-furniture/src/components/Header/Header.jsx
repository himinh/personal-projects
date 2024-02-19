import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.scss';
import { HiShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';
import { formatToVND } from '../../helps/formatToVND';

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const [nav, setNav] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getTotalPrice = () => {
    let total = 0;

    cart.forEach((item) => {
      total += Math.round(item.price) * item.quantity;
    });
    return total;
  };

  const changeCategory = (category) => {
    dispatch(handleCategory(category));
    navigate('/shop');
  };

  const closeHamburger = () => {
    setNav(false);
    setHamburger(true);
  };

  const openHamburger = () => {
    setNav(true);
    setHamburger(false);
  };

  return (
    <header className="bg-white">
      <div className="page-container">
        <div className="header-content">
          <div className="header-left">
            {/* Logo */}
            <div className="logo-part pe-4">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            {/* Menus */}
            <ul className="dekstop-nav list-unstyled m-0">
              {/* Tất cả sản phẩm */}
              <li>
                <button
                  className="clean-button"
                  onClick={() => {
                    changeCategory('All');
                  }}
                >
                  Tất cả sản phẩm
                </button>
              </li>

              {/* Sofa */}
              <li>
                <button
                  className="clean-button"
                  onClick={() => {
                    changeCategory('Sofa');
                  }}
                >
                  Sofa
                </button>
              </li>

              {/* Ghế */}
              <li>
                <button
                  className="clean-button"
                  onClick={() => {
                    changeCategory('Chair');
                  }}
                >
                  Ghế
                </button>
              </li>

              {/* Bàn */}
              <li>
                <button
                  className="clean-button"
                  onClick={() => {
                    changeCategory('Table');
                  }}
                >
                  Bàn
                </button>
              </li>
            </ul>
          </div>

          {/* Carts  */}
          <div className="header-right">
            {/* Tiền */}
            <p className="price">{formatToVND(getTotalPrice())}</p>

            {/* Carts */}
            <div className="cart">
              <Link to="/cart">
                <HiShoppingCart />
              </Link>

              {/* Quantity  */}
              <p className="cart-quantity">{getTotalQuantity()}</p>
            </div>

            {/* Menu icons */}
            <div className="hamburger-menu">
              {hamburger ? (
                <button
                  onClick={() => {
                    openHamburger();
                  }}
                >
                  <GiHamburgerMenu />
                </button>
              ) : (
                <button
                  onClick={() => {
                    closeHamburger();
                  }}
                >
                  <IoCloseSharp />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menus responsive */}
      <ul
        className={
          nav
            ? 'mobile-nav open-nav  list-unstyled m-0'
            : 'mobile-nav list-unstyled m-0'
        }
      >
        <li>
          <button
            className="clean-button"
            onClick={() => {
              changeCategory('All');
              closeHamburger();
            }}
          >
            All Products
          </button>
        </li>
        <li>
          <button
            className="clean-button"
            onClick={() => {
              changeCategory('Sofa');
              closeHamburger();
            }}
          >
            Sofa
          </button>
        </li>
        <li>
          <button
            className="clean-button"
            onClick={() => {
              changeCategory('Chair');
              closeHamburger();
            }}
          >
            Chair
          </button>
        </li>
        <li>
          <button
            className="clean-button"
            onClick={() => {
              changeCategory('Table');
              closeHamburger();
            }}
          >
            Table
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
