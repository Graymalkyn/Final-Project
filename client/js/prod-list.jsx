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
                <div id="title"><strong>Title: </strong><a href={listings.url} id="url">{listings.title} </a></div>
                <div id="listing_id"><strong>Listing ID#:</strong> {listings.listing_id} </div>
                <div id="description"><strong>Description:</strong> {listings.description} </div>
                <div id="currency_code"><strong>Currency Code:</strong> {listings.currency_code}</div>
                <div id="price"><strong>Price:</strong> {listings.price} </div>
                <div id="quantity"><strong>Quantity:</strong> {listings.quantity} </div>
                <div id="state"><strong>State:</strong> {listings.state} </div>
                <div id="when_made"><strong>When it was made:</strong> {listings.when_made} </div>
                <div id="who_made"><strong>Who made it:</strong> {listings.who_made} </div>
                <div id="user_id"><strong>User ID#:</strong> {listings.user_id} </div>
              </li>
            )
          })}
        </ul>
      </div>
    )

  };
};

module.exports = ProdList;
