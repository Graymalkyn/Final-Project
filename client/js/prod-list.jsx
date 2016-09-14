import React from 'react';
import store from './prod-store.jsx';

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

    var className = '';

    return (
      <div>
        <ul className="list">
          {this.state.name.map(function(listings, i){
          console.log('listings', listings);
            return (
              <li key={i} >
                <div id="title">Title: {listings.title} </div>
                <div id="listing_id">Listing ID#: {listings.listing_id} </div>
                <div id="description">Description: {listings.description} </div>
                <div id="currency_code">Currency Code: {listings.currency_code}</div>
                <div id="price">Price: {listings.price} </div>
                <div id="quantity">Quantity: {listings.quantity} </div>
                <div id="state">State: {listings.state} </div>
                <div id="url">URL: {listings.url} </div>
                <div id="when_made">When it was made: {listings.when_made} </div>
                <div id="who_made">Who made it: {listings.who_made} </div>
              </li>
            )
          })}
        </ul>
      </div>
    )

  };
};

module.exports = ProdList;
