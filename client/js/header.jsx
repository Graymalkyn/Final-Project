import React from 'react';

class Header extends React.Component {

  render () {
    return (
      <header>

        <ul>
          <li id="home"><a href="http://localhost:5000/#/">Home</a></li>
          <li id="favorites"><a href="https://www.etsy.com/people/Graymalkyn/favorites?ref=hdr">Favorites</a></li>
          <li id="your-shop"><a href="https://www.etsy.com/shop/Graymalkyn?ref=hdr_shop_menu">My Etsy Shop</a></li>
          <li id="cart"><a href="https://www.etsy.com/cart?ref=hdr">My Cart</a></li>
        </ul>

        <a href="https://www.etsy.com/"><img className="header-logo"  src="/images/etsylogo@2x.20160609191624.png" /></a>


        <h1>Mark's Etsy Listings!</h1>


      </header>
    );
  }
}

module.exports = Header;
