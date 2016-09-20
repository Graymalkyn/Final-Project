import React from 'react';
import store from './prod-store.jsx';
import { Link } from 'react-router'

class ProdList extends React.Component{

constructor() {
  super();

  store.actions.load();

  this.state = store.getState();

  var self = this;

  store.addListener(function(state){
    // console.log('changed', state)
    self.setState(state);
  })
};

  render() {

    return (
      <ul className="listing">
        {this.state.name.map(function(listings, i){
        // console.log('listings', listings);
          return (
            <li id="item-listing-box-1" key={i} >
              <div id="image"><strong></strong> <img src={listings.Images[0].url_170x135} /></div>
              <div id="title"><strong>Title:</strong> {listings.title} </div>
              <div id="listing_id"><strong>Listing ID#:</strong> {listings.listing_id} </div>
              <div id="price"><strong>Price:</strong> {listings.price} </div>
              <div id="url"><strong>URL:</strong><a href={listings.url} id="url"> {listings.url} </a></div>
            <button> <Link to={'/detail/' + listings.listing_id}>See Full Listing</Link></button>
            </li>
          )
        })}
      </ul>

    )

  };

};

module.exports = ProdList;
