import React from 'react';

class Header extends React.Component {

  render () {
    return (
      <header>
        <img class="header-logo" href="https://www.etsy.com/?ref=lgo" src="/images/etsylogo@2x.20160609191624.png" />

        <ul>
          <li class="home"><a href="https://www.etsy.com/?ref=hdr">Home</a></li>
          <li class="favorites"><a href="https://www.etsy.com/people/Graymalkyn/favorites?ref=hdr">Favorites</a></li>
          <li class="your-shop"><a href="https://www.etsy.com/shop/Graymalkyn?ref=hdr_shop_menu">Your Shop</a></li>
          <li class="cart"><a href="https://www.etsy.com/cart?ref=hdr">Cart</a></li>
        </ul>


        <h1>Mark's Etsy Listings!</h1>
      </header>
    );
  }
}

module.exports = Header;
