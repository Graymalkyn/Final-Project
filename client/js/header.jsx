import React from 'react';

class Header extends React.Component {

  render () {
    return (
      <header>
        <div>
          <ul>
            <li className="home"><a href="http://localhost:5000/#/">Home</a></li>
            <li className="favorites"><a href="https://www.etsy.com/people/Graymalkyn/favorites?ref=hdr">Favorites</a></li>
            <li className="your-shop"><a href="https://www.etsy.com/shop/Graymalkyn?ref=hdr_shop_menu">My Etsy Shop</a></li>
            <li className="cart"><a href="https://www.etsy.com/cart?ref=hdr">My Cart</a></li>
          </ul>
        </div>

        <h1>Mark's Etsy Listings!</h1>

      </header>
    );
  }
}

module.exports = Header;
